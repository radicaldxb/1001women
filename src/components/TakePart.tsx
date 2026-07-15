import { StarSky } from "@/components/StarSky";
import { audiences } from "@/data/site";

export function TakePart() {
  return (
    <section className="take-part" id="take-part">
      <StarSky variant="section" />

      <div className="wrap take-part-content">
        <div className="section-head">
          <div className="kicker take-part-kicker">Get involved</div>
          <h2>Choose how you want to take part</h2>
          <p>
            Whether you are a parent, teacher, creator, museum, sponsor or
            publisher, there is a clear way to help these stories reach more
            people.
          </p>
        </div>

        <div className="audiences">
          {audiences.map((item) => (
            <article className="audience" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={item.href} className="audience-link">
                {item.linkLabel} →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
