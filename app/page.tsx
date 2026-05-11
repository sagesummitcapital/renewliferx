import Link from "next/link";
import Image from "next/image";
import {
  Activity,
  Sparkles,
  Scale,
  TestTube,
  ArrowRight,
  Star,
  ShieldCheck,
  HeartPulse,
  Clock,
} from "lucide-react";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import TreatmentCard from "@/components/TreatmentCard";
import JourneySteps from "@/components/JourneySteps";
import CTASection from "@/components/CTASection";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* —— Brand promise / values band —— */}
      <section className="relative py-20 md:py-28 bg-section-warm">
        <div className="container-x">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-end">
            <div className="md:col-span-7">
              <SectionHeader
                eyebrow="The Renew Life RX Difference"
                title={
                  <>
                    Science, compassion, and{" "}
                    <span className="text-brand-blue">expertise</span> — to help you look,
                    feel, and live your best.
                  </>
                }
                subtitle="Your journey. Your plan. Our support every step of the way. We combine medically supervised hormone optimization with weight loss and peptide therapy, all built on your lab work and reviewed by a physician."
              />
            </div>
            <div className="md:col-span-5">
              <Reveal delay={0.1}>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { num: "10+", label: "Years optimizing hormones" },
                    { num: "1000s", label: "Patients supported" },
                    { num: "6 mo", label: "Lab cadence on therapy" },
                    { num: "Free", label: "15-minute consult" },
                  ].map((s) => (
                    <div key={s.label} className="card p-5">
                      <div className="font-display font-bold text-3xl text-brand-blue">{s.num}</div>
                      <div className="mt-1 text-sm text-brand-charcoal/75 leading-snug">{s.label}</div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>

          {/* Pillar strip */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: HeartPulse,
                title: "Clinical Excellence",
                body: "Evidence-based protocols reviewed by experienced medical providers.",
              },
              {
                icon: Sparkles,
                title: "Personalized Care",
                body: "Plans tailored to your unique goals, lifestyle, and health needs.",
              },
              {
                icon: ShieldCheck,
                title: "Ongoing Support",
                body: "You're never on your own. We're with you from start to finish and beyond.",
              },
            ].map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <div className="card p-6 h-full">
                  <div className="h-11 w-11 rounded-xl bg-brand-blue/8 text-brand-blue flex items-center justify-center mb-4">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display font-bold text-lg text-brand-ink">{title}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-brand-charcoal/75">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* —— Treatments —— */}
      <section className="relative py-20 md:py-28 bg-section-tint-blue">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionHeader
              eyebrow="Our Programs"
              title={
                <>
                  Science-backed treatments,{" "}
                  <span className="text-brand-blue">designed to help you thrive.</span>
                </>
              }
              subtitle="Choose the path that fits your goals. Every plan is reviewed by a licensed physician based on your labs and medical history."
            />
            <Reveal>
              <Link href="/treatments" className="btn btn-ghost mt-2 md:mt-0">
                View all treatments
                <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <Reveal delay={0.0}>
              <TreatmentCard
                href="/treatments/trt-hrt-men"
                icon={Activity}
                title="Testosterone / HRT"
                description="Restore energy, focus, and vitality with physician-supervised testosterone therapy. Lab-based, with ongoing monitoring."
                accent="blue"
              />
            </Reveal>
            <Reveal delay={0.06}>
              <TreatmentCard
                href="/treatments/womens-hormone-optimization"
                icon={Sparkles}
                title="Women's Hormones"
                description="Bioidentical hormone optimization tailored to your symptoms — testosterone, progesterone, estrogen, and thyroid."
                accent="green"
              />
            </Reveal>
            <Reveal delay={0.12}>
              <TreatmentCard
                href="/treatments/medical-weight-loss"
                icon={Scale}
                title="Medical Weight Loss"
                description="GLP-1 and next-gen medications — semaglutide, tirzepatide, and retatrutide — paired with nutrition and lifestyle guidance."
                accent="blue"
              />
            </Reveal>
            <Reveal delay={0.18}>
              <TreatmentCard
                href="/treatments/peptide-therapy"
                icon={TestTube}
                title="Peptide Therapy"
                description="Advanced peptide protocols supporting fat loss, recovery, anti-aging, and overall performance."
                accent="green"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* —— How It Works (mirrors patient journey infographic) —— */}
      <section className="relative py-20 md:py-28 bg-section-soft">
        <div className="container-x">
          <SectionHeader
            eyebrow="The Renew Life RX Journey"
            title={
              <>
                Simple. Personalized.
                <br />
                Supported every step of the way.
              </>
            }
            subtitle="From your first call to ongoing support, here's exactly what to expect."
            align="center"
          />

          <div className="mt-16">
            <JourneySteps />
          </div>

          <div className="mt-14 text-center">
            <Reveal>
              <Link href="/how-it-works" className="btn btn-primary">
                See the full journey
                <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* —— What You Can Expect ——*/}
      <section className="relative py-20 md:py-28 overflow-hidden bg-section-tint-green">
        <div className="absolute inset-0 bg-grid opacity-50" aria-hidden="true" />
        <div className="relative container-x">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-5">
              <SectionHeader
                eyebrow="What to expect"
                title={
                  <>
                    Built on trust.
                    <br />
                    <span className="text-brand-blue">Built for results.</span>
                  </>
                }
                subtitle="Patients choose Renew Life RX for our transparency, integrity, and commitment to helping people transform their health."
              />
              <Reveal delay={0.15}>
                <div className="mt-8 flex items-center gap-4">
                  <Link href="/why-renew-life" className="btn btn-primary">
                    Why Renew Life
                  </Link>
                  <Link href="/blood-work" className="btn btn-ghost">
                    About blood work
                  </Link>
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Comprehensive lab testing",
                  "Provider-reviewed treatment plans",
                  "High-quality medications",
                  "Education and lifestyle support",
                  "Ongoing follow-up and monitoring",
                  "Results you can feel",
                ].map((label, i) => (
                  <Reveal key={label} delay={i * 0.05}>
                    <div className="card p-5 flex items-center gap-3">
                      <span className="h-8 w-8 rounded-full bg-brand-green-light/12 text-brand-green flex items-center justify-center shrink-0">
                        <Star size={14} strokeWidth={2.2} />
                      </span>
                      <span className="text-[15px] font-semibold text-brand-ink">{label}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* —— Social proof / quote band —— */}
      <section className="relative py-20 md:py-24 bg-section-tint-blue">
        <div className="container-x">
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                quote:
                  "I've consulted with other doctors in the past, but nobody has taken the care or time to explain and communicate the specifics of what I needed in a way that I understood.",
                name: "Rick",
                meta: "Age 42 • Patient",
              },
              {
                quote:
                  "From day one, all questions and services have been prompt and professional. I can't thank Renew Life RX enough for the impact their services have made on my quality of life.",
                name: "Karl",
                meta: "Age 36 • Patient",
              },
              {
                quote:
                  "Hands down the easiest medical process I have experienced. The level of service and communication I get from working with Renew Life RX is first class.",
                name: "Patient",
                meta: "Verified review",
              },
            ].map((t, i) => (
              <Reveal key={i} delay={i * 0.08}>
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

      {/* —— FAQ teaser —— */}
      <section className="relative py-20 md:py-28 bg-section-soft">
        <div className="container-x">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-5">
              <SectionHeader
                eyebrow="Common Questions"
                title="Answers, before you ask."
                subtitle="Quick takes on labs, eligibility, monitoring, and what to expect from your first weeks of therapy."
              />
              <Reveal delay={0.15}>
                <Link href="/faq" className="btn btn-ghost mt-8">
                  Read full FAQ
                  <ArrowRight size={16} />
                </Link>
              </Reveal>
            </div>
            <div className="md:col-span-7 space-y-3">
              {[
                {
                  q: "Do I need labs before starting?",
                  a: "Yes. Comprehensive lab work is required before starting any therapy so we can build a plan that's safe and effective for you.",
                },
                {
                  q: "Can I speak with a provider before enrolling?",
                  a: "Absolutely. Your free 15-minute consultation is built for exactly that — to answer questions and review your options with no commitment.",
                },
                {
                  q: "How fast will I notice changes?",
                  a: "Many patients report better energy and focus within 4–6 weeks. Body composition and other metrics typically follow over the next 12–16 weeks.",
                },
                {
                  q: "How is medication delivered?",
                  a: "Once your plan is approved and payment is complete, your medication is fulfilled and shipped directly to you.",
                },
              ].map((f, i) => (
                <Reveal key={f.q} delay={i * 0.05}>
                  <div className="card p-5">
                    <div className="flex items-start gap-3">
                      <Clock size={18} className="text-brand-blue mt-0.5 shrink-0" />
                      <div>
                        <h3 className="font-display font-bold text-[16px] text-brand-ink">{f.q}</h3>
                        <p className="mt-1.5 text-[14.5px] leading-relaxed text-brand-charcoal/75">{f.a}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
