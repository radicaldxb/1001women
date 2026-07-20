import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { orgLinks, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms and conditions for using the 1001 Women microsite.",
  alternates: { canonical: "/terms" },
};

const updated = "20 July 2026";

export default function TermsPage() {
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
        <h1>Terms and Conditions</h1>
        <p className="privacy-meta">Last updated: {updated}</p>

        <h2>1. Acceptance of Terms of Use</h2>
        <p>
          This website is owned and managed by{" "}
          <a href={orgLinks.foundation} target="_blank" rel="noopener noreferrer">
            {site.companyName}
          </a>
          , a UK registered company (Number: {site.companyNumber}), as part of
          the <strong>{site.name}</strong> initiative. Any use of the term “us”
          or “we” refers to the owners and operators of this website. Any use of
          the term “you” refers to the user or viewer of the website.
        </p>
        <p>
          In using this website, you are agreeing to accept the following terms
          and conditions. If you do not accept the terms and conditions for this
          website, do not use the website.
        </p>

        <h2>2. Terms of Use</h2>
        <p>
          You agree to use this website for lawful purposes only and in a manner
          which does not infringe the rights of, or restrict or inhibit the use
          and enjoyment of this site by any third party.
        </p>
        <p>
          Such restriction or inhibition includes, without limitation, conduct
          which is unlawful, or which may harass or cause distress or
          inconvenience to any person, and the transmission of obscene or
          offensive content or disruption of the normal flow of dialogue within
          this site.
        </p>

        <h2>3. Access to Website</h2>
        <p>
          We reserve the right to amend, restrict or refuse access to the website
          or any part of the website at any time without giving advance notice. We
          will not be liable if for any reason the website is unavailable at any
          time, or for any period of time.
        </p>

        <h2>4. Exclusion of Liability</h2>
        <p>
          We have endeavoured to ensure that the information on this website is
          correct. However, we do not guarantee the completeness or correctness of
          the material on this website.
        </p>
        <p>
          The use of this website’s information and any downloadable items is at
          your own risk. In no event will we, nor any other party involved in
          producing, maintaining or delivering this website, be liable or
          responsible for any loss and/or damage or disruption including, without
          limitation, indirect or consequential damages, or any damages arising
          from the loss or use of data upon using or downloading items from this
          website.
        </p>

        <h2>5. Information on our Website</h2>
        <p>
          We aim to update the content on this website regularly; however,
          regular updates are not always possible. As such, any of the material on
          this website may be out of date at any time and we are under no
          obligation to update that material.
        </p>
        <p>
          We reserve the right to alter, change or update the information
          contained on this website at any time without notice.
        </p>

        <h2>6. Copyright and Other Intellectual Property</h2>
        <p>
          Images, copyright, trademarks, brands and all other intellectual
          property rights displayed on this website or existing in this website
          belong to us, or to a third party and used by permission, and are
          protected by copyright, trade mark and other intellectual property laws.
          Content may not be reproduced or taken for one’s own use in any manner
          without written permission from us or the respective owner(s).
        </p>
        <p>
          Further, any material found on this website may not be copied,
          reproduced, republished, broadcast or posted without obtaining
          permission from us, the owners of the website, and credited to us
          appropriately.
        </p>
        <p>
          The names and logos of {site.name}, 1001 Foundation and 1001 Inventions
          are proprietary marks of their respective owners.
        </p>

        <h2>7. Data and Privacy</h2>
        <p>
          This website is owned and run by us. We respect your privacy and will
          continue to do so in the online world. By visiting our website, we
          process information about you in accordance with our privacy policy.
        </p>
        <p>
          You can find out more about how your data is being used by referring to
          our <Link href="/privacy">Privacy Policy</Link>.
        </p>

        <h2>8. Links to and from Third Party Websites</h2>
        <p>
          Some of the pages on this website include links to third party external
          websites which are provided for your convenience only. We do not endorse
          and will not be liable for the content of these external websites.
        </p>
        <p>
          If you would like to link to our website, you must do so in a way that
          does not imply that we are endorsing any services, products or content
          that you provide, unless this has been specifically agreed with us. If
          you choose to link to our website in breach of this, you shall fully
          indemnify us for any loss or damage as a result of your actions.
        </p>

        <h2>9. Changes to the Terms and Conditions</h2>
        <p>
          From time to time, the terms and conditions of this website may change.
          Please review them regularly. The “Last updated” date at the top of this
          page will change when we do. If you continue to use this website after a
          change has been made, you will be deemed to have accepted it.
        </p>

        <h2>10. 1001 Women Products and Services</h2>
        <p>
          All products and services mentioned on this site — including books,
          exhibitions, educational programmes and related offerings — are subject
          to availability. They are available completely at the sole discretion of{" "}
          {site.companyName} in connection with the {site.name} initiative.
        </p>
        <p>
          Expressions of interest submitted through this microsite (including
          children’s book pre-order interest) are not completed purchases. Final
          pricing, fulfilment and payment details will follow through a separate
          process if and when published.
        </p>

        <h2>11. Legal Name</h2>
        <p>
          Our legal name is <strong>{site.companyName}</strong>, a UK registered
          company (Number: {site.companyNumber}). {site.name} is an initiative of{" "}
          {site.companyName}.
        </p>

        <h2>12. Law and Jurisdiction</h2>
        <p>
          These Terms and Conditions shall be governed by and construed in
          accordance with the laws of England and Wales. Disputes arising
          herefrom shall be exclusively subject to the jurisdiction of the courts
          of England and Wales.
        </p>

        <h2>13. Comments and Concerns</h2>
        <p>
          If you have any concerns or comments relating to the material which
          appears on our website, please contact us using the details in our{" "}
          <Link href="/privacy">Privacy Policy</Link>.
        </p>

        <p className="privacy-back">
          <Link href="/">← Back to {site.name}</Link>
        </p>
      </main>

      <Footer />
    </div>
  );
}
