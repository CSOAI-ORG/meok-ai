import { NextRequest, NextResponse } from "next/server";

const leads: Array<{ email: string; source: string; timestamp: string }> = [];

export async function POST(request: NextRequest) {
  try {
    const { email, source } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "Valid email required" },
        { status: 400 }
      );
    }

    const lead = { email, source: source || "meok.ai", timestamp: new Date().toISOString() };
    leads.push(lead);

    console.log("[MEOK LEAD CAPTURED]", JSON.stringify(lead));

    if (process.env.DATABASE_URL) {
      try {
        const postgres = (await import("postgres")).default;
        const sql = postgres(process.env.DATABASE_URL);
        try {
          await sql`INSERT INTO subscribers (email, source, created_at) VALUES (${email}, ${source || "meok.ai"}, NOW()) ON CONFLICT DO NOTHING`;
        } finally {
          await sql.end();
        }
      } catch (dbErr) {
        console.error("DB write failed (non-critical):", dbErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Subscribed successfully",
      lead: { email, source: source || "meok.ai" }
    });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  const auth = request.headers.get("authorization");
  const adminToken = process.env.ADMIN_TOKEN;
  if (!adminToken) {
    console.error("ADMIN_TOKEN not configured");
    return NextResponse.json({ error: "Admin not configured" }, { status: 500 });
  }
  if (auth !== `Bearer ${adminToken}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json({ leads, count: leads.length });
}
