import { cn } from "@/lib/cn";

type BadgeProps = {
  children: string;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/50 transition group-hover:border-accent/50 group-hover:text-accent",
        className,
      )}
    >
      {children}
    </span>
  );
}
