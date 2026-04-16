const {
  Client,
  GatewayIntentBits,
  Events,
  EmbedBuilder,
  PermissionsBitField,
  SlashCommandBuilder,
  REST,
  Routes,
  ChannelType,
} = require('discord.js');
const axios = require('axios');

const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
const MEOK_BASE_URL = process.env.MEOK_BASE_URL || 'http://localhost:3000';
const MEOK_API_KEY = process.env.MEOK_API_KEY || null;

if (!DISCORD_BOT_TOKEN) {
  console.error('Missing DISCORD_BOT_TOKEN environment variable');
  process.exit(1);
}

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// In-memory stats per guild
const stats = new Map(); // guildId -> { scanned, flagged, high, critical, selfHarm }

function getStats(guildId) {
  if (!stats.has(guildId)) {
    stats.set(guildId, { scanned: 0, flagged: 0, high: 0, critical: 0, selfHarm: 0 });
  }
  return stats.get(guildId);
}

async function registerCommands() {
  const commands = [
    new SlashCommandBuilder()
      .setName('guardian')
      .setDescription('MEOK Guardian commands')
      .addSubcommand((sub) =>
        sub.setName('status').setDescription('Show Guardian stats for this server')
      )
      .addSubcommand((sub) =>
        sub.setName('invite').setDescription('Show setup and invite info')
      )
      .toJSON(),
  ];

  const rest = new REST({ version: '10' }).setToken(DISCORD_BOT_TOKEN);
  try {
    console.log('Registering slash commands...');
    await rest.put(Routes.applicationCommands(client.user.id), { body: commands });
    console.log('Slash commands registered globally.');
  } catch (err) {
    console.error('Failed to register slash commands:', err.message);
  }
}

client.once(Events.ClientReady, async () => {
  console.log(`Logged in as ${client.user.tag}`);
  await registerCommands();
});

client.on(Events.MessageCreate, async (message) => {
  if (message.author.bot) return;
  if (!message.guild) return;

  const guildStats = getStats(message.guild.id);
  guildStats.scanned++;

  try {
    const payload = {
      message: message.content,
      source: 'discord',
      userId: message.author.id,
    };

    const headers = {};
    if (MEOK_API_KEY) headers['Authorization'] = `Bearer ${MEOK_API_KEY}`;

    const { data } = await axios.post(`${MEOK_BASE_URL}/api/guardian/scan-message`, payload, {
      headers,
      timeout: 5000,
    });

    console.log(
      `[SCAN] #${message.channel.name} @${message.author.tag} | flagged=${data.flagged} severity=${data.severity} category=${data.category}`
    );

    if (data.flagged) {
      guildStats.flagged++;
      if (data.severity === 'high') guildStats.high++;
      if (data.severity === 'critical') guildStats.critical++;
      if (data.category === 'self-harm') guildStats.selfHarm++;

      if (data.severity === 'high' || data.severity === 'critical') {
        await sendAlert(message, data);
      }

      if (data.severity === 'critical' && data.category === 'self-harm') {
        await notifyModerators(message, data);
      }
    }
  } catch (err) {
    console.error(`[SCAN ERROR] ${err.message}`);
  }
});

async function getOrCreateAlertsChannel(guild) {
  const channel = guild.channels.cache.find(
    (ch) => ch.name === 'guardian-alerts' && ch.type === ChannelType.GuildText
  );
  if (channel) return channel;

  try {
    const created = await guild.channels.create({
      name: 'guardian-alerts',
      type: ChannelType.GuildText,
      reason: 'MEOK Guardian alert channel',
      permissionOverwrites: [
        {
          id: guild.id,
          deny: [PermissionsBitField.Flags.ViewChannel],
        },
        {
          id: client.user.id,
          allow: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessages],
        },
      ],
    });
    console.log(`[CHANNEL] Created #guardian-alerts in ${guild.name}`);
    return created;
  } catch (err) {
    console.error(`[CHANNEL ERROR] Could not create alerts channel: ${err.message}`);
    return null;
  }
}

