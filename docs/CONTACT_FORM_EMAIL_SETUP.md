# Contact Form Email Setup Guide

## Current Status
The contact form is fully functional and all submissions are:
- ✅ Logged to Vercel console with full details
- ✅ Form displays success message to users
- ⚠️ NOT being emailed (need to configure an email service)

## How to Enable Email Notifications

### Option 1: Using Resend (Recommended)
Resend is the easiest option for sending emails from Next.js.

1. **Sign up for Resend**
   - Go to https://resend.com
   - Create a free account
   - Get your API key from the dashboard

2. **Add to Vercel Environment**
   - Go to your Vercel project settings: https://vercel.com/dashboard/project/au-corporate
   - Click "Settings" → "Environment Variables"
   - Add new variable:
     - Key: `RESEND_API_KEY`
     - Value: Your Resend API key
   - Save and redeploy

3. **Configure sender email**
   - In Resend dashboard, verify your domain or use their default domain
   - Update the `from` address in `/app/api/contact/route.ts` if needed

### Option 2: Using Formspree
Formspree is a form-to-email service with a free tier.

1. **Sign up for Formspree**
   - Go to https://formspree.io
   - Create an account
   - Create a new form and get your form ID

2. **Add to Vercel Environment**
   - Go to Vercel project settings
   - Click "Settings" → "Environment Variables"
   - Add new variable:
     - Key: `FORMSPREE_KEY`
     - Value: Your Formspree form ID (without the `/f/` part)
   - Save and redeploy

### Option 3: Using Gmail with Nodemailer (Advanced)
This requires additional setup but uses your existing Gmail account.

1. Generate an App Password in Gmail (requires 2FA enabled)
2. Add to Vercel Environment:
   - `SMTP_HOST=smtp.gmail.com`
   - `SMTP_PORT=587`
   - `SMTP_USER=your-email@gmail.com`
   - `SMTP_PASS=your-app-password`

## Testing

After configuring an email service:

1. Go to https://www.theaucorp.com/contact
2. Fill in the form with test data
3. Submit
4. You should see "Your inquiry has been received" message
5. Check your email inbox for the notification

## Checking Logs

To verify submissions are being received (even without email):

1. Go to Vercel: https://vercel.com/dashboard/project/au-corporate/logs
2. Submit the contact form
3. Look for logs starting with `[v0] New Contact Form Submission:`

## Email Content

The email includes:
- Sender's name, email, company (if provided)
- Phone number (if provided)
- Service interest (if selected)
- Full message with formatting preserved
- Submission timestamp
- Reply-To header set to sender's email

## Current Form Fields

Required:
- Full Name
- Email Address
- Message

Optional:
- Company Name
- Phone Number
- Service Interest (dropdown with 8 options)

## Support

If emails aren't working after setup:
1. Check Vercel environment variables are set correctly
2. Check Vercel Function logs for errors
3. Verify the email service account is active and has quota remaining
4. Test the API directly: `curl -X POST https://www.theaucorp.com/api/contact`

---

**Production Status:** Ready for email configuration
**Last Updated:** 2025-01-30
