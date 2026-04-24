import type { ReactNode } from "react";

export type SiteConfig = {
  name: string;
  legalName: string;
  title: string;
  description: string;
  url: string;
  locale: string;
  email: string;
  phone: string;
  whatsappUrl: string;
  location: string;
};

export type LinkItem = {
  label: string;
  href: string;
};

export type ExternalLinkItem = LinkItem;

export type CtaLink = LinkItem & {
  variant: "primary" | "secondary";
  external?: boolean;
};

export type SectionContent = {
  id: string;
  eyebrow: string;
  heading: string;
  description?: string;
};

export type Service = {
  order: number;
  kicker: string;
  name: string;
  description: string;
  stack: string[];
};

export type ProcessStep = {
  label: string;
  heading: string;
  description: string;
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
