import type { Metadata } from "next";
import { Droplet, FlaskConical, Building2, ClipboardCheck, CalendarClock, ShieldCheck } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import DisclaimerBlock from "@/components/DisclaimerBlock";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Blood Work",
  description:
    "Why labs come first. The Renew Life RX approach to comprehensive blood work — what we test, where it's done, and how often you need it.",
};

export default function BloodWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Blood Work"
        title={
          <>
            Labs first.
            <br />
            <span className="text-brand-blue">Always.</span>
          </>
        }
        subtitle="Hormone optimization without comprehensive lab work isn't optimization — it's guessing. We start with data and build your plan around it."
      />

      <section className="py-20 md:py-24">
        <div className="container-x">
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                icon: Building2,
                title: "Done at LabCorp",
                body: "We send you a lab order. You walk into a local LabCorp for the blood draw — no needles to find, no specialty centers.",
              },
              {
                icon: ClipboardCheck,
                title: "Comprehensive Panel",
                body: "Total & free testosterone, estradiol, SHBG, LH, FSH, PSA, CBC, CMP, lipids, thyroid — and additional markers as indicated.",
              },
              {
                icon: CalendarClock,
                title: "Quick Turnaround",
                body: "Labs typically return within a few business days. Your provider reviews them and we walk you through the plan.",
              },
            ].map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 0.06}>
                <div className="card p-7 h-full">
                  <div className="h-12 w-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-5">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-brand-ink">{title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-brand-charcoal/80">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-section-tint-blue">
        <div className="container-x">
          <SectionHeader
            eyebrow="What We Test"
            title="A panel built for hormone optimization."
            subtitle="We don't run a generic CBC and call it a day. Our panel is purpose-built to inform safe, effective therapy."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { name: "Hormones", items: ["Total Testosterone", "Free Testosterone", "Estradiol (E2)", "SHBG", "LH / FSH", "DHEA-S"] },
              { name: "Thyroid", items: ["TSH", "Free T3", "Free T4", "Reverse T3 (when indicated)"] },
              { name: "Metabolic", items: ["Comprehensive Metabolic Panel", "Fasting Glucose", "Insulin", "HbA1c"] },
              { name: "Cardiovascular", items: ["Lipid Panel", "ApoB (when indicated)", "hs-CRP (when indicated)"] },
              { name: "Blood Health", items: ["Complete Blood Count", "Hematocrit", "Hemoglobin", "Iron / Ferritin"] },
              { name: "Prostate / Other", items: ["PSA", "IGF-1", "Vitamin D", "Additional markers as needed"] },
            ].map((g, i) => (
              <Reveal key={g.name} delay={i * 0.05}>
                <div className="card p-6 h-full">
                  <div className="flex items-center gap-2.5 mb-4">
                    <Droplet size={18} className="text-brand-blue" />
                    <h3 className="font-display font-bold text-[15px] uppercase tracking-[0.18em] text-brand-charcoal">
                      {g.name}
                    </h3>
                  </div>
                  <ul className="space-y-2 text-[14.5px] text-brand-charcoal/85">
                    {g.items.map((it) => (
                      <li key={it} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-green-light" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-x">
          <div className="rounded-3xl bg-brand-ink text-white p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-mesh opacity-90" />
            <div className="relative grid md:grid-cols-12 gap-10 items-center">
              <div className="md:col-span-7">
                <div className="eyebrow" style={{ color: "#2EAE5E" }}>
                  Lab Cadence
                </div>
                <h2 className="h-display text-white text-[32px] md:text-[44px] mt-3">
                  How often you'll be tested.
                </h2>
                <p className="mt-4 text-white/80 leading-relaxed">
                  Lab work is the foundation of safe ongoing care.
                </p>
              </div>
              <div className="md:col-span-5 space-y-3">
                {[
                  { label: "Baseline", body: "Before any therapy" },
                  { label: "90 days", body: "First follow-up after starting" },
                  { label: "Every 6 months", body: "Ongoing monitoring" },
                  { label: "Annual visit", body: "Required to continue prescribing" },
                ].map((c) => (
                  <div
                    key={c.label}
                    className="rounded-xl bg-white/8 backdrop-blur-md border border-white/15 px-4 py-3 flex items-center justify-between gap-3"
                  >
                    <span className="font-display font-bold text-sm tracking-wide">{c.label}</span>
                    <span className="text-sm text-white/75">{c.body}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-x">
          <DisclaimerBlock />
        </div>
      </section>

      <CTASection title="Ready to start with labs?" subtitle="Schedule a free consultation and we'll walk you through it." />
    </>
  );
}
