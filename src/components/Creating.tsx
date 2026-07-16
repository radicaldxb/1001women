import Image from "next/image";
import { expressions } from "@/data/site";

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

export function Creating() {
  return (
    <section id="creating" className="section-divided">
      <div className="wrap">
        <div className="section-head">
          <div className="kicker">Exhibition & Guides</div>
          <h2>More ways to bring the stories to life</h2>
          <p>
            Alongside the children’s book, the movement will reach people through
            experiences they can visit, resources they can teach with and stories
            they can share.
          </p>
        </div>

        <div className="expression-grid">
          {expressions.map((item) => (
            <a
              className={`expression-card expression-card--${item.tone}`}
              href={item.href}
              key={item.title}
            >
              <div
                className={`expression-card-media expression-card-media--${item.imageFit}`}
              >
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  width={640}
                  height={800}
                  sizes="(max-width: 700px) 90vw, (max-width: 1100px) 45vw, 260px"
                />
              </div>
              <div className="expression-card-body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="expression-card-footer">
                  <span className="expression-card-link">
                    {item.linkLabel}
                  </span>
                  <span className="expression-card-cta" aria-hidden>
                    <ArrowIcon />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
