import { BookIcon } from "@/v1/components/BookIcons";
import { expressions } from "@/v1/data/site";

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
            <article className="expression-item" key={item.title}>
              <span className="expression-icon">
                <BookIcon name={item.icon} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a className="expression-link" href={item.href}>
                {item.linkLabel} →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
