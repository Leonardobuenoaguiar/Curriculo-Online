type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p
        className={`mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] ${
          light ? "text-[var(--lime)]" : "text-[var(--teal)]"
        }`}
      >
        {eyebrow}
      </p>

      <h2
        className={`font-display text-[clamp(2.6rem,6vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.055em] ${
          light ? "text-white" : "text-[var(--ink)]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-6 max-w-2xl text-base leading-7 sm:text-lg ${
            light ? "text-white/68" : "text-[var(--muted)]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}