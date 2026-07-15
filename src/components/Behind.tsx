import { producerRoles } from "@/data/site";

export function Behind() {
  return (
    <section id="behind" className="section-divided">
      <div className="wrap plain">
        <div className="kicker">Who are we</div>
        <h2>From the producer of 1001 Inventions</h2>
        <p>
          <strong>
            1001 Women is an initiative of 1001 Foundation, the producer of 1001
            Inventions.
          </strong>{" "}
          It builds on experience in transforming the history and heritage of
          Muslim civilisation into books, exhibitions, films, educational
          programmes and live public experiences.
        </p>
        <p>
          The 1001 Women initiative is{" "}
          <strong>produced and led by Ahmed Salim</strong>, bringing together
          research, storytelling, education, design and public engagement to
          carry these overlooked stories into mainstream public life.
        </p>
        <p>
          The historical content is grounded in the{" "}
          <strong>
            1001 Women research and sourcebook developed by the Foundation for
            Science, Technology and Civilisation (FSTC)
          </strong>
          .
        </p>

        <div className="role-rows" aria-label="Project roles">
          {producerRoles.map((item) => (
            <div className="role-row" key={item.name}>
              <div className="role-logo" aria-hidden>
                <span>Logo</span>
              </div>
              <div className="role-copy">
                <small>{item.role}</small>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
