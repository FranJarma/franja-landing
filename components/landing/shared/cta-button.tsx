import { cn } from "@/lib/cn";
import type { CtaLink } from "@/types/landing";

const ctaBaseClass =
  "inline-flex min-h-12 items-center justify-center border px-5 py-3 text-sm font-bold";

const ctaVariantClasses = {
  primary:
    "border-accent bg-accent text-black hover:bg-transparent hover:text-accent",
  secondary:
    "border-white/20 text-white hover:border-accent hover:text-accent",
} satisfies Record<CtaLink["variant"], string>;

type CtaButtonProps = CtaLink & {
  className?: string;
};

export function CtaButton({
  label,
  href,
  variant,
  external,
  className,
}: CtaButtonProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={cn(ctaBaseClass, ctaVariantClasses[variant], className)}
    >
      {label}
    </a>
  );
}
