"use client";

import { FormEvent, useState } from "react";
import { StarSky } from "@/components/StarSky";
import { ThankYouModal } from "@/components/ThankYouModal";
import { interestRoles, site } from "@/data/site";
import { submitInterest } from "@/lib/submit-interest";

export function Join() {
  const [open, setOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formEl = event.currentTarget;
    const form = new FormData(formEl);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const role = String(form.get("role") || "").trim();
    const consent = form.get("consent");

    if (!name || !email || !role || !consent) return;

    setSending(true);
    setError("");

    try {
      await submitInterest({ type: "join", name, email, role });
      formEl.reset();
      setOpen(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to send your interest right now.",
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="join" id="join">
      <StarSky variant="section" />

      <div className="wrap join-content">
        <div className="section-head">
          <div className="kicker join-kicker">Join the movement</div>
          <h2>Join the 1001 Women movement</h2>
          <p>
            Help bring overlooked women of Muslim civilisation into homes,
            schools, museums, festivals, online platforms and public memory.
          </p>
        </div>

        <p className="join-links">
          <a
            href={`mailto:${site.contactEmail}?subject=1001%20Women%20Movement%20Interest`}
          >
            Email the team
          </a>
        </p>

        <form className="join-form" onSubmit={onSubmit}>
          {error && (
            <div className="form-error" role="alert">
              {error}
            </div>
          )}
          <input name="name" type="text" placeholder="Your name" required />
          <input
            name="email"
            type="email"
            placeholder="Email address"
            required
          />
          <select className="join-role" name="role" required defaultValue="">
            <option value="" disabled>
              How do you want to take part?
            </option>
            {interestRoles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
          <label className="consent">
            <input name="consent" type="checkbox" required />
            <span>
              I agree to receive updates by email and to the{" "}
              <a href="/privacy">Privacy Policy</a>.
            </span>
          </label>
          <button className="btn btn-primary" type="submit" disabled={sending}>
            {sending ? "Sending…" : "Register Interest"}
          </button>
        </form>
      </div>

      <ThankYouModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
