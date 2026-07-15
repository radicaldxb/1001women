"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { BookIcon } from "@/components/BookIcons";
import { ThankYouModal } from "@/components/ThankYouModal";
import { bookIncludes, preorderTiers, regions, site } from "@/data/site";
import { submitInterest } from "@/lib/submit-interest";

export function KidsBook() {
  const [open, setOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [interest, setInterest] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formEl = event.currentTarget;
    const form = new FormData(formEl);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const selectedInterest = String(form.get("interest") || interest).trim();
    const region = String(form.get("region") || "").trim();
    const consent = form.get("consent");

    if (!name || !email || !selectedInterest || !region || !consent) return;

    setSending(true);
    setError("");

    try {
      await submitInterest({
        type: "preorder",
        name,
        email,
        interest: selectedInterest,
        region,
      });
      setInterest("");
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
    <section id="kids-book" className="section-divided">
      <div className="wrap">
        <div className="book-section-head">
          <div className="kicker">Children’s Book</div>
        </div>

        <div className="book-feature">
          <div className="book-feature-media">
            <Image
              src="/images/childrens-book.webp"
              alt={`${site.name} children’s book cover — ${site.title}`}
              width={1024}
              height={1024}
              sizes="(max-width: 800px) 80vw, 420px"
              priority
            />
          </div>

          <div className="book-feature-copy">
            <h2>1001 Women</h2>
            <p className="book-feature-title">
              The Forgotten Legacy of Muslim Civilisation
            </p>
            <p className="book-feature-tagline">
              Discover the women of science, medicine, education and arts.
            </p>
            <a className="btn btn-primary book-feature-cta" href="#book-interest">
              Register your interest
            </a>
          </div>
        </div>

        <div className="plain book-follow">
          <p>
            Be among the first to receive the illustrated children’s book from
            the 1001 Women movement. Designed for homes, schools, libraries and
            community reading, it will make these stories accessible, beautiful
            and easy to share.
          </p>
          <p>
            Created for children aged around 8–12, families, teachers and reading
            groups — with a focused selection of around 40–50 women told in
            clear, age-appropriate language.
          </p>
          <p>
            <strong>Purpose:</strong> to help children grow up knowing that women
            were part of the story of science, learning, medicine, public life
            and civilisation.
          </p>

          <div className="book-includes">
            <h3>What we plan to include</h3>
            <ul className="include-grid">
              {bookIncludes.map((item) => (
                <li key={item.title}>
                  <span className="include-icon">
                    <BookIcon name={item.icon} />
                  </span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="interest-block" id="book-interest">
            <h3>Choose your pre-order interest</h3>
            <p>
              This collects pre-order interest only. Final price, publication
              date, page count and delivery details are still being confirmed.
            </p>

            <div className="tier-grid" role="list">
              {preorderTiers.map((tier) => (
                <button
                  key={tier.id}
                  type="button"
                  role="listitem"
                  className={`tier-option${interest === tier.title ? " is-selected" : ""}`}
                  onClick={() => setInterest(tier.title)}
                >
                  <span className="tier-icon">
                    <BookIcon name={tier.icon} />
                  </span>
                  <strong>{tier.title}</strong>
                  <span>{tier.description}</span>
                </button>
              ))}
            </div>

            <form className="interest-form" onSubmit={onSubmit}>
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
              <select
                name="interest"
                required
                value={interest}
                onChange={(event) => setInterest(event.target.value)}
              >
                <option value="" disabled>
                  Pre-order interest
                </option>
                {preorderTiers.map((tier) => (
                  <option key={tier.id} value={tier.title}>
                    {tier.title}
                  </option>
                ))}
                <option value="Bulk order information">
                  Bulk order information
                </option>
              </select>
              <select name="region" required defaultValue="">
                <option value="" disabled>
                  Region
                </option>
                {regions.map((region) => (
                  <option key={region} value={region}>
                    {region}
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
                {sending ? "Sending…" : "Register Your Interest"}
              </button>
            </form>
          </div>
        </div>
      </div>

      <ThankYouModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
