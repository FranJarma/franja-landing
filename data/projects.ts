export type Project = {
  name: string;
  description: string;
  stack: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    name: "Signal Commerce",
    description:
      "Arquitectura de e-commerce preparada para crecer sin fricción entre catálogo, pagos y operación.",
    stack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
  },
  {
    name: "Ops Canvas",
    description:
      "Superficie interna para visualizar métricas, automatizar flujos y tomar decisiones con contexto real.",
    stack: ["React", "Node.js", "Tailwind", "Prisma"],
  },
  {
    name: "Pattern OS",
    description:
      "Sistema de componentes y reglas de interfaz diseñado para alinear producto, branding y velocidad de entrega.",
    stack: ["Design Systems", "Storybook", "Motion", "Tokens"],
  },
  {
    name: "Builder Stack",
    description:
      "Infraestructura y tooling para lanzar productos rápidos, medibles y listos para iterar sin deuda invisible.",
    stack: ["Vercel", "CI/CD", "Observability", "DX"],
  },
];
