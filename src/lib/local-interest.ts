export type InterestSubmission = {
  id: string;
  type: "preorder" | "join";
  name: string;
  email: string;
  interest?: string;
  region?: string;
  role?: string;
  createdAt: string;
};

const STORAGE_KEY = "1001women-interest-v1";

export function saveInterestLocally(
  submission: Omit<InterestSubmission, "id" | "createdAt">,
): InterestSubmission {
  const record: InterestSubmission = {
    ...submission,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };

  if (typeof window === "undefined") return record;

  const existing = readInterestLocally();
  existing.push(record);
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
  return record;
}

export function readInterestLocally(): InterestSubmission[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}
