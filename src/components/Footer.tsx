import { orgLinks, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div>
          <strong>{site.name}</strong> is an
          initiative of{" "}
          <a href={orgLinks.foundation} target="_blank" rel="noopener noreferrer">
            1001 Foundation
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
        <div>
          {site.title}
          <br />©{" "}
          <a href={orgLinks.foundation} target="_blank" rel="noopener noreferrer">
            1001 Foundation
          </a>{" "}
          · <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
