import { Phone, Droplet, Stethoscope, Package } from "lucide-react";
import Reveal from "./Reveal";

export const journeySteps = [
  {
    n: 1,
    icon: Phone,
    color: "blue",
    title: "Intake & Introduction",
    body: "We learn about your goals and walk you through the process. You'll get a dedicated team member who supports you from the start.",
  },
  {
    n: 2,
    icon: Droplet,
    color: "green",
    title: "Lab Work",
    body: "Comprehensive blood work at a local lab — the foundation for any plan we build.",
  },
  {
    n: 3,
    icon: Stethoscope,
    color: "blue",
    title: "Results & Provider Review",
    body: "Your labs are reviewed by a licensed provider. Only clinically appropriate plans move forward, with dosing tailored to you.",
  },
  {
    n: 4,
    icon: Package,
    color: "green",
    title: "Fulfillment & Support",
    body: "Your medication is fulfilled and shipped. We support you through follow-ups, adjustments, and ongoing monitoring.",
  },
] as const;

export default function JourneySteps({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={
        compact
          ? "grid grid-cols-2 md:grid-cols-4 gap-5"
          : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      }
    >
      {journeySteps.map((s, i) => {
        const isBlue = s.color === "blue";
        const numBg = isBlue ? "bg-brand-blue" : "bg-brand-green-light";
        const numColor = isBlue ? "text-brand-blue" : "text-brand-green-light";
        const iconColor = isBlue ? "text-brand-blue" : "text-brand-green-light";
        return (
          <Reveal key={s.n} delay={i * 0.06} className="flex flex-col items-start">
            <div className={`step-num ${numBg} ${numColor}`}><span>{s.n}</span></div>
            <div className={`mt-5 ${iconColor}`}>
              <s.icon size={36} strokeWidth={1.8} />
            </div>
            <h3 className="mt-3 font-display font-bold text-[16px] text-brand-ink uppercase tracking-wide leading-tight">
              {s.title}
            </h3>
            <p className="mt-2 text-[14.5px] leading-relaxed text-brand-charcoal/75">{s.body}</p>
          </Reveal>
        );
      })}
    </div>
  );
}
