type FranjaMarkProps = {
  orientation?: "horizontal" | "vertical";
  className?: string;
};

export function FranjaMark({
  orientation = "horizontal",
  className = "",
}: FranjaMarkProps) {
  const base =
    orientation === "horizontal"
      ? "h-px w-full origin-left animate-sweep"
      : "h-full w-px origin-top animate-sweep";

  return (
    <div
      aria-hidden="true"
      className={`${base} bg-accent shadow-[0_0_24px_rgba(0,255,156,0.45)] ${className}`}
    />
  );
}
