import { cn } from "@/lib/cn";
import type { WithChildren } from "@/types/landing";

import { Container } from "./container";

type SectionProps = WithChildren & {
  id: string;
  labelledBy: string;
  className?: string;
  containerClassName?: string;
};

export function Section({
  id,
  labelledBy,
  children,
  className,
  containerClassName,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("py-24 md:py-32", className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
