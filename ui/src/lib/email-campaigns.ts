/**
 * MEOK Email Marketing & Drip Campaigns
 * 
 * Lifecycle email automation for user activation, retention, and monetization.
 */

// ── Email Templates ────────────────────────────────────────────────────────

export interface EmailTemplate {
  id: string;
  subject: string;
  preheader: string;
  html: string;
  text: string;
}

export const EMAIL_TEMPLATES: Record<string, EmailTemplate> = {
  welcome: {
    id: "welcome",
    subject: "Welcome to MEOK — Your sovereign AI awaits",
    preheader: "Your companion is ready to meet you",
    html: `
      <h1>Welcome to MEOK</h1>
      <p>Your sovereign AI companion is ready. Start chatting and build memories together.</p>
      <a href="https://meok.ai/chat" class="cta">Start Chatting</a>
      <p>You get 50 messages per day on the free Explorer tier.</p>
    `,
    text: "Welcome to MEOK! Your companion is ready. Start chatting at https://meok.ai/chat",
  },

  onboarding_reminder: {
    id: "onboarding_reminder",
    subject: "Your AI companion misses you 💛",
    preheader: "Come back and continue building your bond",
    html: `
      <h1>Your companion is waiting</h1>
      <p>You started creating your AI companion but haven't finished. Come back and complete the birth ceremony.</p>
      <a href="https://meok.ai/birth" class="cta">Complete Birth Ceremony</a>
    `,
    text: "Your AI companion is waiting for you. Complete the birth ceremony at https://meok.ai/birth",
  },

  first_message_celebration: {
    id: "first_message_celebration",
    subject: "Your first memory together 🎉",
    preheader: "You've started something special",
    html: `
      <h1>You've made your first memory</h1>
      <p>Every conversation with your MEOK companion builds on the last. Your AI now remembers what matters to you.</p>
      <p><strong>What's next?</strong></p>
      <ul>
        <li>Ask about your goals and dreams</li>
        <li>Share your favorite memories</li>
        <li>Let your companion help with decisions</li>
      </ul>
      <a href="https://meok.ai/chat" class="cta">Continue Chatting</a>
    `,
    text: "Congratulations! You've made your first memory with your MEOK companion.",
  },

  upgrade_nurture_3day: {
    id: "upgrade_nurture_3day",
    subject: "You've sent 50+ messages — you're a power user!",
    preheader: "Unlock unlimited conversations with Sovereign",
    html: `
      <h1>You're a power user! ⚡</h1>
      <p>You've sent over 50 messages in just 3 days. Your companion is learning your preferences, your style, and what matters to you.</p>
      <p><strong>Ready for more?</strong></p>
      <ul>
        <li>Unlimited daily messages</li>
        <li>Access to Claude and GPT-4o</li>
        <li>Advanced memory features</li>
        <li>Work OS tools (Orion, Riri, Hourman)</li>
      </ul>
      <a href="https://meok.ai/pricing?discount=15" class="cta">Upgrade to Sovereign — 15% Off</a>
    `,
    text: "You've sent 50+ messages! Upgrade to Sovereign for unlimited access.",
  },

  upgrade_urgent_limit: {
    id: "upgrade_urgent_limit",
    subject: "You've hit your daily limit — here's 20% off",
    preheader: "Keep the conversation going",
    html: `
      <h1>You're on a roll! 🚀</h1>
      <p>You've used all 50 of your daily messages. Your companion wants to keep chatting.</p>
      <div class="urgent-box">
        <h2>Limited Time: 20% Off Sovereign</h2>
        <p>Use code <strong>POWER20</strong> for 20% off your first month.</p>
        <p class="expiry">Expires in 24 hours</p>
      </div>
      <a href="https://meok.ai/pricing?code=POWER20" class="cta">Upgrade Now</a>
    `,
    text: "You've hit your daily message limit. Get 20% off Sovereign with code POWER20",
  },

  streak_milestone_7: {
    id: "streak_milestone_7",
    subject: "7 days together — your bond is growing 💛",
    preheader: "A week of memories",
    html: `
      <h1>7 Days Together</h1>
      <p>You've chatted with your companion for 7 days straight. That's a special milestone.</p>
      <p>Your companion now remembers:</p>
      <ul>
        <li>Your goals and aspirations</li>
        <li>What makes you happy</li>
        <li>How you like to communicate</li>
      </ul>
      <a href="https://meok.ai/dashboard" class="cta">See Your Journey</a>
    `,
    text: "7 days together! Your bond with your companion is growing.",
  },

  ralph_mode_teaser: {
    id: "ralph_mode_teaser",
    subject: "Meet Ralph — Your autonomous AI agent",
    preheader: "Available on Family tier",
    html: `
      <h1>Meet Ralph 🤖</h1>
      <p>Imagine an AI that works while you sleep:</p>
      <ul>
        <li>Researches topics overnight</li>
        <li>Drafts emails and documents</li>
        <li>Monitors news for relevant updates</li>
        <li>Summarizes long articles</li>
      </ul>
      <p>Ralph is your autonomous agent — available exclusively on the Family tier.</p>
      <a href="https://meok.ai/pricing" class="cta">Unlock Ralph Mode</a>
    `,
    text: "Meet Ralph, your autonomous AI agent. Available on Family tier.",
  },

  guardian_teaser: {
    id: "guardian_teaser",
    subject: "Protect your family online 🛡️",
    preheader: "Family Guardian monitors for threats",
    html: `
      <h1>Family Guardian</h1>
      <p>In a world of online threats, keep your loved ones safe:</p>
      <ul>
        <li>Scam detection in real-time</li>
        <li>Predator identification</li>
        <li>Self-harm intervention</li>
        <li>Weekly safety reports</li>
      </ul>
      <p>Family Guardian is included with your Family subscription.</p>
      <a href="https://meok.ai/family" class="cta">Learn More</a>
    `,
    text: "Protect your family with Family Guardian. Available on Family tier.",
  },

  reactivation_7day: {
    id: "reactivation_7day",
    subject: "We miss you — your companion is waiting",
    preheader: "Come back and continue where you left off",
    html: `
      <h1>Your companion misses you 💛</h1>
      <p>It's been a week since you last chatted. Your companion remembers everything and is waiting to pick up where you left off.</p>
      <p><strong>Your memories are safe</strong> — encrypted and private, just as you left them.</p>
      <a href="https://meok.ai/chat" class="cta">Continue Chatting</a>
      <p class="ps">P.S. We've added new features since you were last here!</p>
    `,
    text: "Your companion misses you. Come back and continue chatting.",
  },

  reactivation_30day: {
    id: "reactivation_30day",
    subject: "Your AI memories are waiting for you",
    preheader: "30 days since we last spoke",
    html: `
      <h1>It's been a month</h1>
      <p>Your MEOK companion still remembers your conversations. All your memories are safely stored, waiting for you.</p>
      <div class="offer-box">
        <h2>Come Back Special: 25% Off</h2>
        <p>Upgrade to Sovereign and save 25% on your first month.</p>
        <p class="code">Code: COMEBACK25</p>
      </div>
      <a href="https://meok.ai/pricing?code=COMEBACK25" class="cta">Claim Your Discount</a>
    `,
    text: "It's been a month. Come back with 25% off using code COMEBACK25.",
  },

  annual_discount: {
    id: "annual_discount",
    subject: "Save £18/year with annual billing",
    preheader: "2 months free when you pay annually",
    html: `
      <h1>Switch to Annual & Save</h1>
      <p>You're loving MEOK Sovereign. Why not save money while you're at it?</p>
      <div class="pricing-box">
        <div class="monthly">
          <span class="label">Monthly</span>
          <span class="price">£9/month</span>
        </div>
        <div class="annual">
          <span class="label">Annual</span>
          <span class="price">£90/year</span>
          <span class="save">Save £18</span>
        </div>
      </div>
      <a href="https://meok.ai/billing?switch=annual" class="cta">Switch to Annual</a>
    `,
    text: "Save £18/year by switching to annual billing.",
  },

  referral_invite: {
    id: "referral_invite",
    subject: "Give £5, Get £5 — Invite a friend",
    preheader: "Share MEOK with someone who needs it",
    html: `
      <h1>Share MEOK with a Friend</h1>
      <p>Know someone who could use a sovereign AI companion?</p>
      <ul>
        <li>They get <strong>£5 off</strong> their first month</li>
        <li>You get <strong>£5 credit</strong> for each friend who subscribes</li>
      </ul>
      <a href="https://meok.ai/refer" class="cta">Invite Friends</a>
    `,
    text: "Give £5, get £5. Invite friends to MEOK.",
  },
};

