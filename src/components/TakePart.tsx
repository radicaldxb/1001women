import { audiences } from "@/data/site";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9 6.5 15 12l-6 5.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TakePart() {
  return (
    <section className="take-part section-divided" id="take-part">
      <div className="wrap take-part-content">
        <div className="section-head">
          <div className="kicker">Get involved</div>
          <h2>Choose how you want to take part</h2>
          <p>
            Whether you are a parent, teacher, creator, museum, sponsor or
            publisher, there is a clear way to help these stories reach more
            people.
          </p>
        </div>

        <div className="audiences">
          {audiences.map((item) => (
            <a className="audience" href={item.href} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="audience-footer">
                <span className="audience-link">{item.linkLabel}</span>
                <span className="audience-cta" aria-hidden>
                  <ArrowIcon />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
