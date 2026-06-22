/**
 * MEOK AI LABS — Discord Webhook API
 * 
 * Send notifications from AI Squad to Discord channel
 */

import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { action, webhookUrl, message, squadName, characterName, type } = body;

    if (action === "notify" && webhookUrl) {
      const discordMessage = {
        content: message || "Notification from MEOK AI Squad",
        embeds: [
          {
            title: squadName || "AI Squad Update",
            description: message,
            color: 0xc9a84c, // Gold color
            fields: [
              {
                name: "Character",
                value: characterName || "AI Squad",
                inline: true,
              },
              {
                name: "Type",
                value: type || "notification",
                inline: true,
              },
            ],
            timestamp: new Date().toISOString(),
          },
        ],
      };

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(discordMessage),
      });

      if (!response.ok) {
        return NextResponse.json(
          { error: "Discord webhook failed" },
          { status: 400 }
        );
      }

      return NextResponse.json({ status: "sent" });
    }

    // Test webhook
    if (action === "test" && webhookUrl) {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: "✅ MEOK AI Squad connected!",
          embeds: [
            {
              title: "Connection Test",
              description: "Your Discord webhook is working!",
              color: 0x10b981,
            },
          ],
        }),
      });

      if (!response.ok) {
        return NextResponse.json(
          { error: "Test failed" },
          { status: 400 }
        );
      }

      return NextResponse.json({ status: "test_passed" });
    }

    return NextResponse.json(
      { error: "Missing webhookUrl" },
      { status: 400 }
    );
  } catch (error) {
    console.error("[Discord] Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  return NextResponse.json({
    status: "Discord Webhook API",
    actions: ["notify", "test"],
    requirements: ["webhookUrl"],
  });
}