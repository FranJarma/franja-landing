import type { ReactNode } from "react";

export type SiteConfig = {
  description: string;
  email: string;
  legalName: string;
  location: string;
  name: string;
  phone: string;
  title: string;
  url: string;
  whatsappUrl: string;
};

export type LinkItem = {
  href: string;
  label: string;
};

export type ExternalLinkItem = LinkItem;

export type CtaLink = LinkItem & {
  external?: boolean;
  variant: "primary" | "secondary";
};

export type SectionContent = {
  description?: string;
  eyebrow: string;
  heading: string;
  id: string;
};

export type Service = {
  description: string;
  kicker: string;
  name: string;
  order: number;
  stack: string[];
};

export type ProcessStep = {
  description: string;
  heading: string;
  label: string;
};

export type HeroContent = SectionContent & {
  ctas: CtaLink[];
};

export type AboutContent = SectionContent & {
  pillars: string[];
};

export type ProcessContent = SectionContent & {
  closingStatement: string;
  steps: ProcessStep[];
};

export type PhilosophyContent = Omit<SectionContent, "description"> & {
  paragraphs: string[];
};

export type ContactContent = SectionContent & {
  ctas: CtaLink[];
};

export type WithChildren = {
  children: ReactNode;
};

export type Dictionary = {
  about: AboutContent;
  accessibility: {
    skipToContent: string;
  };
  contact: ContactContent;
  footer: {
    socialHeading: string;
    tagline: string;
  };
  hero: HeroContent;
  languageSwitcher: {
    ariaLabel: string;
  };
  metadata: {
    description: string;
    keywords: string[];
    ogImageAlt: string;
    title: string;
  };
  nav: {
    ariaLabel: string;
    closeMenu: string;
    home: string;
    links: LinkItem[];
    mobileAriaLabel: string;
    openMenu: string;
  };
  philosophy: PhilosophyContent;
  process: ProcessContent;
  services: {
    items: Service[];
    section: SectionContent;
  };
  whatsapp: {
    ariaLabel: string;
  };
};
