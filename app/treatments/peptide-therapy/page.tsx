import type { Metadata } from "next";
import { TestTube, Zap, Shield, Brain, Activity, Moon } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import DisclaimerBlock from "@/components/DisclaimerBlock";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Peptide Therapy",
  description:
    "Advanced peptide protocols supporting fat loss, recovery, cognitive health, and anti-aging. Physician-supervised, lab-based, and tailored to your goals.",
};

export default function PeptidesPage() {
  return (
    <>
      <PageHero
        eyebrow="Peptide Therapy"
        title={
          <>
            Recover faster.
            <br />
            <span className="text-brand-blue">Perform better.</span>
          </>
        }
        subtitle="Advanced peptide protocols designed to support fat loss, muscle recovery, cognitive health, and anti-aging — guided by your provider."
      />

      <section className="py-20 md:py-24">
        <div className="container-x">
          <SectionHeader
            eyebrow="Categories"
            title="What peptides can support."
            subtitle="Different peptides serve different goals. Your protocol is built around what you're trying to accomplish — and confirmed against your labs."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: Activity,
                title: "Recovery & Repair",
                body: "Support tissue repair, joint health, and recovery from training or injury.",
              },
              {
                icon: Zap,
                title: "Fat Loss & Body Composition",
                body: "Targeted protocols paired with appropriate nutrition and training guidance.",
              },
              {
                icon: Brain,
                title: "Cognitive & Mood Support",
                body: "Peptides that support focus, memory, and overall mental performance.",
              },
              {
                icon: Shield,
                title: "Longevity & Anti-Aging",
                body: "Protocols aimed at supporting cellular health, energy, and resilience.",
              },
              {
                icon: Moon,
                title: "Sleep & Restoration",
                body: "Peptide protocols that may support deeper, more restorative sleep.",
              },
              {
                icon: TestTube,
                title: "Custom Stacks",
                body: "Combinations selected by your provider based on goals, labs, and tolerance.",
              },
            ].map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 0.05}>
                <div className="card p-6 h-full">
                  <div className="h-11 w-11 rounded-xl bg-brand-green-light/12 text-brand-green flex items-center justify-center mb-4">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display font-bold text-[18px] text-brand-ink">{title}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-brand-charcoal/75">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-section-tint-blue">
        <div className="container-x">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
            <div className="md:col-span-6">
              <SectionHeader
                eyebrow="The Approach"
                title="Provider-supervised. Always."
                subtitle="Peptides are powerful tools — and they require clinical oversight. Every protocol we offer is reviewed by a licensed provider, with appropriate labs at baseline and during therapy."
              />
            </div>
            <div className="md:col-span-6 space-y-3">
              {[
                { label: "Goals review", body: "What are you trying to accomplish?" },
                { label: "Lab baseline", body: "We screen for safety and confirm starting point." },
                { label: "Protocol design", body: "Provider selects peptide(s), dosing, and duration." },
                { label: "Monitoring", body: "Follow-up labs and check-ins to assess progress." },
              ].map((s, i) => (
                <Reveal key={s.label} delay={i * 0.05}>
                  <div className="card p-5 flex items-start gap-4">
                    <span className="font-display font-bold text-brand-blue text-2xl shrink-0 w-10">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="font-display font-bold text-brand-ink">{s.label}</div>
                      <p className="text-[14.5px] text-brand-charcoal/75 mt-0.5">{s.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-x">
          <DisclaimerBlock />
        </div>
      </section>

      <CTASection title="Curious if peptides fit your goals?" subtitle="Schedule a free consultation. We'll walk through what's possible." />
    </>
  );
}
