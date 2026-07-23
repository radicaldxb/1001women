import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { faqItems, site, siteUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about the 1001 Women initiative, programmes, and how to take part.",
  alternates: { canonical: "/faq" },
};

const updated = "23 July 2026";
const contactEmailToken = "{{contactEmail}}";

function faqAnswerText(answer: string) {
  return answer.replaceAll(contactEmailToken, site.contactEmail);
}

function FaqAnswer({ answer }: { answer: string }) {
  if (!answer.includes(contactEmailToken)) {
    return <p>{answer}</p>;
  }

  const [before, after] = answer.split(contactEmailToken);
  const nodes: ReactNode[] = [
    before,
    <span key="email" className="privacy-email-line">
      <Image
        className="privacy-email-image"
        src="/images/legal/contact-email.svg"
        alt="Press and partnership enquiries email address"
        width={248}
        height={22}
      />
    </span>,
    after,
  ];

  return <p>{nodes}</p>;
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faqAnswerText(item.answer),
    },
  })),
};

export default function FaqPage() {
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <p className="privacy-kicker">Help</p>
        <h1>Frequently asked questions</h1>
        <p className="privacy-meta">Last updated: {updated}</p>

        <p>
          Answers about <strong>{site.name}</strong>, how to take part, and what
          is planned. For a machine-readable summary, see{" "}
          <Link href="/llm">AI / LLM overview</Link> or{" "}
          <a href={`${siteUrl}/llms.txt`}>/llms.txt</a>.
        </p>

        {faqItems.map((item, index) => (
          <section key={item.question}>
            <h2>
              {index + 1}. {item.question}
            </h2>
            <FaqAnswer answer={item.answer} />
          </section>
        ))}

        <p className="privacy-back">
          <Link href="/">← Back to {site.name}</Link>
        </p>
      </main>

      <Footer />
    </div>
  );
}
