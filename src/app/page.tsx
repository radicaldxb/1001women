import dynamic from "next/dynamic";
import { About } from "@/components/About";
import { CredibilityStrip } from "@/components/CredibilityStrip";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Join } from "@/components/Join";
import { Topbar } from "@/components/Topbar";

const StoryShowcase = dynamic(() =>
  import("@/components/StoryShowcase").then((mod) => mod.StoryShowcase),
);
const Creating = dynamic(() =>
  import("@/components/Creating").then((mod) => mod.Creating),
);
const TakePart = dynamic(() =>
  import("@/components/TakePart").then((mod) => mod.TakePart),
);
const ExamplesCarousel = dynamic(() =>
  import("@/components/ExamplesCarousel").then((mod) => mod.ExamplesCarousel),
);
const Behind = dynamic(() =>
  import("@/components/Behind").then((mod) => mod.Behind),
);

export default function HomePage() {
  return (
    <div className="site">
      <Topbar />
      <main>
        <Hero />
        <CredibilityStrip />
        <Join />
        <About />
        <StoryShowcase />
        <Creating />
        <TakePart />
        <ExamplesCarousel />
        <Behind />
      </main>
      <Footer />
    </div>
  );
}
