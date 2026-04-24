import { cn } from "@/lib/cn";

type FranjaDividerProps = {
  className?: string;
};

export function FranjaDivider({ className }: FranjaDividerProps) {
  return <div className={cn("franja-divider", className)} />;
}
