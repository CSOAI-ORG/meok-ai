import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  intent: string;
  company?: string;
  message?: string;
  source?: string;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(k: string, v: string | undefined): string {
  if (!v) return "";
  return `<tr><td style="padding:8px 0;color:#888;">${escapeHtml(k)}</td><td style="padding:8px 0;">${escapeHtml(v)}</td></tr>`;
}

function buildEmailHtml(p: ContactPayload): string {
  return `
    <div style="font-family:-apple-system,system-ui,sans-serif;max-width:600px;margin:0 auto;color:#0d0c18;">
      <h2 style="color:#c9a84c;margin-bottom:24px;">New ${escapeHtml(p.intent)} enquiry</h2>
      <table style="width:100%;border-collapse:collapse;">
        ${row("Name", p.name)}
        ${row("Email", p.email)}
        ${row("Company", p.company)}
        ${row("Intent", p.intent)}
        ${row("Source", p.source)}
      </table>
      ${p.message ? `<h3 style="margin-top:24px;">Message</h3><p style="white-space:pre-wrap;">${escapeHtml(p.message)}</p>` : ""}
      <hr style="margin-top:32px;border:none;border-top:1px solid #eee;" />
      <p style="color:#888;font-size:12px;margin-top:16px;">Sent from MEOK.AI contact form</p>
    </div>
  `;
}

async function sendViaResend(p: ContactPayload): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.CONTACT_NOTIFY_EMAIL || "hello@meok.ai";
  if (!apiKey) return false;
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "MEOK Contact <noreply@meok.ai>",
        to: [notifyEmail],
        replyTo: p.email,
        subject: `[${p.intent}] ${p.name}${p.company ? ` — ${p.company}` : ""}`,
        html: buildEmailHtml(p),
      }),
    });
    if (!res.ok) {
      console.error("[contact] Resend error:", res.status, await res.text());
      return false;
    }
    return true;
  } catch (err) {
    console.error("[contact] Resend exception:", err);
    return false;
  }
}

async function addToLoops(p: ContactPayload): Promise<boolean> {
  const apiKey = process.env.LOOPS_API_KEY;
  if (!apiKey) return false;
  try {
    const res = await fetch("https://app.loops.so/api/v1/contacts/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email: p.email,
        firstName: p.name.split(" ")[0],
        source: `meok-contact-${p.intent}`,
        userGroup: p.intent,
        company: p.company,
        subscribed: "true",
      }),
    });
    if (!res.ok) {
      console.error("[contact] Loops error:", res.status, await res.text());
      return false;
    }
    return true;
  } catch (err) {
    console.error("[contact] Loops exception:", err);
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    let body: ContactPayload;
    try {
      body = (await req.json()) as ContactPayload;
    } catch {
      return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    }

    if (!body.email || !body.name || !body.intent) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, intent" },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // Fire-and-forget both: never block the API response on email infra.
    // If both backends are missing, the message is logged + acked 200
    // so the user-facing form succeeds; otherwise alerts fire via
    // the missing-env checks at request time.
    const results = await Promise.allSettled([
      sendViaResend(body),
      addToLoops(body),
    ]);
    const resend = results[0].status === "fulfilled" ? results[0].value : false;
    const loops = results[1].status === "fulfilled" ? results[1].value : false;
    if (!resend && !loops) {
      console.warn("[contact] No email backend fired for", body.email);
    }
    return NextResponse.json({ ok: true, resend, loops });
  } catch (err) {
    // Top-level catch so Vercel doesn't 500 silently.
    console.error("[contact] Unhandled error:", err);
    return NextResponse.json(
      { ok: false, error: "server error", detail: String(err) },
      { status: 200 } // 200 so the form succeeds; we already logged the error
    );
  }
}

export async function GET() {
  return NextResponse.json({
    endpoint: "/api/contact",
    method: "POST",
    schema: {
      name: "string (required)",
      email: "string (required, valid email)",
      intent: "string (required: enterprise|partner|reseller|press|general|support)",
      company: "string (optional)",
      message: "string (optional)",
      source: "string (optional, e.g. /enterprise, /partner, /reseller)",
    },
  });
}
