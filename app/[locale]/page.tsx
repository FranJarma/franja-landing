import { notFound } from "next/navigation";

import { Footer } from "@/components/footer";
import { Hero } from "@/components/landing/hero/Hero";
import { AboutSection } from "@/components/landing/sections/AboutSection";
import { ContactSection } from "@/components/landing/sections/ContactSection";
import { PhilosophySection } from "@/components/landing/sections/PhilosophySection";
import { ProcessSection } from "@/components/landing/sections/ProcessSection";
import { ServicesSection } from "@/components/landing/sections/ServicesSection";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { isValidLocale } from "@/src/i18n/config";
import { getDictionary } from "@/src/i18n/dictionaries";

type HomeProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function Home({ params }: HomeProps) {
  const { locale: localeParam } = await params;

  if (!isValidLocale(localeParam)) {
    notFound();
  }

  const dictionary = getDictionary(localeParam);

  return (
    <main id="contenido" className="page-shell">
      <SiteHeader dictionary={dictionary} locale={localeParam} />
      <Hero content={dictionary.hero} />
      <AboutSection content={dictionary.about} />
      <ServicesSection content={dictionary.services.section} services={dictionary.services.items} />
      <ProcessSection content={dictionary.process} />
      <PhilosophySection content={dictionary.philosophy} />
      <ContactSection content={dictionary.contact} />
      <Footer dictionary={dictionary} locale={localeParam} />
      <WhatsAppFloat dictionary={dictionary} />
    </main>
  );
}
