type SectionHeadingProps = {
  label: string;
  title: string;
  body: string;
};

export function SectionHeading({
  label,
  title,
  body,
}: SectionHeadingProps) {
  return (
    <div className="section-copy space-y-5">
      <p className="eyebrow">{label}</p>
      <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-[-0.05em] md:text-5xl">
        {title}
      </h2>
      <p className="body-muted">{body}</p>
    </div>
  );
}
