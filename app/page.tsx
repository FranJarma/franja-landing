import { About } from "@/components/about";
import { DeliveryCycle } from "@/components/delivery-cycle";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Philosophy } from "@/components/philosophy";
import { Projects } from "@/components/projects";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export default function Home() {
  return (
    <main id="top" className="page-shell">
      <Hero />
      <About />
      <Projects />
      <DeliveryCycle />
      <Philosophy />
      <FinalCta />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
