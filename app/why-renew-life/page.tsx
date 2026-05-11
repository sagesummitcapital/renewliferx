import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, HeartPulse, Sparkles, Lock, Star, Users } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Why Renew Life",
  description:
    "Why thousands of patients choose Renew Life RX — clinical excellence, personalized care, whole-person approach, and ongoing support.",
};

export default function WhyPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Renew Life RX"
        title={
          <>
            Built on trust.
            <br />
            <span className="text-brand-blue">Built for results.</span>
          </>
        }
        subtitle="At Renew Life RX, we combine science, compassion, and expertise to help you look, feel, and live your best."
      />

      <section className="py-20 md:py-24">
        <div className="container-x">
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
            {[
              { icon: ShieldCheck, title: "Clinical Excellence", body: "Evidence-based protocols reviewed by experienced medical providers." },
              { icon: HeartPulse, title: "Personalized Care", body: "Plans tailored to your unique goals, lifestyle, and health needs." },
              { icon: Sparkles, title: "Whole-Person Approach", body: "We go beyond medications — nutrition, mindset, and long-term success." },
              { icon: Lock, title: "Safe & Secure", body: "Your privacy is our priority. All information handled with the highest standards." },
              { icon: Users, title: "Ongoing Support", body: "You're never on your own. We're with you from start to finish and beyond." },
            ].map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 0.05}>
                <div className="card p-6 h-full">
                  <div className="h-11 w-11 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-4">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display font-bold text-[17px] text-brand-ink">{title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-brand-charcoal/75">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-section-tint-blue">
        <div className="container-x">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
            <div className="md:col-span-5">
              <SectionHeader
                eyebrow="Our Story"
                title="Ten years, thousands of lives changed."
                subtitle="Renew Life RX was built to fix what's broken in traditional hormone care: the rushed appointments, the one-size-fits-all protocols, and the lack of follow-through. We do this differently."
              />
            </div>
            <div className="md:col-span-7">
              <Reveal>
                <div className="rounded-3xl overflow-hidden border border-black/8 shadow-soft bg-white">
                  <Image
                    src="/brand/overview.png"
                    alt="Renew Life RX overview"
                    width={1600}
                    height={1100}
                    className="w-full h-auto"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-x">
          <SectionHeader
            eyebrow="What Patients Say"
            title="Real people. Real results."
            align="center"
          />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                quote: "Adam is never too busy to answer any and all questions I've ever had. I've been a client for 4 years, and will be for life.",
                name: "Rick",
                meta: "Age 42 • Business Professional",
              },
              {
                quote: "From day one, all questions and services have been prompt and professional. I can't thank Renew Life RX enough for the impact their services have made on my quality of life.",
                name: "Karl",
                meta: "Age 36 • Construction Worker",
              },
              {
                quote: "Hands down the easiest medical process I have experienced. The level of service and communication I get from working with Renew Life RX is first class.",
                name: "Patient",
                meta: "Verified review",
              },
            ].map((t, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <figure className="card p-7 h-full flex flex-col">
                  <div className="flex gap-0.5 text-brand-green-light mb-4">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} size={16} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <blockquote className="text-[15.5px] leading-relaxed text-brand-charcoal flex-1">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-5 pt-5 border-t border-black/8">
                    <div className="font-display font-bold text-brand-ink">{t.name}</div>
                    <div className="text-xs text-brand-charcoal/65 mt-0.5">{t.meta}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
