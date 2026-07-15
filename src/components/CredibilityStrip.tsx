import { credibility } from "@/data/site";

export function CredibilityStrip() {
  return (
    <div className="credibility-strip" aria-label="Who is behind 1001 Women">
      <div className="wrap credibility-grid">
        {credibility.map((item) => (
          <div className="credibility-item" key={item.value}>
            <span>{item.label}</span>
            <a
              className="credibility-link"
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.value}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
