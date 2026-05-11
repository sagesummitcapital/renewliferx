import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ClipboardList,
  CalendarClock,
  Stethoscope,
  Pill,
  ArrowRight,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import DisclaimerBlock from "@/components/DisclaimerBlock";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Testosterone Replacement Therapy (TRT) for Men",
  description:
    "Physician-supervised testosterone replacement therapy. Lab-based protocols, comprehensive monitoring, and annual provider visits. Learn about eligibility, labs, options, and what to expect.",
};

export default function TRTPage() {
  return (
    <>
      <PageHero
        eyebrow="Testosterone / HRT for Men"
        title={
          <>
            Restore your energy.
            <br />
            <span className="text-brand-blue">Get back to feeling like you.</span>
          </>
        }
        subtitle="Physician-supervised testosterone replacement therapy, built on your lab work and reviewed by our medical team. Treatment is provided only when clinically appropriate."
      />

      {/* —— Eligibility —— */}
      <section className="py-20 md:py-24">
        <div className="container-x">
          <SectionHeader
            eyebrow="Eligibility"
            title="Is TRT right for you?"
            subtitle="TRT is considered when lab work confirms low testosterone AND symptoms are present. Labs alone do not determine eligibility — clinical judgment is required."
          />

          <div className="mt-12 grid md:grid-cols-2 gap-5">
            <Reveal>
              <div className="card p-7 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-brand-green-light/12 text-brand-green flex items-center justify-center">
                    <CheckCircle2 size={20} />
                  </div>
                  <h3 className="font-display font-bold text-xl">Typical Indicators</h3>
                </div>
                <ul className="space-y-3 text-[15px] leading-relaxed text-brand-charcoal/85">
                  {[
                    "Total testosterone below clinical reference ranges (typically < 350 ng/dL)",
                    "Free testosterone below clinical reference ranges (typically < 50 pg/mL)",
                    "Symptomatic — fatigue, low libido, brain fog, mood changes, loss of strength or muscle mass, poor sleep",
                    "Comprehensive baseline labs reviewed by your provider",
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
                  <div className="h-10 w-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                    <XCircle size={20} />
                  </div>
                  <h3 className="font-display font-bold text-xl">Exclusions</h3>
                </div>
                <ul className="space-y-3 text-[15px] leading-relaxed text-brand-charcoal/85">
                  {[
                    "PSA ≥ 3.0 — TRT is not initiated; further evaluation required",
                    "Untreated or active prostate or breast cancer",
                    "Significant untreated cardiovascular disease",
                    "Elevated hematocrit or hemoglobin without prior workup",
                    "Active fertility planning (alternative protocols may apply)",
                    "Other clinical contraindications identified by your provider",
                  ].map((p) => (
                    <li key={p} className="flex gap-2.5">
                      <XCircle size={16} className="text-red-500 mt-1 shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* —— Labs cadence —— */}
      <section className="py-20 md:py-24 bg-section-tint-blue">
        <div className="container-x">
          <SectionHeader
            eyebrow="Lab Work"
            title="Lab cadence — required for safe care."
            subtitle="Continued therapy requires periodic lab work. We won't refill prescriptions outside of cadence."
          />

          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {[
              {
                tag: "Step 1",
                title: "Baseline Labs",
                body: "Comprehensive panel before any therapy is considered. Total T, free T, estradiol, SHBG, LH, FSH, PSA, CBC, CMP, lipids, TSH, and additional markers as indicated.",
              },
              {
                tag: "Step 2",
                title: "90-Day Follow-Up",
                body: "Repeat labs after starting therapy to confirm response and screen for hematocrit/estradiol changes. Dosing is adjusted based on results.",
              },
              {
                tag: "Step 3",
                title: "Every 6 Months",
                body: "Ongoing monitoring labs every 6 months minimum. Annual video visit with your provider is required to continue prescribing.",
              },
            ].map((s, i) => (
              <Reveal key={s.tag} delay={i * 0.08}>
                <div className="card p-7 h-full">
                  <div className="eyebrow !text-brand-green">{s.tag}</div>
                  <h3 className="mt-2 font-display font-bold text-xl text-brand-ink">{s.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-brand-charcoal/80">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-10 rounded-2xl bg-white border border-black/8 p-6 md:p-7 flex flex-col md:flex-row items-start gap-5">
              <div className="h-11 w-11 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0">
                <CalendarClock size={20} />
              </div>
              <div>
                <h4 className="font-display font-bold text-lg text-brand-ink">
                  Annual provider video visit — required
                </h4>
                <p className="mt-1.5 text-[15px] leading-relaxed text-brand-charcoal/80">
                  An annual telehealth visit with your provider is required to continue prescribing.
                  Refills are contingent on adherence to monitoring requirements.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* —— Treatment options —— */}
      <section className="py-20 md:py-24">
        <div className="container-x">
          <SectionHeader
            eyebrow="Treatment Options"
            title="Your protocol is built around you."
            subtitle="The right delivery method depends on your labs, lifestyle, fertility goals, and medical history. Your provider will guide you."
          />

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Testosterone Cypionate (Injection)",
                body: "Weekly or twice-weekly intramuscular or subcutaneous injection. The most common, well-studied protocol.",
              },
              {
                title: "Testosterone Cream",
                body: "Daily transdermal application. A non-injection option for select patients.",
              },
              {
                title: "Enclomiphene",
                body: "An oral SERM that stimulates the body's own testosterone production. Often selected when fertility preservation is a priority.",
              },
              {
                title: "HCG",
                body: "Used alongside or in place of TRT in select cases — particularly to support testicular function or fertility goals.",
              },
              {
                title: "Anastrozole",
                body: "Aromatase inhibitor used in select patients to manage estradiol when clinically indicated.",
              },
              {
                title: "Adjunct Peptides",
                body: "Selected peptide protocols may be added based on goals — recovery, body composition, or longevity.",
              },
            ].map((t, i) => (
              <Reveal key={t.title} delay={i * 0.05}>
                <div className="card p-6 h-full">
                  <div className="h-10 w-10 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-4">
                    <Pill size={18} strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display font-bold text-[17px] text-brand-ink">{t.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-brand-charcoal/75">{t.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* —— Side effects to monitor —— */}
      <section className="py-20 md:py-24 bg-section-tint-green">
        <div className="container-x">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14">
            <div className="md:col-span-5">
              <SectionHeader
                eyebrow="What We Monitor"
                title="Side effects — and how we manage them."
                subtitle="TRT is generally well tolerated when properly managed. Ongoing labs let us catch issues early and adjust before they become problems."
              />
            </div>
            <div className="md:col-span-7">
              <div className="space-y-3">
                {[
                  {
                    label: "Hematocrit / Hemoglobin",
                    body: "Elevated red cell counts can occur on TRT. We screen at every cadence; therapeutic phlebotomy or dose adjustment may be required.",
                  },
                  {
                    label: "Estradiol",
                    body: "Elevated E2 can cause water retention, mood changes, or gynecomastia. We monitor and manage with dose adjustments or anastrozole when indicated.",
                  },
                  {
                    label: "PSA & Prostate Health",
                    body: "PSA is screened at baseline and during ongoing monitoring. Significant changes trigger additional workup.",
                  },
                  {
                    label: "Cardiovascular Markers",
                    body: "Lipid panel and clinical history are reviewed at each cadence.",
                  },
                  {
                    label: "Mood & Sleep",
                    body: "We track subjective response. Protocols are adjusted based on labs and your reported experience.",
                  },
                ].map((s, i) => (
                  <Reveal key={s.label} delay={i * 0.05}>
                    <div className="card p-5">
                      <div className="flex items-start gap-3">
                        <AlertTriangle size={18} className="text-brand-blue mt-1 shrink-0" />
                        <div>
                          <div className="font-display font-bold text-brand-ink">{s.label}</div>
                          <p className="mt-1 text-[14.5px] leading-relaxed text-brand-charcoal/75">{s.body}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* —— Refill requirements —— */}
      <section className="py-20 md:py-24">
        <div className="container-x">
          <div className="rounded-3xl bg-brand-ink text-white p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-mesh opacity-90" aria-hidden="true" />
            <div className="relative grid md:grid-cols-12 gap-10 items-center">
              <div className="md:col-span-7">
                <div
                  className="eyebrow"
                  style={{ color: "#2EAE5E" }}
                >
                  Refill Requirements
                </div>
                <h2 className="h-display text-white text-[32px] md:text-[44px] mt-3">
                  Stay current to keep your therapy on track.
                </h2>
                <p className="mt-4 text-white/80 leading-relaxed">
                  We're built around safe, ongoing care — which means refills require active monitoring.
                </p>
              </div>
              <div className="md:col-span-5 space-y-3">
                {[
                  "Labs current within 6 months",
                  "Annual video visit with provider on file",
                  "Protocol-adherent dosing",
                  "Active patient communication",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-white/8 backdrop-blur-md border border-white/15 px-4 py-3 text-sm flex items-center gap-3"
                  >
                    <CheckCircle2 size={16} className="text-brand-green-light shrink-0" />
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* —— Disclaimer —— */}
      <section className="pb-20">
        <div className="container-x">
          <DisclaimerBlock variant="trt" />
        </div>
      </section>

      <CTASection
        title="Ready to find out if TRT is right for you?"
        subtitle="Schedule a free 15-minute consultation. We'll walk through the process, labs, and what to expect."
      />
    </>
  );
}