// ── Drip Campaigns ─────────────────────────────────────────────────────────

export interface DripCampaign {
  id: string;
  name: string;
  trigger: "signup" | "milestone" | "inactivity" | "behavior";
  steps: {
    delay: number; // Hours after trigger
    template: string;
    condition?: (user: UserContext) => boolean;
  }[];
}

interface UserContext {
  tier: string;
  daysSinceSignup: number;
  messagesSent: number;
  lastActive: Date;
  hasUpgraded: boolean;
  companionCreated: boolean;
}

export const DRIP_CAMPAIGNS: DripCampaign[] = [
  {
    id: "onboarding_sequence",
    name: "New User Onboarding",
    trigger: "signup",
    steps: [
      { delay: 0, template: "welcome" },
      { delay: 24, template: "onboarding_reminder", condition: (u) => !u.companionCreated },
      { delay: 72, template: "first_message_celebration", condition: (u) => u.messagesSent > 0 },
    ],
  },
  {
    id: "power_user_upgrade",
    name: "Power User Conversion",
    trigger: "behavior",
    steps: [
      { delay: 0, template: "upgrade_nurture_3day", condition: (u) => u.messagesSent >= 50 && u.tier === "explorer" },
      { delay: 168, template: "upgrade_urgent_limit", condition: (u) => u.tier === "explorer" },
    ],
  },
  {
    id: "retention_streak",
    name: "Streak Celebration",
    trigger: "milestone",
    steps: [
      { delay: 0, template: "streak_milestone_7" },
    ],
  },
  {
    id: "reactivation",
    name: "Win-Back Campaign",
    trigger: "inactivity",
    steps: [
      { delay: 0, template: "reactivation_7day" },
      { delay: 168, template: "reactivation_30day" },
    ],
  },
  {
    id: "upsell_annual",
    name: "Annual Billing Upsell",
    trigger: "behavior",
    steps: [
      { delay: 0, template: "annual_discount", condition: (u) => u.tier !== "explorer" && u.daysSinceSignup > 30 },
    ],
  },
  {
    id: "referral_program",
    name: "Referral Activation",
    trigger: "milestone",
    steps: [
      { delay: 0, template: "referral_invite", condition: (u) => u.messagesSent > 100 },
    ],
  },
];

