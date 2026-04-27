import type { Dictionary } from "@/types/landing";

export const es = {
  accessibility: {
    skipToContent: "Saltar al contenido",
  },
  metadata: {
    title: "Franja | Agencia de producto, diseño y tecnología",
    description:
      "Agencia ágil de producto, diseño y tecnología en Salta, Argentina. Diseñamos y desplegamos landings, sistemas, e-commerce, automatizaciones y analítica con foco en resultados.",
    keywords: [
      "agencia digital",
      "desarrollo web",
      "landing pages",
      "SEO técnico",
      "automatizaciones",
      "e-commerce",
      "Salta",
      "Argentina",
    ],
    ogImageAlt: "Franja, agencia de producto, diseño y tecnología",
  },
  nav: {
    ariaLabel: "Navegación principal",
    mobileAriaLabel: "Navegación móvil",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    home: "Ir al inicio",
    links: [
      { label: "Sobre nosotros", href: "#sobre" },
      { label: "Servicios", href: "#servicios" },
      { label: "Proceso", href: "#proceso" },
      { label: "Enfoque", href: "#enfoque" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
  languageSwitcher: {
    ariaLabel: "Cambiar idioma",
  },
  hero: {
    id: "hero",
    eyebrow: "Estrategia, diseño y tecnología",
    heading: "Soluciones digitales que funcionan",
    description:
      "Diseñamos y construimos sistemas, productos y experiencias que van más allá de lo normal, con foco en impacto real y ejecución sostenida.",
    ctas: [
      { label: "Trabajemos juntos", href: "#contacto", variant: "primary" },
      { label: "Ver servicios", href: "#servicios", variant: "secondary" },
    ],
  },
  about: {
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
  },
  services: {
    section: {
      id: "servicios",
      eyebrow: "Servicios",
      heading:
        "Diseño, desarrollo y operación digital para marcas que necesitan resultados.",
      description:
        "Tomamos cada proyecto de punta a punta: presencia digital, producto, automatización y despliegue.",
    },
    items: [
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
        kicker: "Branding",
        name: "Branding y diseño visual para marcas digitales",
        description:
          "Creamos identidades visuales coherentes y experiencias de marca que se destacan en el mercado.",
        stack: ["Data Sources", "ETL", "Dashboards", "Insights"],
      },
    ],
  },
  process: {
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
  },
  philosophy: {
    id: "enfoque",
    eyebrow: "Enfoque",
    heading:
      "Resolvemos problemas. Pensamos en sistemas. Optimizamos para claridad, escalabilidad e intención.",
    paragraphs: [
      "Construimos productos que pueden crecer sin romperse y sin volverse ilegibles para el equipo.",
      "La mejor decisión no siempre es la más compleja. Es la que deja al negocio avanzar con más precisión.",
    ],
  },
  contact: {
    id: "contacto",
    eyebrow: "Trabajemos juntos",
    heading: "¿Listo para convertir una idea en un sistema que entregue valor?",
    description:
      "Diseñamos, construimos y desplegamos con foco en resultado, velocidad y continuidad operativa.",
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
        fullName: "Nombre y apellido",
        companyName: "Empresa o emprendimiento",
        email: "Email",
        phone: "WhatsApp",
        projectType: "Tipo de proyecto",
        budgetRange: "Presupuesto estimado",
        urgency: "Urgencia",
        message: "Mensaje o descripción del proyecto",
        source: "Cómo conoció Franja",
      },
      placeholders: {
        fullName: "Ej. Martina López",
        companyName: "Ej. Norte Studio",
        email: "hola@empresa.com",
        phone: "+54 9 387 000 0000",
        message:
          "Contanos qué necesitás construir, qué problema querés resolver y en qué etapa está el proyecto.",
      },
      selectPlaceholder: "Seleccionar",
      submitLabel: "Solicitar diagnóstico",
      submittingLabel: "Enviando...",
      successMessage:
        "Recibimos tu consulta. Vamos a analizar tu proyecto y te contactaremos pronto.",
      validation: {
        fullName: "Ingresá tu nombre y apellido.",
        companyName: "Ingresá el nombre de tu empresa o emprendimiento.",
        email: "Ingresá un email válido.",
        phone: "Ingresá un WhatsApp válido.",
        projectType: "Seleccioná un tipo de proyecto.",
        budgetRange: "Seleccioná un presupuesto estimado.",
        urgency: "Seleccioná una urgencia.",
        message: "Contanos un poco más sobre el proyecto.",
        source: "Contanos cómo conociste Franja.",
      },
    },
  },
  footer: {
    tagline: "Agencia ágil de diseño, producto y tecnología.",
    socialHeading: "Redes sociales",
  },
  whatsapp: {
    ariaLabel: "Escribinos por WhatsApp",
  },
} satisfies Dictionary;
