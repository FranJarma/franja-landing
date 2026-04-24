import { Footer } from "@/components/footer";
import { Hero } from "@/components/landing/hero/Hero";
import { AboutSection } from "@/components/landing/sections/AboutSection";
import { ContactSection } from "@/components/landing/sections/ContactSection";
import { PhilosophySection } from "@/components/landing/sections/PhilosophySection";
import { ProcessSection } from "@/components/landing/sections/ProcessSection";
import { ServicesSection } from "@/components/landing/sections/ServicesSection";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export default function Home() {
  return (
    <main id="contenido" className="page-shell">
      <SiteHeader />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <PhilosophySection />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
