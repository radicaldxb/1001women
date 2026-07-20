"use client";

import { FormEvent, useState } from "react";
import { ThankYouModal } from "@/components/ThankYouModal";
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
    const consent = form.get("consent");

    if (!name || !email || !consent) return;

    setSending(true);
    setError("");

    try {
      await submitInterest({
        type: "join",
        name,
        email,
        role: "Take part",
      });
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
    <section className="join section-divided" id="join">
      <div className="wrap join-content">
        <div className="join-panel">
          <div className="section-head">
            <div className="kicker">Take part</div>
            <h2>TAKE PART</h2>
            <p>
              Join the 1001 Women movement and help bring overlooked women of
              Muslim civilisation into homes, schools, museums, festivals,
              online platforms and public memory.
            </p>
          </div>

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
            <label className="consent">
              <input name="consent" type="checkbox" required />
              <span>
                I agree to receive updates by email and to the{" "}
                <a href="/privacy">Privacy Policy</a>.
              </span>
            </label>
            <button className="btn btn-primary" type="submit" disabled={sending}>
              {sending ? "Sending…" : "TAKE PART"}
            </button>
          </form>
        </div>
      </div>

      <ThankYouModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