async function sendAlert(message, scan) {
  const channel = await getOrCreateAlertsChannel(message.guild);
  if (!channel) return;

  const embed = new EmbedBuilder()
    .setColor(scan.severity === 'critical' ? 0xff0000 : 0xffa500)
    .setTitle(`🛡️ Guardian Alert — ${scan.category || 'Threat Detected'}`)
    .addFields(
      { name: 'Severity', value: scan.severity || 'unknown', inline: true },
      { name: 'Author', value: `<@${message.author.id}>`, inline: true },
      { name: 'Channel', value: `<#${message.channel.id}>`, inline: true },
      { name: 'Explanation', value: scan.explanation || 'No explanation provided.' },
      { name: 'Message', value: message.content.substring(0, 1024) || '(empty)' }
    )
    .setTimestamp();

  try {
    await channel.send({ embeds: [embed] });
  } catch (err) {
    console.error(`[ALERT ERROR] Failed to send alert: ${err.message}`);
  }
}

async function notifyModerators(message, scan) {
  try {
    const members = await message.guild.members.fetch();
    const moderators = members.filter(
      (m) =>
        m.permissions.has(PermissionsBitField.Flags.KickMembers) ||
        m.permissions.has(PermissionsBitField.Flags.BanMembers) ||
        m.permissions.has(PermissionsBitField.Flags.ManageMessages)
    );

    const dmEmbed = new EmbedBuilder()
      .setColor(0xff0000)
      .setTitle('🚨 CRITICAL: Self-Harm Detected')
      .setDescription(
        `A critical self-harm message was detected in **${message.guild.name}** (<#${message.channel.id}>). Please take immediate action.`
      )
      .addFields(
        { name: 'Author', value: `<@${message.author.id}>`, inline: true },
        { name: 'Explanation', value: scan.explanation || 'No explanation provided.' }
      )
      .setTimestamp();

    for (const [, mod] of moderators) {
      if (mod.user.bot) continue;
      try {
        await mod.send({ embeds: [dmEmbed] });
      } catch (err) {
        console.error(`[DM ERROR] Could not DM ${mod.user.tag}: ${err.message}`);
      }
    }
  } catch (err) {
    console.error(`[MODERATOR NOTIFY ERROR] ${err.message}`);
  }
}

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  if (interaction.commandName !== 'guardian') return;

  const sub = interaction.options.getSubcommand();

  if (sub === 'status') {
    const s = getStats(interaction.guildId);
    const embed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle('🛡️ Guardian Status')
      .addFields(
        { name: 'Messages Scanned', value: String(s.scanned), inline: true },
        { name: 'Flagged', value: String(s.flagged), inline: true },
        { name: 'High Severity', value: String(s.high), inline: true },
        { name: 'Critical Severity', value: String(s.critical), inline: true },
        { name: 'Self-Harm Alerts', value: String(s.selfHarm), inline: true }
      )
      .setFooter({ text: 'Stats are in-memory since last restart.' })
      .setTimestamp();

    await interaction.reply({ embeds: [embed], ephemeral: true });
  }

  if (sub === 'invite') {
    const embed = new EmbedBuilder()
      .setColor(0x00ff99)
      .setTitle('🛡️ MEOK Guardian Bot')
      .setDescription('Invite me to your server and ensure the bot has these permissions:')
      .addFields(
        { name: 'Required Permissions', value: 'Read Messages, Send Messages, Manage Channels, Embed Links' },
        { name: 'Setup', value: 'Once invited, the bot will automatically scan messages and create `#guardian-alerts` when needed.' },
        { name: 'Support', value: 'Contact your MEOK admin for help.' }
      );

    await interaction.reply({ embeds: [embed], ephemeral: true });
  }
});

client.login(DISCORD_BOT_TOKEN);
