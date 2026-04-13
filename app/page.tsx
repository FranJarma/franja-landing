import { About } from "@/components/about";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Philosophy } from "@/components/philosophy";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <main id="top" className="page-shell">
      <Hero />
      <About />
      <Projects />
      <Philosophy />
      <FinalCta />
      <Footer />
    </main>
  );
}
