import Reveal from "./Reveal";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
}) {
  return (
    <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 overflow-hidden bg-mesh-light">
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden="true" />
      <div className="bg-noise" />
      <div className="relative container-x">
        <div className="max-w-4xl">
          {eyebrow && (
            <Reveal>
              <div className="eyebrow">{eyebrow}</div>
            </Reveal>
          )}
          <Reveal delay={0.05}>
            <h1 className="h-display text-brand-ink text-[40px] sm:text-[56px] md:text-[72px] mt-3">
              {title}
            </h1>
          </Reveal>
          {subtitle && (
            <Reveal delay={0.1}>
              <p className="mt-5 text-lg md:text-xl text-brand-charcoal/75 max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
