"use client";

import { FormEvent, useState } from "react";
import { StarSky } from "@/v1/components/StarSky";
import { interestRoles, site } from "@/v1/data/site";
import { saveInterestLocally } from "@/v1/lib/local-interest";

export function Join() {
  const [status, setStatus] = useState<"idle" | "saved">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const role = String(form.get("role") || "").trim();
    const consent = form.get("consent");

    if (!name || !email || !role || !consent) return;

    saveInterestLocally({
      type: "join",
      name,
      email,
      role,
    });

    setStatus("saved");
    event.currentTarget.reset();
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
          <a href={`mailto:${site.contactEmail}?subject=1001%20Women%20Movement%20Interest`}>
            Email the team
          </a>
        </p>

        <form className="join-form" onSubmit={onSubmit}>
          {status === "saved" && (
            <div className="form-success" role="status">
              Interest saved locally on this device. No database is connected yet
              — this is for local testing only.
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
            className="join-role"
            name="role"
            required
            defaultValue=""
          >
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
          <button className="btn btn-primary" type="submit">
            Register Interest
          </button>
        </form>
      </div>
    </section>
  );
}
