interface SectionHeadingProps {
  label: string;
  title: string;
}

export function SectionHeading({ label, title }: SectionHeadingProps) {
  return (
    <div>
      <span className="text-brand font-mono text-xs tracking-wide uppercase">
        {label}
      </span>
      <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}
