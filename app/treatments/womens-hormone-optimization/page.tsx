import type { Metadata } from "next";
import { Sparkles, CheckCircle2, Heart, Moon, Brain, Flame } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import DisclaimerBlock from "@/components/DisclaimerBlock";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Women's Hormone Optimization",
  description:
    "Bioidentical hormone replacement therapy for women — testosterone, progesterone, estrogen, and thyroid. Personalized, lab-based protocols supervised by our medical team.",
};

export default function WomensPage() {
  return (
    <>
      <PageHero
        eyebrow="Women's Hormone Optimization"
        title={
          <>
            Restore balance.
            <br />
            <span className="text-brand-blue">Reclaim how you feel.</span>
          </>
        }
        subtitle="Bioidentical hormone optimization built around your symptoms and your labs. Every plan is reviewed by a licensed provider — and tailored to where you are in your hormonal journey."
      />

      <section className="py-20 md:py-24">
        <div className="container-x">
          <SectionHeader
            eyebrow="The Big Four"
            title="Where we focus."
            subtitle="Most women's protocols start with the four hormones with the largest impact on energy, mood, body composition, and libido."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: "Testosterone", body: "Energy, libido, lean mass, and motivation." },
              { name: "Progesterone", body: "Sleep, mood balance, and cycle regulation." },
              { name: "Estrogen", body: "Cognitive clarity, skin, bone, and cardiovascular health." },
              { name: "Thyroid", body: "Metabolism, energy, body composition, and mood." },
            ].map((h, i) => (
              <Reveal key={h.name} delay={i * 0.06}>
                <div className="card p-6 h-full">
                  <div className="h-11 w-11 rounded-xl bg-brand-green-light/12 text-brand-green flex items-center justify-center mb-4">
                    <Sparkles size={18} strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display font-bold text-[18px] text-brand-ink">{h.name}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-brand-charcoal/75">{h.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-section-tint-blue">
        <div className="container-x">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
            <div className="md:col-span-5">
              <SectionHeader
                eyebrow="Symptoms We Address"
                title="If any of these sound familiar — let's talk."
              />
            </div>
            <div className="md:col-span-7 grid sm:grid-cols-2 gap-3">
              {[
                { icon: Flame, label: "Hot flashes & night sweats" },
                { icon: Moon, label: "Poor sleep" },
                { icon: Heart, label: "Low libido" },
                { icon: Brain, label: "Brain fog & memory issues" },
                { icon: Sparkles, label: "Mood changes & anxiety" },
                { icon: CheckCircle2, label: "Stubborn weight gain" },
              ].map(({ icon: Icon, label }, i) => (
                <Reveal key={label} delay={i * 0.04}>
                  <div className="card p-4 flex items-center gap-3">
                    <span className="h-9 w-9 rounded-lg bg-brand-blue/8 text-brand-blue flex items-center justify-center shrink-0">
                      <Icon size={16} />
                    </span>
                    <span className="text-[14.5px] font-semibold text-brand-ink">{label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-x">
          <SectionHeader
            eyebrow="The Process"
            title="Lab-based. Provider-reviewed. Tailored to you."
            align="center"
          />
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {[
              {
                step: "01",
                title: "Comprehensive Labs",
                body: "Full hormone panel — testosterone, progesterone, estradiol, FSH, LH, thyroid, and metabolic markers.",
              },
              {
                step: "02",
                title: "Provider Review",
                body: "Your labs and symptoms are reviewed by our medical team to design a protocol that fits you.",
              },
              {
                step: "03",
                title: "Ongoing Support",
                body: "Follow-up labs and check-ins. Adjustments as needed. We support you through every season.",
              },
            ].map((s, i) => (
              <Reveal key={s.step} delay={i * 0.08}>
                <div className="card p-7 h-full">
                  <div className="font-display font-bold text-5xl text-brand-blue/15">{s.step}</div>
                  <h3 className="mt-3 font-display font-bold text-xl text-brand-ink">{s.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-brand-charcoal/80">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-x">
          <DisclaimerBlock />
        </div>
      </section>

      <CTASection title="Find your balance." subtitle="Schedule a free consultation to see if hormone optimization is right for you." />
    </>
  );
}
