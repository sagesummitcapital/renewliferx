import type { Metadata } from "next";
import { Activity, Sparkles, Scale, TestTube } from "lucide-react";
import PageHero from "@/components/PageHero";
import TreatmentCard from "@/components/TreatmentCard";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Treatments",
  description:
    "Medically supervised hormone optimization, weight loss, and peptide therapy. Every plan is reviewed by a licensed physician based on your labs and medical history.",
};

export default function TreatmentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Treatments"
        title={
          <>
            Science-backed treatments,
            <br />
            <span className="text-brand-blue">designed to help you thrive.</span>
          </>
        }
        subtitle="Choose the path that fits your goals. Every plan is reviewed by a licensed physician based on your lab work and medical history."
      />

      <section className="py-16 md:py-20 bg-section-warm">
        <div className="container-x">
          <div className="grid sm:grid-cols-2 gap-5">
            <Reveal>
              <TreatmentCard
                href="/treatments/trt-hrt-men"
                icon={Activity}
                title="Testosterone / HRT for Men"
                description="Restore energy, focus, libido, and vitality with physician-supervised testosterone therapy. Lab-based protocols, ongoing monitoring, and an annual provider visit."
                accent="blue"
              />
            </Reveal>
            <Reveal delay={0.06}>
              <TreatmentCard
                href="/treatments/womens-hormone-optimization"
                icon={Sparkles}
                title="Women's Hormone Optimization"
                description="Bioidentical hormone therapy tailored to your symptoms — testosterone, progesterone, estrogen, and thyroid — built around your labs."
                accent="green"
              />
            </Reveal>
            <Reveal delay={0.12}>
              <TreatmentCard
                href="/treatments/medical-weight-loss"
                icon={Scale}
                title="Medical Weight Loss / Semaglutide"
                description="GLP-1 and next-gen medications — semaglutide, tirzepatide, and retatrutide — paired with nutrition coaching and lifestyle guidance."
                accent="blue"
              />
            </Reveal>
            <Reveal delay={0.18}>
              <TreatmentCard
                href="/treatments/peptide-therapy"
                icon={TestTube}
                title="Peptide Therapy"
                description="Advanced peptide protocols supporting fat loss, recovery, cognitive health, anti-aging, and overall performance."
                accent="green"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
