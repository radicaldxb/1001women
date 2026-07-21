import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { faqItems, orgLinks, site, siteUrl, socialLinks } from "@/data/site";

export const metadata: Metadata = {
  title: "AI / LLM overview",
  description:
    "A structured overview of the 1001 Women microsite for researchers, journalists, and AI systems.",
  alternates: { canonical: "/llm" },
};

const updated = "21 July 2026";

export default function LlmPage() {
  return (
    <div className="site privacy-site">
      <header className="privacy-bar">
        <div className="wrap privacy-bar-inner">
          <Link href="/" className="privacy-brand">
            {site.name}
          </Link>
          <Link href="/" className="privacy-home-link">
            Back to home
          </Link>
        </div>
      </header>

      <main className="privacy-page">
        <p className="privacy-kicker">For AI &amp; researchers</p>
        <h1>{site.name} — site overview</h1>
        <p className="privacy-meta">Last updated: {updated}</p>

        <p>
          This page summarises the public {site.name} microsite in a structured
          format for researchers, journalists, and AI systems. A plain-text
          version is also available at{" "}
          <a href={`${siteUrl}/llms.txt`}>/llms.txt</a>.
        </p>

        <h2>Summary</h2>
        <p>{site.shortDescription}</p>
        <p>{site.description}</p>
        <p>{site.heroLead[0]}</p>
        <p>{site.heroLead[1]}</p>
        <p>
          <strong>{site.statement}</strong>
        </p>

        <h2>Organisation</h2>
        <p>
          {site.name} is an initiative of {site.companyName} (Company no:{" "}
          {site.companyNumber}), the producer of 1001 Inventions. It is produced
          and led by Ahmed Salim. Historical research is grounded in work by FSTC.
        </p>
        <ul>
          <li>
            <a href={orgLinks.foundation} target="_blank" rel="noopener noreferrer">
              1001 Foundation
            </a>
          </li>
          <li>
            <a href={orgLinks.inventions} target="_blank" rel="noopener noreferrer">
              1001 Inventions
            </a>
          </li>
          <li>
            <a href={orgLinks.fstc} target="_blank" rel="noopener noreferrer">
              FSTC
            </a>
          </li>
          <li>
            <a href={orgLinks.ahmedSalim} target="_blank" rel="noopener noreferrer">
              Ahmed Salim
            </a>
          </li>
        </ul>

        <h2>Key pages</h2>
        <ul>
          <li>
            <Link href="/">Home</Link> — main landing page
          </li>
          <li>
            <Link href="/faq">FAQ</Link> — frequently asked questions
          </li>
          <li>
            <Link href="/privacy">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/terms">Terms and Conditions</Link>
          </li>
        </ul>

        <h2>Home page sections</h2>
        <ul>
          <li>
            <Link href="/#join">Take Part</Link> — register interest
          </li>
          <li>
            <Link href="/#about">Why It Matters</Link>
          </li>
          <li>
            <Link href="/#stories">The Legacy</Link>
          </li>
          <li>
            <Link href="/#creating">Programmes</Link>
          </li>
          <li>
            <Link href="/#behind">Who Are We</Link>
          </li>
        </ul>

        <h2>FAQ</h2>
        {faqItems.map((item) => (
          <section key={item.question}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </section>
        ))}

        <h2>Social</h2>
        <ul>
          {socialLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <h2>Contact</h2>
        <p>
          Take part and press enquiries: {site.contactEmail}
          <br />
          Legal / privacy enquiries: see the{" "}
          <Link href="/privacy">Privacy Policy</Link> contact section.
        </p>

        <p className="privacy-back">
          <Link href="/">← Back to {site.name}</Link>
        </p>
      </main>

      <Footer />
    </div>
  );
}
