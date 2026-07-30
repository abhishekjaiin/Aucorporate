import { NextRequest, NextResponse } from 'next/server'

type ContactSubmission = {
  name: string
  email: string
  company?: string
  phone?: string
  service?: string
  message: string
  // Honeypot field — real users never see or fill this in. Any value here
  // means the submission almost certainly came from a bot.
  website?: string
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}

function generateEmailHTML(data: ContactSubmission): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
      <h2 style="border-bottom: 3px solid #fbbf24; padding-bottom: 10px; margin-top: 0;">New Contact Form Submission</h2>
      
      <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p style="margin: 12px 0;"><strong>Name:</strong> ${escapeHtml(data.name)}</p>
        <p style="margin: 12px 0;"><strong>Email:</strong> <a href="mailto:${escapeHtml(data.email)}" style="color: #fbbf24;">${escapeHtml(data.email)}</a></p>
        ${data.company ? `<p style="margin: 12px 0;"><strong>Company:</strong> ${escapeHtml(data.company)}</p>` : ''}
        ${data.phone ? `<p style="margin: 12px 0;"><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>` : ''}
        ${data.service ? `<p style="margin: 12px 0;"><strong>Service Interest:</strong> ${escapeHtml(data.service)}</p>` : ''}
      </div>

      <div style="background: #fff; padding: 20px; border-left: 4px solid #fbbf24; margin: 20px 0;">
        <h3 style="color: #333; margin-top: 0;">Message:</h3>
        <p style="color: #555; line-height: 1.6; white-space: pre-wrap; margin: 0;">${escapeHtml(data.message)}</p>
      </div>

      <p style="color: #999; font-size: 12px; border-top: 1px solid #eee; padding-top: 15px; margin-top: 30px;">
        Submitted at: ${new Date().toLocaleString()} UTC
      </p>
    </div>
  `
}

async function sendEmailViaResend(data: ContactSubmission): Promise<boolean> {
  const resendApiKey = process.env.RESEND_API_KEY
  if (!resendApiKey) return false

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: 'partner@theaucorp.com',
        to: 'partner@theaucorp.com',
        subject: `New Inquiry from ${data.name} - AU Corporate`,
        html: generateEmailHTML(data),
        reply_to: data.email,
      }),
    })

    if (response.ok) {
      return true
    } else {
      const error = await response.text()
      console.error('Resend API error:', response.status, error)
      return false
    }
  } catch (error) {
    console.error('Resend email error:', error)
    return false
  }
}

async function sendEmailViaFormspree(data: ContactSubmission): Promise<boolean> {
  const formspreeKey = process.env.FORMSPREE_KEY
  if (!formspreeKey) return false

  try {
    const response = await fetch(`https://formspree.io/f/${formspreeKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        company: data.company || 'Not specified',
        phone: data.phone || 'Not provided',
        service: data.service || 'General Inquiry',
        message: data.message,
      }),
    })

    if (response.ok) {
      return true
    } else {
      console.error('Formspree API error:', response.status)
      return false
    }
  } catch (error) {
    console.error('Formspree email error:', error)
    return false
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Honeypot check: this field is hidden from real users via CSS.
    // A bot that blindly fills every input will populate it — silently
    // drop those submissions without giving any signal back to the bot.
    if (body.website) {
      return NextResponse.json(
        {
          success: true,
          message: 'Your inquiry has been received. We will respond within 24 hours.',
        },
        { status: 200 }
      )
    }

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields (Name, Email, Message)' },
        { status: 400 }
      )
    }

    // Validate field lengths to prevent abuse / oversized payloads
    if (body.name.length > 200 || body.email.length > 200 || body.message.length > 5000) {
      return NextResponse.json(
        { error: 'One or more fields exceed the maximum allowed length.' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    // Validate phone if provided
    if (body.phone && body.phone.length > 0 && body.phone.length < 5) {
      return NextResponse.json(
        { error: 'Please enter a valid phone number' },
        { status: 400 }
      )
    }

    const submissionData: ContactSubmission = {
      name: body.name,
      email: body.email,
      company: body.company || '',
      phone: body.phone || '',
      service: body.service || '',
      message: body.message,
    }

    // Log only non-sensitive metadata — never the visitor's PII (name,
    // email, phone, message) in plaintext server logs.
    console.log(
      `Contact form submission received at ${new Date().toISOString()} (message length: ${submissionData.message.length} chars)`
    )

    // Try to send email via available service
    let emailSent = false

    // Try Resend first
    emailSent = await sendEmailViaResend(submissionData)

    // Try Formspree if Resend failed
    if (!emailSent) {
      emailSent = await sendEmailViaFormspree(submissionData)
    }

    if (!emailSent) {
      // This is a critical failure: the visitor will still be told their
      // message was received (see below), but nobody at AU Corporate will
      // actually get it. Logged as an error (not a warning) so it surfaces
      // in Vercel's function logs / any alerting configured on this route.
      console.error(
        'CRITICAL: contact form submission could not be delivered — ' +
        'neither RESEND_API_KEY nor FORMSPREE_KEY is configured (or both failed). ' +
        'This lead has been LOST. Verify environment variables in the Vercel project settings.'
      )
    }

    // Always return success to the user — do not reveal backend delivery
    // failures in the response (better UX, and avoids giving spammers a
    // signal about server configuration).
    return NextResponse.json(
      {
        success: true,
        message: 'Your inquiry has been received. We will respond within 24 hours.',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'An error occurred processing your submission. Please try again.' },
      { status: 500 }
    )
  }
}
