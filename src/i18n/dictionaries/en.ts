import type { Dictionary } from "@/types/landing";

export const en = {
  accessibility: {
    skipToContent: "Skip to content",
  },
  metadata: {
    title: "Franja | Product, design and technology agency",
    description:
      "Agile product, design and technology agency based in Salta, Argentina. We design and ship landing pages, systems, e-commerce, automations and analytics with a focus on outcomes.",
    keywords: [
      "digital agency",
      "web development",
      "landing pages",
      "technical SEO",
      "automation",
      "e-commerce",
      "Salta",
      "Argentina",
    ],
    ogImageAlt: "Franja, product, design and technology agency",
  },
  nav: {
    ariaLabel: "Main navigation",
    mobileAriaLabel: "Mobile navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    home: "Go to homepage",
    links: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Process", href: "#process" },
      { label: "Approach", href: "#approach" },
      { label: "Contact", href: "#contact" },
    ],
  },
  languageSwitcher: {
    ariaLabel: "Change language",
  },
  hero: {
    id: "hero",
    eyebrow: "Strategy, design and technology",
    heading: "Digital solutions that work",
    description:
      "We design and build systems, products and experiences that go beyond the expected, with a focus on real impact and sustained execution.",
    ctas: [
      { label: "Let's work together", href: "#contact", variant: "primary" },
      { label: "See services", href: "#services", variant: "secondary" },
    ],
  },
  about: {
    id: "about",
    eyebrow: "About us",
    heading:
      "An agency working where product, design and technology intersect.",
    description:
      "We are not a feature factory. We are a team that thinks before building, with technical judgment and business sense so every decision moves the business forward.",
    pillars: [
      "Product strategy and vision from day one",
      "Technical execution grounded in real business context",
      "Systems designed to scale without breaking",
    ],
  },
  services: {
    section: {
      id: "services",
      eyebrow: "Services",
      heading:
        "Design, development and digital operations for brands that need results.",
      description:
        "We take each project end to end: digital presence, product, automation and deployment.",
    },
    items: [
      {
        order: 1,
        kicker: "Presence",
        name: "Modern landing pages",
        description:
          "Design and deployment of fast, clear and visually strong landing pages to validate offers, capture leads and improve conversion.",
        stack: [],
      },
      {
        order: 2,
        kicker: "Visibility",
        name: "SEO and web presence",
        description:
          "We optimize structure, content and performance so your brand gains relevance, authority and organic discovery.",
        stack: ["Technical SEO", "Content", "Analytics", "Core Web Vitals"],
      },
      {
        order: 3,
        kicker: "Operations",
        name: "Management systems",
        description:
          "We build internal platforms and custom workflows to organize operations, centralize information and scale without friction.",
        stack: ["Dashboards", "CRUD", "Integrations", "Backoffice"],
      },
      {
        order: 4,
        kicker: "Commerce",
        name: "E-commerce",
        description:
          "We create solid, measurable shopping experiences ready to grow with connected catalog, payments and operations.",
        stack: ["Catalog", "Payments", "Checkout", "Automations"],
      },
      {
        order: 5,
        kicker: "Automation",
        name: "Automation and AI",
        description:
          "We reduce manual work with automations that connect tools, trigger actions and accelerate operations.",
        stack: ["APIs", "Workflows", "Bots", "Integration"],
      },
      {
        order: 6,
        kicker: "Branding",
        name: "Branding and visual design for digital brands",
        description:
          "We create consistent visual identities and brand experiences that stand out in the market.",
        stack: ["Data Sources", "ETL", "Dashboards", "Insights"],
      },
    ],
  },
  process: {
    id: "process",
    eyebrow: "Work cycle",
    heading: "Modern, minimalist development oriented around outcomes.",
    description:
      "We are an agile agency. We design, build and deliver with method, speed and visibility so each stage pushes the business result forward.",
    closingStatement: "On time and on scope. Less friction. More real progress.",
    steps: [
      {
        label: "01",
        heading: "Analysis",
        description:
          "We read the business context, market and real constraints to identify concrete opportunities.",
      },
      {
        label: "02",
        heading: "Design",
        description:
          "We translate strategy into experience, architecture and visual decisions focused on clarity and conversion.",
      },
      {
        label: "03",
        heading: "Implementation",
        description:
          "We develop with product judgment, performance and scalability in mind to move quickly without improvising.",
      },
      {
        label: "04",
        heading: "Deployment",
        description:
          "We publish on reliable environments, measure real behavior and leave everything ready to iterate.",
      },
      {
        label: "05",
        heading: "Continuous integration",
        description:
          "We connect tools, automate validations and sustain continuous delivery with less friction.",
      },
      {
        label: "06",
        heading: "Project management",
        description:
          "We work with agile cadence, clear tracking and visible priorities to deliver on time and on scope.",
      },
    ],
  },
  philosophy: {
    id: "approach",
    eyebrow: "Approach",
    heading:
      "We solve problems. We think in systems. We optimize for clarity, scalability and intent.",
    paragraphs: [
      "We build products that can grow without breaking and without becoming unreadable for the team.",
      "The best decision is not always the most complex one. It is the one that lets the business move forward with more precision.",
    ],
  },
  contact: {
    id: "contact",
    eyebrow: "Let's work together",
    heading: "Ready to turn an idea into a system that delivers value?",
    description:
      "We design, build and deploy with a focus on outcomes, speed and operational continuity.",
    ctas: [
      {
        label: "WhatsApp",
        href: "https://wa.me/543874450922",
        variant: "primary",
        external: true,
      },
      {
        label: "hola@franja.tech",
        href: "mailto:hola@franja.tech",
        variant: "secondary",
      },
    ],
    form: {
      fields: {
        fullName: "Full name",
        companyName: "Company or business",
        email: "Email",
        phone: "WhatsApp",
        projectType: "Project type",
        budgetRange: "Estimated budget",
        urgency: "Urgency",
        message: "Project message or description",
        source: "How did you hear about us",
      },
      placeholders: {
        fullName: "E.g. Martina Lopez",
        companyName: "E.g. Norte Studio",
        email: "hello@company.com",
        phone: "+54 9 387 000 0000",
        message:
          "Tell us what you need to build, what problem you want to solve, and what stage the project is in.",
      },
      selectPlaceholder: "Select",
      submitLabel: "Request diagnosis",
      submittingLabel: "Sending...",
      successMessage:
        "We received your inquiry. We will review your project and contact you soon.",
      validation: {
        fullName: "Enter your full name.",
        companyName: "Enter your company or business name.",
        email: "Enter a valid email address.",
        phone: "Enter a valid WhatsApp number.",
        projectType: "Select a project type.",
        budgetRange: "Select an estimated budget.",
        urgency: "Select an urgency level.",
        message: "Tell us a little more about the project.",
        source: "Tell us how you heard about Franja.",
      },
    },
  },
  footer: {
    tagline: "Agile design, product and technology agency.",
    socialHeading: "Social media",
  },
  whatsapp: {
    ariaLabel: "Message us on WhatsApp",
  },
} satisfies Dictionary;
