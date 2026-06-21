import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const REQUIRED_FIELDS = ["name", "email"];
const MAX_FIELD_LENGTH = 1000;
const MAX_MESSAGE_LENGTH = 4000;

function sanitize(value) {
  if (typeof value !== "string") {
    return "";
  }
  return value.trim();
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label, value) {
  const safeValue = value ? escapeHtml(value) : "—";
  return `<tr><td style="padding:6px 12px;background:#f7f9fb;font-weight:600;border:1px solid #e2e8f0;">${label}</td><td style="padding:6px 12px;border:1px solid #e2e8f0;white-space:pre-wrap;">${safeValue}</td></tr>`;
}

function plainRow(label, value) {
  return `${label}: ${value || "—"}`;
}

export async function POST(request) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (payload?.website) {
    return NextResponse.json({ ok: true });
  }

  const fields = {
    name: sanitize(payload.name).slice(0, MAX_FIELD_LENGTH),
    phone: sanitize(payload.phone).slice(0, MAX_FIELD_LENGTH),
    email: sanitize(payload.email).slice(0, MAX_FIELD_LENGTH),
    arrival: sanitize(payload.arrival).slice(0, 64),
    departure: sanitize(payload.departure).slice(0, 64),
    apartment: sanitize(payload.apartment).slice(0, MAX_FIELD_LENGTH),
    adults: sanitize(payload.adults).slice(0, 16),
    children: sanitize(payload.children).slice(0, 16),
    pets: sanitize(payload.pets).slice(0, MAX_FIELD_LENGTH),
    referral: sanitize(payload.referral).slice(0, MAX_FIELD_LENGTH),
    promo: sanitize(payload.promo).slice(0, MAX_FIELD_LENGTH),
    message: sanitize(payload.message).slice(0, MAX_MESSAGE_LENGTH),
    consent: Boolean(payload.consent),
  };

  for (const required of REQUIRED_FIELDS) {
    if (!fields[required]) {
      return NextResponse.json(
        { error: `Missing required field: ${required}` },
        { status: 400 },
      );
    }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  if (!fields.consent) {
    return NextResponse.json(
      { error: "Please confirm consent for personal data usage" },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !fromEmail || !toEmail) {
    return NextResponse.json(
      { error: "Email service is not configured" },
      { status: 500 },
    );
  }

  const subject = `New booking request — ${fields.name}`;

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#0f172a;">
      <h2 style="margin:0 0 16px;font-size:18px;">New booking request</h2>
      <table style="border-collapse:collapse;font-size:14px;">
        ${row("Name", fields.name)}
        ${row("Email", fields.email)}
        ${row("Phone", fields.phone)}
        ${row("Arrival", fields.arrival)}
        ${row("Departure", fields.departure)}
        ${row("Apartment type", fields.apartment)}
        ${row("Adults", fields.adults)}
        ${row("Children", fields.children)}
        ${row("Pets", fields.pets)}
        ${row("How did you find us?", fields.referral)}
        ${row("Promotion code", fields.promo)}
        ${row("Special request", fields.message)}
      </table>
      <p style="margin-top:16px;color:#475569;font-size:12px;">Sent from rauhanvillage-site contact form.</p>
    </div>
  `;

  const text = [
    plainRow("Name", fields.name),
    plainRow("Email", fields.email),
    plainRow("Phone", fields.phone),
    plainRow("Arrival", fields.arrival),
    plainRow("Departure", fields.departure),
    plainRow("Apartment type", fields.apartment),
    plainRow("Adults", fields.adults),
    plainRow("Children", fields.children),
    plainRow("Pets", fields.pets),
    plainRow("How did you find us?", fields.referral),
    plainRow("Promotion code", fields.promo),
    "",
    "Special request:",
    fields.message || "—",
  ].join("\n");

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: fields.email,
      subject,
      html,
      text,
    });

    if (result.error) {
      // eslint-disable-next-line no-console
      console.error("Resend error:", result.error);
      return NextResponse.json(
        { error: "Could not send the message. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Could not send the message. Please try again." },
      { status: 500 },
    );
  }
}
