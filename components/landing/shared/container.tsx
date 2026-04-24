import { cn } from "@/lib/cn";
import type { WithChildren } from "@/types/landing";

type ContainerProps = WithChildren & {
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return <div className={cn("section-frame", className)}>{children}</div>;
}
