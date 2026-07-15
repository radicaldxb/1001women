type StarSkyProps = {
  /** Softer vignette for mid-page bands (default); hero uses the logo pocket */
  variant?: "hero" | "section";
};

export function StarSky({ variant = "section" }: StarSkyProps) {
  return (
    <div className="star-sky" aria-hidden>
      <div className="star-sky-nebula" />
      <div className="star-sky-glow" />
      <div className="star-sky-stars star-sky-stars-a" />
      <div className="star-sky-stars star-sky-stars-b" />
      <div className="star-sky-stars star-sky-stars-c" />
      <div
        className={
          variant === "hero" ? "star-sky-vignette-hero" : "star-sky-vignette-section"
        }
      />
    </div>
  );
}
