/**
 * MEOK Email API
 * 
 * Sends transactional and marketing emails via Resend/Loops
 */

import { NextRequest, NextResponse } from 'next/server';
import { getAuthUserId } from '@/lib/api-auth';
import { EMAIL_TEMPLATES } from '@/lib/email-campaigns';

interface EmailPayload {
  to: string;
  templateId?: string;
  subject?: string;
  html?: string;
  text?: string;
  variables?: Record<string, string>;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    // Auth check - allow service workers and authenticated users
    const userId = await getAuthUserId();
    const apiKey = req.headers.get('x-api-key');
    const isServiceRequest = apiKey === process.env.INTERNAL_API_KEY;
    
    if (!userId && !isServiceRequest) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body: EmailPayload = await req.json();
    const { to, templateId, subject, html, text, variables } = body;

    if (!to) {
      return NextResponse.json({ error: 'Missing recipient email' }, { status: 400 });
    }

    let emailContent: { subject: string; html: string; text: string };

    // Use template or custom content
    if (templateId) {
      const template = EMAIL_TEMPLATES[templateId];
      if (!template) {
        return NextResponse.json({ error: 'Template not found' }, { status: 404 });
      }

      emailContent = {
        subject: template.subject,
        html: replaceVariables(template.html, variables || {}),
        text: replaceVariables(template.text, variables || {}),
      };
    } else if (subject && (html || text)) {
      emailContent = { subject, html: html || '', text: text || '' };
    } else {
      return NextResponse.json(
        { error: 'Must provide templateId or subject + html/text' },
        { status: 400 }
      );
    }

    // Send via Resend (primary) or Loops (fallback)
    const result = await sendEmailViaProvider(to, emailContent);

    if (!result.success) {
      console.error('[email/send] Failed:', result.error);
      return NextResponse.json(
        { error: 'Failed to send email', details: result.error },
        { status: 500 }
      );
    }

    // Log successful send
    console.log('[email/send] Sent:', { to, templateId, messageId: result.messageId });

    return NextResponse.json({
      success: true,
      messageId: result.messageId,
      provider: result.provider,
    });
  } catch (error) {
    console.error('[email/send] Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

async function sendEmailViaProvider(
  to: string,
  content: { subject: string; html: string; text: string }
): Promise<{ success: boolean; messageId?: string; provider: string; error?: string }> {
  const fromEmail = process.env.FROM_EMAIL || 'guardian@meok.ai';
  const fromName = process.env.FROM_NAME || 'MEOK AI';

  // Try Resend first
  if (process.env.RESEND_API_KEY) {
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: `${fromName} <${fromEmail}>`,
          to,
          subject: content.subject,
          html: content.html,
          text: content.text,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        return { success: true, messageId: data.id, provider: 'resend' };
      }

      const error = await response.text();
      console.warn('[email] Resend failed, trying Loops:', error);
    } catch (err) {
      console.warn('[email] Resend error:', err);
    }
  }

  // Fallback to Loops.so
  if (process.env.LOOPS_API_KEY) {
    try {
      const response = await fetch('https://app.loops.so/api/v1/transactional', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.LOOPS_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: to,
          transactionalId: process.env.LOOPS_TRANSACTIONAL_ID,
          dataVariables: {
            subject: content.subject,
            htmlContent: content.html,
            textContent: content.text,
          },
        }),
      });

      if (response.ok) {
        const data = await response.json();
        return { success: true, messageId: data.id, provider: 'loops' };
      }

      const error = await response.text();
      return { success: false, provider: 'loops', error };
    } catch (err) {
      return { success: false, provider: 'loops', error: String(err) };
    }
  }

  // Development fallback - just log
  if (process.env.NODE_ENV === 'development') {
    console.log('[email/dev] Would send:', { to, ...content });
    return { success: true, messageId: 'dev-' + Date.now(), provider: 'dev' };
  }

  return { success: false, provider: 'none', error: 'No email provider configured' };
}

function replaceVariables(text: string, variables: Record<string, string>): string {
  return text.replace(/\{\{(\w+)\}\}/g, (match, key) => variables[key] || match);
}

// Batch send endpoint for campaigns
export async function PUT(req: NextRequest): Promise<NextResponse> {
  try {
    const apiKey = req.headers.get('x-api-key');
    if (apiKey !== process.env.INTERNAL_API_KEY) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const { recipients, templateId, variables } = body;

    if (!Array.isArray(recipients) || !templateId) {
      return NextResponse.json(
        { error: 'Missing recipients or templateId' },
        { status: 400 }
      );
    }

    const results = await Promise.allSettled(
      recipients.map((email: string) =>
        fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/email/send`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': process.env.INTERNAL_API_KEY || '',
          },
          body: JSON.stringify({
            to: email,
            templateId,
            variables,
          }),
        })
      )
    );

    const succeeded = results.filter((r) => r.status === 'fulfilled').length;
    const failed = results.filter((r) => r.status === 'rejected').length;

    return NextResponse.json({
      success: true,
      total: recipients.length,
      succeeded,
      failed,
    });
  } catch (error) {
    console.error('[email/batch] Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
