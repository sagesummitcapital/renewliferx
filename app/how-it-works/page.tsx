import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import JourneySteps from "@/components/JourneySteps";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Simple. Personalized. Supported every step of the way. Here's what to expect from your first call to ongoing care.",
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How It Works"
        title={
          <>
            Simple. Personalized.
            <br />
            <span className="text-brand-blue">Supported every step of the way.</span>
          </>
        }
        subtitle="From your first call to ongoing care, here's how the Renew Life RX process works."
      />

      <section className="py-20 md:py-24 bg-section-warm">
        <div className="container-x">
          <JourneySteps />
        </div>
      </section>

      <CTASection
        title="See if Renew Life RX is right for you."
        subtitle="Schedule your free 15-minute consultation. No commitment."
      />
    </>
  );
}
