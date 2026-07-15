import { About } from "@/components/About";
import { Behind } from "@/components/Behind";
import { Creating } from "@/components/Creating";
import { CredibilityStrip } from "@/components/CredibilityStrip";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Join } from "@/components/Join";
import { KidsBook } from "@/components/KidsBook";
import { StoryShowcase } from "@/components/StoryShowcase";
import { TakePart } from "@/components/TakePart";
import { Topbar } from "@/components/Topbar";

export default function HomePage() {
  return (
    <div className="site">
      <Topbar />
      <main>
        <Hero />
        <CredibilityStrip />
        <About />
        <Behind />
        <KidsBook />
        <Creating />
        <TakePart />
        <StoryShowcase />
        <Join />
      </main>
      <Footer />
    </div>
  );
}
