import Reveal from "./Reveal";

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  invert = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  invert?: boolean;
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  const titleColor = invert ? "text-white" : "text-brand-ink";
  const subColor = invert ? "text-white/75" : "text-brand-charcoal/75";
  const eyebrowColor = invert ? "text-brand-green-light" : "text-brand-blue";
  return (
    <div className={`max-w-3xl ${alignCls}`}>
      {eyebrow && (
        <Reveal>
          <div
            className={`eyebrow ${eyebrowColor}`}
            style={{ color: invert ? "#2EAE5E" : undefined }}
          >
            {eyebrow}
          </div>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className={`h-display ${titleColor} text-[34px] sm:text-[42px] md:text-[52px] mt-3`}>
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className={`mt-5 text-base md:text-lg leading-relaxed ${subColor}`}>{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
