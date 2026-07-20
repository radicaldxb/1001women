import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { orgLinks, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How 1001 Women processes and protects personal information collected through this website.",
  alternates: { canonical: "/privacy" },
};

const updated = "20 July 2026";

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
          This Privacy Policy describes how <strong>{site.name}</strong>{" "}
          processes and protects your personal information. {site.name} is an
          initiative of{" "}
          <a href={orgLinks.foundation} target="_blank" rel="noopener noreferrer">
            1001 Foundation (UK)
          </a>
          , the producer of{" "}
          <a href={orgLinks.inventions} target="_blank" rel="noopener noreferrer">
            1001 Inventions
          </a>
          . It applies to this microsite, including interest registration forms
          and related contact options.
        </p>

        <h2>1. About 1001 Women</h2>
        <p>
          {site.name} is a global initiative restoring awareness of overlooked
          women from Muslim civilisation — through educational campaigns, books,
          exhibitions and digital media. It builds on the work of 1001 Inventions,
          an award-winning international science and cultural heritage
          organisation that raises awareness of the creative golden age of science
          in early Muslim civilisation that stretched from Spain to China.
        </p>
        <p>Our partners and audiences may include:</p>
        <ul>
          <li>international and government organisations</li>
          <li>science centres and museums</li>
          <li>broadcasters and publishers</li>
          <li>learned societies and research councils</li>
          <li>not-for-profit organisations with related aims and missions</li>
          <li>educators, creators, sponsors and corporate partners</li>
        </ul>

        <h2>2. Who we are</h2>
        <p>
          This Website is owned and operated by{" "}
          <strong>1001 Foundation (UK)</strong>, a UK registered company (Number:{" "}
          {site.companyNumber}). {site.name} is an initiative of 1001 Foundation
          (UK), working with 1001 Inventions and research partners including the
          Foundation for Science, Technology and Civilisation (FSTC).
        </p>
        <p>
          Save where otherwise stated, 1001 Foundation (UK) is the controller of
          the personal data collected from this Website. For privacy questions,
          please contact us using the details in the Contact section below.
        </p>

        <h2>3. What this website does</h2>
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

        <h2>4. What information do we collect?</h2>
        <p>
          Personal data is any data that identifies you as an individual. If you
          have been in touch with us before — through involvement at an event,
          taking part in a project, subscribing to a newsletter, emails,
          face-to-face meetings, exchanging business cards, or providing
          volunteering, consultancy or services — we may hold the personal data
          you have provided on our secure systems.
        </p>
        <p>
          Depending on the form you submit or how you interact with us, this may
          include but is not limited to:
        </p>
        <ul>
          <li>name</li>
          <li>email address</li>
          <li>postal address, telephone or mobile number</li>
          <li>region</li>
          <li>affiliated organisations and job title</li>
          <li>pre-order interest or preferred way to take part</li>
          <li>consent to receive email updates</li>
        </ul>
        <p>
          The amount of information will vary depending on the way in which{" "}
          {site.name} is interacting with you. The way in which your information
          is processed depends on the method and purpose of your contact with us.
        </p>
        <p>
          We do not ask for payment card details on this microsite. We do not
          intentionally collect special-category personal data through these
          forms.
        </p>

        <h2>5. How we handle interest forms</h2>
        <p>
          When you submit an interest form, your details are sent to the{" "}
          {site.name} team so we can respond and keep you updated. A copy may also
          be stored temporarily in your browser for your own reference.
        </p>
        <p>
          Form delivery uses a trusted email relay service. We only use the
          information to reply to your request and send the updates you agreed to
          receive.
        </p>

        <h2>6. What do we do with personal information?</h2>
        <p>
          We may use your data to provide you with information that you have
          requested or that may be of interest to you, including to:
        </p>
        <ul>
          <li>respond to your interest registration</li>
          <li>send relevant updates you have consented to receive</li>
          <li>plan book, exhibition, education and partnership outreach</li>
          <li>keep internal records of who asked to be contacted</li>
          <li>
            send surveys for market research purposes, or information about events
            from trusted partners we feel would be of interest to you
          </li>
        </ul>
        <p>
          We rely on your consent for our marketing communications. If you wish
          to hear from us about our events and educational programmes and have
          given us permission to contact you, we will send you information and
          updates by your preferred channel (for example email). We will only
          contact you if we have received your permission, and you can opt out of
          receiving communications at any time by contacting us or by clicking the
          unsubscribe link in each email.
        </p>
        <p>
          We will never rent or sell your personal data for commercial purposes
          and will only ever disclose your data if we are required to do so by
          law. Other than processes required for the core function of our
          organisation, we will only ever use your data for specific purposes with
          your consent.
        </p>
        <p>
          We will only share personal data with service providers who help us
          operate email, hosting or related tools, and only as needed to deliver
          those services under appropriate agreements. If an online shop or
          checkout is introduced later, personal data used for fulfilling orders
          and processing payments will be handled under that service provider’s
          own terms and privacy policy, which will be linked from the relevant
          page.
        </p>

        <h2>7. Legal basis and consent</h2>
        <p>
          Interest forms ask for your consent to receive updates by email and to
          this Privacy Policy. You can withdraw consent at any time by contacting
          us or by using an unsubscribe link included in future emails.
        </p>

        <h2>8. Children and young readers</h2>
        <p>
          The children’s book is intended for young readers together with parents,
          carers, teachers and schools. Registration forms on this site are aimed
          at adults. Please do not submit a child’s personal email address through
          these forms. If you believe we have received a child’s personal data in
          error, contact us and we will delete it.
        </p>

        <h2>9. Cookies: what are cookies?</h2>
        <p>
          This Website may place small text files, called cookies, on your
          computer or device to manage site behaviour. These cookies may monitor
          how you use this Website so we can make improvements, and are also used
          to give you the best user experience. Some cookies may also be placed by
          third parties (for example Facebook and Google if you use their services
          via this Website) to monitor how you use their services and to target
          relevant advertising when you visit other websites on which they
          advertise.
        </p>
        <p>In most cases, cookies do not contain personally identifiable data.</p>
        <p>
          {site.name} is not responsible for the use of cookies by third parties,
          and users are encouraged to read the privacy statements of those third
          party service providers before using their services.
        </p>
        <p>
          This microsite may also use the browser’s local storage to remember form
          submissions during testing or for your own reference. If analytics or
          additional cookies are introduced, this policy will be updated to
          describe them.
        </p>

        <h2>10. How do I opt out of cookies?</h2>
        <p>
          Most web browsers allow some control of most cookies through the browser
          settings. To find out more about cookies, including how to see what
          cookies have been set and how to manage and delete them, visit{" "}
          <a
            href="https://www.allaboutcookies.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.allaboutcookies.org
          </a>
          . Deleting certain cookies may prevent you from accessing certain parts
          of this Website and/or may affect your user experience.
        </p>
        <p>
          To opt out of being tracked by Google Analytics across all websites
          (and not just this Website), visit:{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
          >
            tools.google.com/dlpage/gaoptout
          </a>
          .
        </p>

        <h2>11. Keeping your information safe and up to date</h2>
        <p>
          In accordance with applicable UK data protection law, we follow strict
          security procedures in the storage and disclosure of personal data which
          users provide, to prevent unauthorised access.
        </p>
        <p>
          We are committed to making sure we have the most current information for
          you. We will take all reasonable steps to ensure that your personal data
          is accurate and up to date. If our records are out of date, please let
          us know and we will change your details on our system. Please contact
          us.
        </p>

        <h2>12. How long we keep information</h2>
        <p>
          In local testing mode, data may remain only until you clear it from your
          browser. Otherwise, we keep interest records only as long as needed to
          manage the relationship you asked for, meet operational needs, or comply
          with legal obligations, then delete or anonymise them.
        </p>

        <h2>13. Use of photographs</h2>
        <p>
          When a photographer commissioned in connection with {site.name} or 1001
          Inventions is present at any of our events, we may use the resulting
          images on this website and in publicity materials. Permission to use the
          images for promotional purposes is requested from the subjects (or their
          parents/care givers) at the time the photographs are taken. If you have
          a valid reason why an image should not be used, please contact us. You
          can request the removal of your image at any time; we will endeavour to
          remove the image where possible. Instances where this might not be
          possible include social media if the image has already been shared, or
          marketing materials that have already been printed.
        </p>

        <h2>14. Your rights</h2>
        <p>
          Under the UK GDPR and related data protection law, individuals have a
          number of rights, including:
        </p>
        <ul>
          <li>the right to be informed about how we collect and process data</li>
          <li>
            the right to request to see full details of the personal information
            held
          </li>
          <li>
            the right to ask us to stop processing your personal information and
            delete data
          </li>
          <li>the right to withdraw consent at any time</li>
          <li>
            the right to correct personal data if you feel it is inaccurate or
            incomplete
          </li>
          <li>
            depending on where you live, rights to restrict processing or object
            to certain uses
          </li>
        </ul>
        <p>
          For any data protection queries — such as changing or updating the
          information we hold about you — please contact us.
        </p>

        <h2>15. International users</h2>
        <p>
          {site.name} may reach audiences in many countries. If personal data is
          transferred internationally, we will take steps appropriate to the
          transfer and the laws that apply.
        </p>

        <h2>16. Changes to this Privacy Policy</h2>
        <p>
          We may change this Policy from time to time by updating this page. You
          should check this page regularly to ensure that you are happy with any
          changes made. The “Last updated” date at the top of this page will
          change when we do. If you use this Website after any such change has
          been made, you will be deemed to have read and accepted the change.
        </p>

        <h2>17. Contact</h2>
        <p>
          Questions about this Privacy Policy or your interest registration:
        </p>
        <p>
          <strong>{site.name}</strong>
          <br />
          1001 Foundation (UK)
          <br />
          UK Company no: {site.companyNumber}
          <br />
          <span className="privacy-email-line">
            Email:{" "}
            <Image
              className="privacy-email-image"
              src="/images/legal/privacy-contact-email.svg"
              alt="Privacy enquiries email address"
              width={158}
              height={22}
            />
          </span>
        </p>
        <p>
          See also our{" "}
          <Link href="/terms">Terms and Conditions</Link>.
        </p>

        <p className="privacy-back">
          <Link href="/">← Back to {site.name}</Link>
        </p>
      </main>

      <Footer />
    </div>
  );
}
