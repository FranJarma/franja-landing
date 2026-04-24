import { cn } from "@/lib/cn";

type SectionHeaderProps = {
  id: string;
  eyebrow: string;
  heading: string;
  description?: string;
  className?: string;
  headingClassName?: string;
};

export function SectionHeader({
  id,
  eyebrow,
  heading,
  description,
  className,
  headingClassName,
}: SectionHeaderProps) {
  return (
    <header className={cn("section-copy space-y-5", className)}>
      <p className="eyebrow">{eyebrow}</p>
      <h2
        id={id}
        className={cn(
          "max-w-2xl text-3xl font-bold leading-tight tracking-[-0.05em] md:text-5xl",
          headingClassName,
        )}
      >
        {heading}
      </h2>
      {description ? <p className="body-muted">{description}</p> : null}
    </header>
  );
}
