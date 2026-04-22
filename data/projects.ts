export type Service = {
  order: number;
  kicker: string;
  name: string;
  description: string;
  stack: string[];
};

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
    stack: ["SEO Técnico", "Content", "Analytics", "Core Web Vitals"],
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