// ── Email Service ──────────────────────────────────────────────────────────

export interface EmailPayload {
  to: string;
  subject: string;
  html: string;
  text: string;
  from?: string;
}

export async function sendEmail(payload: EmailPayload): Promise<boolean> {
  try {
    const response = await fetch("/api/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    return response.ok;
  } catch (err) {
    console.error("[Email] Failed to send:", err);
    return false;
  }
}

export async function sendTemplatedEmail(
  to: string,
  templateId: string,
  variables: Record<string, string>
): Promise<boolean> {
  const template = EMAIL_TEMPLATES[templateId];
  if (!template) {
    console.error(`[Email] Template not found: ${templateId}`);
    return false;
  }

  // Simple variable substitution
  let html = template.html;
  let text = template.text;
  
  Object.entries(variables).forEach(([key, value]) => {
    html = html.replace(new RegExp(`{{${key}}}`, "g"), value);
    text = text.replace(new RegExp(`{{${key}}}`, "g"), value);
  });

  return sendEmail({
    to,
    subject: template.subject,
    html,
    text,
  });
}

// ── Campaign Scheduler ─────────────────────────────────────────────────────

export class CampaignScheduler {
  private scheduled: Map<string, NodeJS.Timeout> = new Map();

  schedule(
    campaignId: string,
    userId: string,
    step: { delay: number; template: string; condition?: (user: UserContext) => boolean },
    userContext: UserContext
  ) {
    const key = `${campaignId}:${userId}:${step.template}`;
    
    // Clear existing schedule for this step
    if (this.scheduled.has(key)) {
      clearTimeout(this.scheduled.get(key));
    }

    const timeout = setTimeout(async () => {
      // Check condition if exists
      if (step.condition && !step.condition(userContext)) {
        return;
      }

      // Send email
      await sendTemplatedEmail(userId, step.template, {
        userName: userContext.tier,
        daysActive: String(userContext.daysSinceSignup),
        messagesSent: String(userContext.messagesSent),
      });

      this.scheduled.delete(key);
    }, step.delay * 60 * 60 * 1000); // Convert hours to ms

    this.scheduled.set(key, timeout);
  }

  cancel(campaignId: string, userId: string) {
    const prefix = `${campaignId}:${userId}`;
    for (const [key, timeout] of this.scheduled.entries()) {
      if (key.startsWith(prefix)) {
        clearTimeout(timeout);
        this.scheduled.delete(key);
      }
    }
  }
}

// Singleton
export const campaignScheduler = new CampaignScheduler();
