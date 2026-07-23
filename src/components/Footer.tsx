import Image from "next/image";
import { orgLinks, site, socialLinks } from "@/data/site";

const legalLinks = [
  { href: "/faq", label: "FAQ" },
  { href: "/llm", label: "AI overview" },
  { href: "/llms.txt", label: "llms.txt" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
] as const;

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-brand">
          <Image
            className="footer-logo"
            src="/favicon.png"
            alt={`${site.name} logo`}
            width={72}
            height={72}
          />
          <div className="footer-copy">
            <p className="footer-title">
              {site.name} – {site.title}
            </p>
            <p>
              <strong>{site.name}</strong> is an initiative of{" "}
              <a href={orgLinks.foundation} target="_blank" rel="noopener noreferrer">
                1001 Foundation (UK)
              </a>
              , the producer of{" "}
              <a href={orgLinks.inventions} target="_blank" rel="noopener noreferrer">
                1001 Inventions
              </a>
              .
            </p>
            <p>
              Produced and led by{" "}
              <a href={orgLinks.ahmedSalim} target="_blank" rel="noopener noreferrer">
                Ahmed Salim
              </a>
              . Research foundation by FSTC.
            </p>
          </div>
        </div>

        <div className="footer-meta">
          <nav className="footer-social" aria-label="1001 Inventions social links">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <nav className="footer-legal" aria-label="Site links">
            <span>
              ©{" "}
              <a href={orgLinks.foundation} target="_blank" rel="noopener noreferrer">
                1001 Foundation
              </a>
            </span>
            {legalLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
