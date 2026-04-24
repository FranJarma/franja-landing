import type {
  AboutContent,
  ContactContent,
  ExternalLinkItem,
  HeroContent,
  LinkItem,
  PhilosophyContent,
  ProcessContent,
  SectionContent,
  Service,
  SiteConfig,
} from "@/types/landing";

export const siteConfig: SiteConfig = {
  name: "Franja",
  legalName: "Franja",
  title: "Franja | Agencia de producto, diseño y tecnología",
  description:
    "Agencia ágil de producto, diseño y tecnología en Salta, Argentina. Diseñamos y desplegamos landings, sistemas, e-commerce, automatizaciones y analítica con foco en resultados.",
  url: "https://franja.tech",
  locale: "es_AR",
  email: "hola@franja.tech",
  phone: "+54 387 4450922",
  whatsappUrl: "https://wa.me/543874450922",
  location: "Salta, Argentina",
};

export const navLinks: LinkItem[] = [
  { label: "Sobre nosotros", href: "#sobre" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Enfoque", href: "#enfoque" },
  { label: "Contacto", href: "#contacto" },
];

export const socialLinks: ExternalLinkItem[] = [
  { label: "Instagram", href: "https://instagram.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "X", href: "https://x.com/" },
];

export const heroContent: HeroContent = {
  id: "hero",
  eyebrow: "Estrategia, diseño y tecnología",
  heading: "Soluciones digitales que funcionan",
  description:
    "Diseñamos y construimos sistemas, productos y experiencias que van más allá de lo normal, con foco en impacto real y ejecución sostenida.",
  ctas: [
    { label: "Trabajá con nosotros", href: "#contacto", variant: "primary" },
    { label: "Ver servicios", href: "#servicios", variant: "secondary" },
  ],
};

export const aboutContent: AboutContent = {
  id: "sobre",
  eyebrow: "Sobre nosotros",
  heading:
    "Una agencia que trabaja donde se cruzan producto, diseño y tecnología.",
  description:
    "No somos una fábrica de features. Somos un equipo que piensa antes de construir, con mirada técnica y criterio para que cada decisión haga avanzar al negocio.",
  pillars: [
    "Estrategia y visión de producto desde el día uno",
    "Ejecución técnica con criterio real de negocio",
    "Sistemas pensados para escalar sin romperse",
  ],
};

export const servicesContent = {
  id: "servicios",
  eyebrow: "Servicios",
  heading:
    "Diseño, desarrollo y operación digital para marcas que necesitan resultados.",
  description:
    "Tomamos cada proyecto de punta a punta: presencia digital, producto, automatización y despliegue.",
} satisfies SectionContent;

export const services: Service[] = [
  {
    order: 1,
    kicker: "Presencia",
    name: "Landing pages modernas",
    description:
      "Diseño y despliegue de landings rápidas, claras y visualmente fuertes para validar oferta, captar leads y convertir mejor.",
    stack: ["UX/UI", "Next.js", "Performance", "Deploy"],
  },
  {
    order: 2,
    kicker: "Visibilidad",
    name: "SEO y presencia web",
    description:
      "Optimizamos estructura, contenido y performance para que tu marca gane relevancia, autoridad y descubrimiento orgánico.",
    stack: ["SEO técnico", "Content", "Analytics", "Core Web Vitals"],
  },
  {
    order: 3,
    kicker: "Operación",
    name: "Sistemas de gestión",
    description:
      "Construimos plataformas internas y flujos a medida para ordenar operaciones, centralizar información y escalar sin fricción.",
    stack: ["Dashboards", "CRUD", "Integraciones", "Backoffice"],
  },
  {
    order: 4,
    kicker: "Comercio",
    name: "E-commerce",
    description:
      "Armamos experiencias de compra sólidas, medibles y listas para crecer con catálogo, pagos y operación conectados.",
    stack: ["Catálogo", "Pagos", "Checkout", "Automations"],
  },
  {
    order: 5,
    kicker: "Automatización",
    name: "Automatizaciones e IA",
    description:
      "Reducimos trabajo manual con automatizaciones que conectan herramientas, disparan acciones y aceleran la operación.",
    stack: ["APIs", "Workflows", "Bots", "Integración"],
  },
  {
    order: 6,
    kicker: "Reportes",
    name: "Reportes y análisis de datos",
    description:
      "Transformamos datos en resultados accionables con reportes personalizados que conectan fuentes, visualizan métricas clave y guían decisiones.",
    stack: ["Data Sources", "ETL", "Dashboards", "Insights"],
  },
];

export const processContent: ProcessContent = {
  id: "proceso",
  eyebrow: "Ciclo de trabajo",
  heading: "Un desarrollo moderno, minimalista y orientado a resultados.",
  description:
    "Somos una agencia ágil. Diseñamos, construimos y entregamos con método, velocidad y visibilidad para que cada etapa empuje el resultado de negocio.",
  closingStatement: "Tiempo y forma. Menos fricción. Más avance real.",
  steps: [
    {
      label: "01",
      heading: "Análisis",
      description:
        "Leemos el contexto del negocio, el mercado y las restricciones reales para detectar oportunidades concretas.",
    },
    {
      label: "02",
      heading: "Diseño",
      description:
        "Bajamos estrategia a experiencia, arquitectura y decisiones visuales con foco en claridad y conversión.",
    },
    {
      label: "03",
      heading: "Implementación",
      description:
        "Desarrollamos con criterio de producto, performance y escalabilidad para llegar rápido sin improvisar.",
    },
    {
      label: "04",
      heading: "Despliegue",
      description:
        "Publicamos en entornos confiables, medimos el comportamiento real y dejamos todo listo para iterar.",
    },
    {
      label: "05",
      heading: "Integración continua",
      description:
        "Conectamos herramientas, automatizamos validaciones y sostenemos una entrega continua con menos fricción.",
    },
    {
      label: "06",
      heading: "Gestión de proyecto",
      description:
        "Trabajamos con cadencia ágil, seguimiento claro y prioridades visibles para entregar en tiempo y forma.",
    },
  ],
};

export const philosophyContent: PhilosophyContent = {
  id: "enfoque",
  eyebrow: "Enfoque",
  heading:
    "Resolvemos problemas. Pensamos en sistemas. Optimizamos para claridad, escalabilidad e intención.",
  paragraphs: [
    "Construimos productos que pueden crecer sin romperse y sin volverse ilegibles para el equipo.",
    "La mejor decisión no siempre es la más compleja. Es la que deja al negocio avanzar con más precisión.",
  ],
};

export const contactContent: ContactContent = {
  id: "contacto",
  eyebrow: "Trabajemos juntos",
  heading:
    "¿Listo para convertir una idea en un sistema que entregue valor?",
  description:
    "Diseñamos, construimos y desplegamos con foco en resultado, velocidad y continuidad operativa.",
  ctas: [
    {
      label: "WhatsApp",
      href: siteConfig.whatsappUrl,
      variant: "primary",
      external: true,
    },
    {
      label: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      variant: "secondary",
    },
  ],
};
