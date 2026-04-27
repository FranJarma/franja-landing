import type { ContactContent } from "@/types/landing";
import type { Locale } from "@/src/i18n/config";

import { CtaButton } from "../shared/cta-button";
import { Section } from "../shared/section";
import { ContactForm } from "../contact/ContactForm";

type ContactSectionProps = {
  content: ContactContent;
  locale: Locale;
};

export function ContactSection({ content, locale }: ContactSectionProps) {
  return (
    <Section id={content.id} labelledBy="contact-title">
      <div className="space-y-12 border-t border-white/10 py-14 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(520px,1fr)] lg:items-start">
          <header className="space-y-5">
            <p className="eyebrow">{content.eyebrow}</p>
            <h2
              id="contact-title"
              className="max-w-3xl text-4xl font-bold leading-none tracking-[-0.06em] md:text-6xl"
            >
              {content.heading}
            </h2>
            <p className="max-w-2xl text-base leading-7 text-white/60 md:text-lg">
              {content.description}
            </p>

            <address className="flex flex-col gap-3 not-italic sm:flex-row">
              {content.ctas.map((cta) => (
                <CtaButton key={cta.href} {...cta} className="px-6" />
              ))}
            </address>
          </header>

          <ContactForm content={content.form} locale={locale} />
        </div>
      </div>
    </Section>
  );
}
