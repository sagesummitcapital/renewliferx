import type { Metadata } from "next";
import { Scale, Activity, Salad, TrendingDown, CheckCircle2, AlertTriangle } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import DisclaimerBlock from "@/components/DisclaimerBlock";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Medical Weight Loss / Semaglutide",
  description:
    "Physician-supervised medical weight loss programs including GLP-1 and dual/triple-agonist medications — semaglutide, tirzepatide, and retatrutide — paired with nutrition and lifestyle support.",
};

export default function MedicalWeightLossPage() {
  return (
    <>
      <PageHero
        eyebrow="Medical Weight Loss"
        title={
          <>
            More than a prescription.
            <br />
            <span className="text-brand-blue">A complete weight loss plan.</span>
          </>
        }
        subtitle="Doctor-led weight loss programs combining GLP-1 medications with nutrition and lifestyle support — built on your labs and reviewed by a physician."
      />

      <section className="py-20 md:py-24">
        <div className="container-x">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
            <div className="md:col-span-6">
              <SectionHeader
                eyebrow="GLP-1 & Next-Gen Programs"
                title={
                  <>
                    Semaglutide. Tirzepatide.
                    <br />
                    Retatrutide.
                  </>
                }
                subtitle="From established GLP-1 medications to next-generation dual and triple-agonist therapies, we offer the full range of clinically appropriate weight loss medications — combined with structured guidance for sustainable results."
              />
            </div>
            <div className="md:col-span-6 grid grid-cols-2 gap-4">
              {[
                { icon: TrendingDown, label: "Significant weight reduction" },
                { icon: Activity, label: "Improved metabolic markers" },
                { icon: Salad, label: "Nutrition coaching included" },
                { icon: Scale, label: "Sustainable, structured plans" },
              ].map(({ icon: Icon, label }, i) => (
                <Reveal key={label} delay={i * 0.05}>
                  <div className="card p-5 h-full">
                    <div className="h-10 w-10 rounded-lg bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-3">
                      <Icon size={18} strokeWidth={1.8} />
                    </div>
                    <div className="text-[14.5px] font-semibold text-brand-ink leading-snug">
                      {label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-section-tint-green">
        <div className="container-x">
          <SectionHeader
            eyebrow="The Plan"
            title="Built around your goals — not a one-size-fits-all script."
            align="center"
          />
          <div className="mt-12 grid md:grid-cols-4 gap-5">
            {[
              { n: "01", title: "Lab Work", body: "Comprehensive panel to confirm safety and guide protocol selection." },
              { n: "02", title: "Provider Review", body: "Plan reviewed by our medical team. Qualified patients may be eligible for fast-track." },
              { n: "03", title: "Personalized Plan", body: "Medication, dosing, nutrition, and lifestyle guidance tailored to you." },
              { n: "04", title: "Ongoing Support", body: "Follow-ups, dose adjustments, and accountability — we don't disappear after week one." },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 0.06}>
                <div className="card p-6 h-full">
                  <div className="font-display font-bold text-3xl text-brand-blue/20">{s.n}</div>
                  <h3 className="mt-2 font-display font-bold text-lg text-brand-ink">{s.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-brand-charcoal/75">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-x">
          <div className="grid md:grid-cols-2 gap-5">
            <Reveal>
              <div className="card p-7 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-brand-green-light/12 text-brand-green flex items-center justify-center">
                    <CheckCircle2 size={20} />
                  </div>
                  <h3 className="font-display font-bold text-xl">Who's a Good Fit</h3>
                </div>
                <ul className="space-y-3 text-[15px] leading-relaxed text-brand-charcoal/85">
                  {[
                    "Adults seeking medically supervised weight loss",
                    "Comfortable with structured, lab-based plans",
                    "Ready for ongoing follow-up and adjustments",
                    "Willing to combine medication with nutrition and lifestyle support",
                  ].map((p) => (
                    <li key={p} className="flex gap-2.5">
                      <CheckCircle2 size={16} className="text-brand-green-light mt-1 shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="card p-7 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                    <AlertTriangle size={20} />
                  </div>
                  <h3 className="font-display font-bold text-xl">Important to Know</h3>
                </div>
                <ul className="space-y-3 text-[15px] leading-relaxed text-brand-charcoal/85">
                  {[
                    "GLP-1 medications have side effects — your provider will review them with you.",
                    "Pregnancy, certain thyroid cancers, and other conditions are contraindications.",
                    "Outcomes depend on adherence, nutrition, and lifestyle.",
                    "Medication is provided only when clinically appropriate.",
                  ].map((p) => (
                    <li key={p} className="flex gap-2.5">
                      <AlertTriangle size={16} className="text-amber-500 mt-1 shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-x">
          <DisclaimerBlock />
        </div>
      </section>

      <CTASection title="Ready to start your weight loss journey?" subtitle="Schedule a free consultation to see what's possible for you." />
    </>
  );
}
