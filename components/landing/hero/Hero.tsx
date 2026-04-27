import type { HeroContent } from "@/types/landing";

import { Container } from "../shared/container";
import { CtaButton } from "../shared/cta-button";
import { HeroVisual } from "./HeroVisual";

type HeroProps = {
  content: HeroContent;
};

export function Hero({ content }: HeroProps) {
  return (
    <section
      id={content.id}
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden pb-8 pt-24 md:min-h-screen md:pb-6 md:pt-28"
    >
      <HeroVisual />

      <Container className="relative z-10 grid gap-10 py-8 md:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.8fr)] md:items-end md:py-20">
        <div className="space-y-5 md:space-y-8">
          <div className="max-w-5xl space-y-5 md:space-y-6">
            <p className="eyebrow animate-rise [animation-delay:100ms] opacity-0">
              {content.eyebrow}
            </p>
            <h1
              id="hero-title"
              className="max-w-[8ch] animate-rise text-[clamp(2.45rem,12vw,4.9rem)] font-bold uppercase leading-[0.96] tracking-[-0.08em] opacity-0 [animation-delay:180ms] md:max-w-none md:text-[clamp(3.2rem,11vw,5rem)] md:leading-[1.02] md:tracking-hero-tight"
            >
              {content.heading}
            </h1>
            <p className="max-w-[32rem] animate-rise text-[1.05rem] leading-8 text-white/70 opacity-0 [animation-delay:280ms] md:max-w-xl md:text-xl">
              {content.description}
            </p>
          </div>

          <div className="flex animate-rise flex-col gap-3 pb-4 opacity-0 [animation-delay:360ms] sm:flex-row sm:pb-0">
            {content.ctas.map((cta) => (
              <CtaButton key={cta.href} {...cta} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
