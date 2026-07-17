import Image from "next/image";

export function GoldenAgeBanner() {
  return (
    <section className="golden-age-banner">
      <figure>
        <Image
          src="/v1/images/women-of-golden-age.jpg"
          alt="Artistic interpretation of women across science, medicine, scholarship and public life in the Golden Age of Muslim civilisation"
          width={2000}
          height={1125}
          sizes="100vw"
          style={{ width: "100%", height: "auto", maxHeight: 640, objectFit: "cover" }}
        />
        <figcaption>
          Artistic interpretation — a composite portrayal, not a depiction of any
          named individual.
        </figcaption>
      </figure>
    </section>
  );
}
