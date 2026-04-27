export const PROJECT_TYPES = [
  "LANDING_PAGE",
  "MANAGEMENT_SYSTEM",
  "ECOMMERCE",
  "AUTOMATION",
  "OTHER",
] as const;

export const PROJECT_TYPE_LABELS = {
  es: {
    LANDING_PAGE: "Landing page",
    MANAGEMENT_SYSTEM: "Sistema de gestión",
    ECOMMERCE: "Ecommerce",
    AUTOMATION: "Automatización",
    OTHER: "Otro",
  },
  en: {
    LANDING_PAGE: "Landing page",
    MANAGEMENT_SYSTEM: "Management system",
    ECOMMERCE: "Ecommerce",
    AUTOMATION: "Automation",
    OTHER: "Other",
  },
} as const;

export const BUDGET_RANGE_OPTIONS = {
  es: [
    "A definir",
    "Hasta USD 500",
    "USD 500 - 1.500",
    "USD 1.500 - 3.000",
    "Más de USD 3.000",
  ],
  en: [
    "To be defined",
    "Up to USD 500",
    "USD 500 - 1,500",
    "USD 1,500 - 3,000",
    "More than USD 3,000",
  ],
} as const;

export const URGENCY_OPTIONS = {
  es: ["Esta semana", "Este mes", "Próximos 3 meses", "Sin apuro"],
  en: ["This week", "This month", "Next 3 months", "No rush"],
} as const;

export const CONTACT_SOURCE_OPTIONS = {
  es: ["Google", "Instagram", "LinkedIn", "Recomendación", "Otro"],
  en: ["Google", "Instagram", "LinkedIn", "Referral", "Other"],
} as const;
