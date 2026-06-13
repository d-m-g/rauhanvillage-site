# Contact / Booking form

The booking form on `/contact` posts to `src/app/api/contact/route.js`, which
sends the enquiry as an email via [Resend](https://resend.com).

## 1. Create a Resend account

1. Sign up at https://resend.com.
2. In the dashboard, go to **API Keys** → **Create API Key**. Give it a name
   such as "rauhanvillage-prod" and copy the value (`re_...`). Store it
   somewhere safe — Resend only shows it once.

## 2. Verify a sender domain

Resend will only send mail "from" a verified domain.

- In **Domains** → **Add Domain** add (for example) `rauhanvillage.com`.
- Resend gives you DNS records (SPF, DKIM, optional DMARC). Add them in your
  domain registrar. Once verified, you can send from any address on that domain,
  e.g. `booking@rauhanvillage.com`.

For initial testing you can skip domain setup and use Resend's onboarding
address: `onboarding@resend.dev` (only delivers to the email registered on
your Resend account).

## 3. Set environment variables

Copy `.env.example` → `.env.local` and fill in:

```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxx
CONTACT_FROM_EMAIL="Rauhan Village <booking@rauhanvillage.com>"
CONTACT_TO_EMAIL=rauhanvillage@gmail.com
```

`.env.local` is git-ignored.

### Vercel

Add the same three variables in **Vercel → Project → Settings → Environment
Variables** (Production + Preview). Redeploy after saving.

## 4. Run locally

```bash
npm run dev
```

Open `/contact`, submit the form, and the email will arrive in the address set
as `CONTACT_TO_EMAIL`.

## Spam protection

The form includes a hidden honeypot field (`website`). If a bot fills it in,
the API silently accepts the request without sending an email. This blocks
the majority of automated submissions with no impact on legitimate users.

For higher-volume protection, add Cloudflare Turnstile or hCaptcha and verify
the token in the API route before calling Resend.

## Customising the email

The HTML and plain-text bodies are built in `src/app/api/contact/route.js`.
Update field labels there.
