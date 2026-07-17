import type { Metadata } from "next";
import { About } from "@/v1/components/About";
import { Behind } from "@/v1/components/Behind";
import { Creating } from "@/v1/components/Creating";
import { CredibilityStrip } from "@/v1/components/CredibilityStrip";
import { Footer } from "@/v1/components/Footer";
import { Hero } from "@/v1/components/Hero";
import { Join } from "@/v1/components/Join";
import { KidsBook } from "@/v1/components/KidsBook";
import { StoryShowcase } from "@/v1/components/StoryShowcase";
import { TakePart } from "@/v1/components/TakePart";
import { Topbar } from "@/v1/components/Topbar";
import "@/v1/styles/v1.css";

export const metadata: Metadata = {
  title: "1001 Women – Initial version (archive)",
  description:
    "Archived initial microsite version for content comparison with the current site.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/v1",
  },
};

export default function V1ArchivePage() {
  return (
    <div className="site-v1">
      <div className="v1-archive-banner">
        <span>Archived initial version</span>
        <a href="/">View current site →</a>
      </div>
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
    </div>
  );
}
