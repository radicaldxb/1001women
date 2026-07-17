"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/images/examples/exhibition-1.webp",
    alt: "Concept view of a 1001 Women immersive exhibition hall",
  },
  {
    src: "/images/examples/exhibition-2.webp",
    alt: "Exhibition concept visual for 1001 Women",
  },
  {
    src: "/images/examples/Statue.webp",
    alt: "Sculpture concept visual for 1001 Women",
  },
  {
    src: "/images/examples/movie.webp",
    alt: "Film and media concept visual for 1001 Women",
  },
  {
    src: "/images/examples/younggirl.webp",
    alt: "Young reader concept visual for 1001 Women",
  },
] as const;

function Arrow({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d={direction === "prev" ? "M15 6.5 9 12l6 5.5" : "M9 6.5 15 12l-6 5.5"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ExamplesCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = slides.length;

  function goTo(next: number) {
    setIndex(((next % total) + total) % total);
  }

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches || paused) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [paused, total]);

  return (
    <section
      className="examples-carousel section-divided"
      aria-roledescription="carousel"
      aria-label="Project example visuals"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div className="wrap examples-carousel-inner">
        <div className="examples-carousel-stage">
          {slides.map((slide, i) => (
            <figure
              key={slide.src}
              className={
                i === index
                  ? "examples-carousel-slide is-active"
                  : "examples-carousel-slide"
              }
              aria-hidden={i !== index}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                width={1024}
                height={705}
                sizes="(max-width: 1160px) 92vw, 1100px"
                priority={i === 0}
              />
            </figure>
          ))}

          <button
            type="button"
            className="examples-carousel-nav examples-carousel-nav--prev"
            aria-label="Previous image"
            onClick={() => goTo(index - 1)}
          >
            <Arrow direction="prev" />
          </button>
          <button
            type="button"
            className="examples-carousel-nav examples-carousel-nav--next"
            aria-label="Next image"
            onClick={() => goTo(index + 1)}
          >
            <Arrow direction="next" />
          </button>
        </div>

        <div className="examples-carousel-dots" role="tablist" aria-label="Slides">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show image ${i + 1}`}
              className={
                i === index
                  ? "examples-carousel-dot is-active"
                  : "examples-carousel-dot"
              }
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
