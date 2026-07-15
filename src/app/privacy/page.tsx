import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { orgLinks, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy – 1001 Women",
  description:
    "How the 1001 Women microsite handles interest registrations, local testing data and email updates.",
};

const updated = "15 July 2026";

export default function PrivacyPage() {
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
        <p className="privacy-kicker">Legal</p>
        <h1>Privacy Policy</h1>
        <p className="privacy-meta">Last updated: {updated}</p>

        <p>
          This Privacy Policy explains how <strong>{site.name}</strong>, an
          initiative of{" "}
          <a href={orgLinks.foundation} target="_blank" rel="noopener noreferrer">
            1001 Foundation
          </a>
          , uses information collected through this microsite. It applies to
          interest registration forms and related contact options on the site.
        </p>

        <h2>1. Who we are</h2>
        <p>
          {site.name} is produced and led by Ahmed Salim under 1001 Foundation,
          the producer of{" "}
          <a href={orgLinks.inventions} target="_blank" rel="noopener noreferrer">
            1001 Inventions
          </a>
          . For privacy questions, contact us at{" "}
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
        </p>

        <h2>2. What this website does</h2>
        <p>
          This microsite shares information about the {site.name} movement and
          collects expressions of interest for:
        </p>
        <ul>
          <li>the illustrated children’s book and pre-order updates</li>
          <li>educator, museum, creator, sponsor and publishing partnerships</li>
          <li>general movement updates</li>
        </ul>
        <p>
          Pre-order interest collected here is not a completed purchase. Final
          pricing, fulfilment and payment details will follow later through a
          separate checkout process if and when published.
        </p>

        <h2>3. Information we may collect</h2>
        <p>Depending on the form you submit, we may ask for:</p>
        <ul>
          <li>name</li>
          <li>email address</li>
          <li>region</li>
          <li>pre-order interest or preferred way to take part</li>
          <li>consent to receive email updates</li>
        </ul>
        <p>
          We do not ask for payment card details on this microsite. We do not
          intentionally collect special-category personal data through these
          forms.
        </p>

        <h2>4. Current local testing mode</h2>
        <p>
          While this version of the site runs for local development and review,
          form submissions are saved only in your browser’s{" "}
          <strong>local storage</strong> on your device. They are not sent to a
          server, database, marketing platform or email provider yet.
        </p>
        <p>
          That means the record stays on the device where you submitted it, and
          clearing your browser data will remove it. This mode exists for testing
          the forms before public launch.
        </p>

        <h2>5. How we will use information after launch</h2>
        <p>
          When the site is connected to production systems, we intend to use
          submitted details to:
        </p>
        <ul>
          <li>respond to your interest registration</li>
          <li>send relevant updates you have consented to receive</li>
          <li>plan book, exhibition, education and partnership outreach</li>
          <li>keep internal records of who asked to be contacted</li>
        </ul>
        <p>
          We will not sell your personal information. We will only share it with
          service providers who help us operate email, hosting or CRM tools, and
          only as needed to deliver those services under appropriate agreements.
        </p>

        <h2>6. Legal basis and consent</h2>
        <p>
          Interest forms ask for your consent to receive updates by email and to
          this Privacy Policy. You can withdraw consent at any time by emailing{" "}
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a> or by
          using an unsubscribe link included in future emails.
        </p>

        <h2>7. Children and young readers</h2>
        <p>
          The children’s book is intended for young readers together with
          parents, carers, teachers and schools. Registration forms on this site
          are aimed at adults. Please do not submit a child’s personal email
          address through these forms. If you believe we have received a child’s
          personal data in error, contact us and we will delete it.
        </p>

        <h2>8. Cookies and local storage</h2>
        <p>
          This version may use the browser’s local storage to remember form
          submissions during local testing. We do not currently use advertising
          trackers. If analytics or additional cookies are introduced before
          launch, this policy will be updated to describe them.
        </p>

        <h2>9. How long we keep information</h2>
        <p>
          In local testing mode, data remains only until you clear it from your
          browser. After launch, we will keep interest records only as long as
          needed to manage the relationship you asked for, meet operational needs,
          or comply with legal obligations, then delete or anonymise them.
        </p>

        <h2>10. Your rights</h2>
        <p>
          Depending on where you live, you may have rights to ask what personal
          data we hold, correct it, delete it, restrict processing, object to
          certain uses, or withdraw consent. To exercise these rights, email{" "}
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
        </p>

        <h2>11. International users</h2>
        <p>
          {site.name} may reach audiences in many countries. If personal data is
          transferred internationally after launch, we will take steps appropriate
          to the transfer and the laws that apply.
        </p>

        <h2>12. Changes to this policy</h2>
        <p>
          We may update this Privacy Policy as the project moves from local
          testing to public launch. The “Last updated” date at the top of this
          page will change when we do. Continued use of the forms after an
          update means you should review the revised wording.
        </p>

        <h2>13. Contact</h2>
        <p>
          Questions about this Privacy Policy or your interest registration:
        </p>
        <p>
          <strong>{site.name}</strong>
          <br />
          An initiative of 1001 Foundation
          <br />
          Email:{" "}
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
        </p>

        <p className="privacy-back">
          <Link href="/">← Back to {site.name}</Link>
        </p>
      </main>

      <Footer />
    </div>
  );
}
