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
const http = require('http');
const { loadStats, saveStats, getGuildStats } = require('./db');

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

// Persistent stats
const stats = loadStats();

// Rate limiting: max 1 scan per user per 3 seconds
const rateLimitMap = new Map();
const RATE_LIMIT_MS = 3000;

function isRateLimited(userId) {
  const now = Date.now();
  const lastScan = rateLimitMap.get(userId);
  if (lastScan && now - lastScan < RATE_LIMIT_MS) {
    return true;
  }
  rateLimitMap.set(userId, now);
  return false;
}

function getStats(guildId) {
  return getGuildStats(stats, guildId);
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

  if (isRateLimited(message.author.id)) return;

  const guildStats = getStats(message.guild.id);
  guildStats.messagesScanned++;

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
      `[SCAN] #${message.channel.name} @${message.author.tag} | flagged=${data.flagged} severity=${data.severity} scores=${JSON.stringify(data.scores)}`
    );

    if (data.flagged) {
      guildStats.alertsSent++;

      const isCritical = data.severity === 'CRITICAL';
      const isHigh = data.severity === 'HIGH';
      const hasSelfHarm = data.scores && data.scores.self_harm > 0;

      if (isHigh || isCritical) {
        await sendAlert(message, data);
      }

      if (isCritical && hasSelfHarm) {
        await notifyModerators(message, data);
      }
    }

    saveStats(stats);
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

  const isCritical = scan.severity === 'CRITICAL';
  const recommendedAction = scan.recommended_action || 'Review message and take appropriate action.';

  const embed = new EmbedBuilder()
    .setColor(isCritical ? 0xff0000 : 0xffa500)
    .setTitle(`🛡️ Guardian Alert — ${scan.severity || 'Threat Detected'}`)
    .addFields(
      { name: 'Severity', value: scan.severity || 'unknown', inline: true },
      { name: 'Author', value: `<@${message.author.id}>`, inline: true },
      { name: 'Channel', value: `<#${message.channel.id}>`, inline: true },
      { name: 'Recommended Action', value: recommendedAction },
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

    const recommendedAction = scan.recommended_action || 'Review message and take appropriate action.';

    const dmEmbed = new EmbedBuilder()
      .setColor(0xff0000)
      .setTitle('🚨 CRITICAL: Self-Harm Detected')
      .setDescription(
        `A critical self-harm message was detected in **${message.guild.name}** (<#${message.channel.id}>). Please take immediate action.`
      )
      .addFields(
        { name: 'Author', value: `<@${message.author.id}>`, inline: true },
        { name: 'Recommended Action', value: recommendedAction }
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
        { name: 'Messages Scanned', value: String(s.messagesScanned), inline: true },
        { name: 'Alerts Sent', value: String(s.alertsSent), inline: true },
        { name: 'Last Reset', value: s.lastReset ? new Date(s.lastReset).toLocaleString() : 'Never', inline: true }
      )
      .setFooter({ text: 'Stats are persisted to disk.' })
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

// Healthcheck server
const healthServer = http.createServer((req, res) => {
  if (req.url === '/health') {
    if (client.isReady()) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 'ok', uptime: process.uptime() }));
    } else {
      res.writeHead(503, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 'not ready' }));
    }
  } else {
    res.writeHead(404);
    res.end();
  }
});

healthServer.listen(9090, () => {
  console.log('Healthcheck server listening on port 9090');
});

client.login(DISCORD_BOT_TOKEN);

// Graceful shutdown
function shutdown(signal) {
  console.log(`Received ${signal}. Shutting down gracefully...`);
  client.destroy();
  healthServer.close(() => {
    process.exit(0);
  });
  setTimeout(() => process.exit(0), 5000);
}

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));
