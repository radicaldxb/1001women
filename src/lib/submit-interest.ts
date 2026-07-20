import { site } from "@/data/site";

export type InterestPayload = {
  type: "preorder" | "join";
  name: string;
  email: string;
  interest?: string;
  region?: string;
  role?: string;
};

export const thankYouCopy = {
  title: "Thank you",
  body: `Your interest has been sent to the ${site.name} team. We’ll be in touch by email when there is relevant news.`,
} as const;

async function deliverWithWeb3Forms(payload: InterestPayload) {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  if (!accessKey) return false;

  const subject =
    payload.type === "preorder"
      ? `1001 Women – Children’s book interest (${payload.interest})`
      : `1001 Women – Take part`;

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject,
      from_name: site.name,
      name: payload.name,
      email: payload.email,
      form: payload.type,
      interest: payload.interest || "",
      region: payload.region || "",
      role: payload.role || "",
      message:
        payload.type === "preorder"
          ? `Pre-order interest: ${payload.interest}\nRegion: ${payload.region}`
          : "Take part registration",
    }),
    signal: AbortSignal.timeout(15000),
  });

  const data = (await response.json().catch(() => null)) as {
    success?: boolean;
    message?: string;
  } | null;

  if (!response.ok || !data?.success) {
    throw new Error(data?.message || "Unable to send your interest right now.");
  }

  return true;
}

async function deliverWithApi(payload: InterestPayload) {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 15000);

  try {
    const response = await fetch("/api/interest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    if (!response.ok) {
      const data = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;
      throw new Error(data?.error || "Unable to send your interest right now.");
    }
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      throw new Error("The request timed out. Please try again.");
    }
    throw error;
  } finally {
    window.clearTimeout(timeout);
  }
}

export async function submitInterest(payload: InterestPayload): Promise<void> {
  const delivered = await deliverWithWeb3Forms(payload);
  if (!delivered) {
    await deliverWithApi(payload);
  }

  try {
    const { saveInterestLocally } = await import("@/lib/local-interest");
    saveInterestLocally(payload);
  } catch {
    // Ignore localStorage failures
  }
}
