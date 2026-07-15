import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/data/site";

type InterestBody = {
  type?: string;
  name?: string;
  email?: string;
  interest?: string;
  region?: string;
  role?: string;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function deliverViaNetlifyForms(
  request: Request,
  fields: Record<string, string>,
) {
  const origin = new URL(request.url).origin;
  const body = new URLSearchParams(fields).toString();

  const response = await fetch(`${origin}/__forms.html`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
    signal: AbortSignal.timeout(12000),
  });

  return response.ok;
}

async function deliverViaResend(fields: {
  subject: string;
  name: string;
  email: string;
  details: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;

  const resend = new Resend(apiKey);
  const from =
    process.env.RESEND_FROM_EMAIL || "1001 Women <onboarding@resend.dev>";

  const { error } = await resend.emails.send({
    from,
    to: [site.formRecipient],
    replyTo: fields.email,
    subject: fields.subject,
    text: [
      `Name: ${fields.name}`,
      `Email: ${fields.email}`,
      "",
      fields.details,
      "",
      `Source: ${site.name}`,
    ].join("\n"),
  });

  if (error) {
    throw new Error(error.message || "Resend delivery failed.");
  }

  return true;
}

export async function POST(request: Request) {
  let body: InterestBody;

  try {
    body = (await request.json()) as InterestBody;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const type = body.type === "preorder" || body.type === "join" ? body.type : null;
  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const interest = String(body.interest || "").trim();
  const region = String(body.region || "").trim();
  const role = String(body.role || "").trim();

  if (!type || !name || !email || !isEmail(email)) {
    return NextResponse.json(
      { error: "Please provide a valid name and email." },
      { status: 400 },
    );
  }

  if (type === "preorder" && (!interest || !region)) {
    return NextResponse.json(
      { error: "Please choose a pre-order interest and region." },
      { status: 400 },
    );
  }

  if (type === "join" && !role) {
    return NextResponse.json(
      { error: "Please tell us how you want to take part." },
      { status: 400 },
    );
  }

  const subject =
    type === "preorder"
      ? `1001 Women – Children’s book interest (${interest})`
      : `1001 Women – Movement interest (${role})`;

  const details =
    type === "preorder"
      ? `Pre-order interest: ${interest}\nRegion: ${region}`
      : `How they want to take part: ${role}`;

  const formFields: Record<string, string> = {
    "form-name": type,
    "bot-field": "",
    source: site.name,
    name,
    email,
    ...(type === "preorder" ? { interest, region } : { role }),
  };

  try {
    if (await deliverViaResend({ subject, name, email, details })) {
      return NextResponse.json({ ok: true, mode: "resend" });
    }

    if (await deliverViaNetlifyForms(request, formFields)) {
      return NextResponse.json({ ok: true, mode: "netlify" });
    }

    return NextResponse.json(
      {
        error:
          "Email delivery is not configured yet. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY (or RESEND_API_KEY) to .env.local, then restart the dev server.",
      },
      { status: 503 },
    );
  } catch (error) {
    console.error("Interest email failed", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to deliver your interest right now. Please try again.",
      },
      { status: 502 },
    );
  }
}
