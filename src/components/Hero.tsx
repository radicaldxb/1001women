import Image from "next/image";
import { HeroVideo } from "@/components/HeroVideo";
import { StarSky } from "@/components/StarSky";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="hero" id="top">
      <StarSky variant="hero" />
      <HeroVideo />

      <div className="hero-content">
        <div className="hero-stage hero-stage-logo">
          <Image
            className="hero-mark"
            src="/images/logo-mark.webp"
            alt={`${site.name} logo`}
            width={900}
            height={900}
            priority
          />
          <h1 className="visually-hidden">{site.name}</h1>
        </div>

        <p className="hero-tagline hero-stage hero-stage-tagline">
          {site.title}
        </p>

        <div className="hero-lead hero-stage hero-stage-lead">
          {site.heroLead.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>

        <a className="hero-explore hero-stage hero-stage-explore" href="#about">
          <span>Explore more</span>
          <span className="hero-explore-arrow" aria-hidden>
            ↓
          </span>
        </a>
      </div>
    </section>
  );
}
