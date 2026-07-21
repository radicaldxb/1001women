import Image from "next/image";
import { orgLinks, site, socialLinks } from "@/data/site";

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
          <div>
            <strong>
              {site.name} – {site.title}
            </strong>
            <br />
            <strong>{site.name}</strong> is an initiative of{" "}
            <a href={orgLinks.foundation} target="_blank" rel="noopener noreferrer">
              1001 Foundation (UK)
            </a>
            , the producer of{" "}
            <a href={orgLinks.inventions} target="_blank" rel="noopener noreferrer">
              1001 Inventions
            </a>
            .
            <br />
            Produced and led by{" "}
            <a href={orgLinks.ahmedSalim} target="_blank" rel="noopener noreferrer">
              Ahmed Salim
            </a>
            . Research foundation by FSTC.
          </div>
        </div>
        <div className="footer-meta">
          <div className="footer-social" aria-label="1001 Inventions social links">
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
          </div>
          <div>
            ©{" "}
            <a href={orgLinks.foundation} target="_blank" rel="noopener noreferrer">
              1001 Foundation
            </a>{" "}
            · <a href="/faq">FAQ</a>
            {" · "}
            <a href="/llm">AI overview</a>
            {" · "}
            <a href="/llms.txt">llms.txt</a>
            {" · "}
            <a href="/privacy">Privacy</a>
            {" · "}
            <a href="/terms">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
