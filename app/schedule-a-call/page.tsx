import type { Metadata } from "next";
import { Phone, Mail, Clock, ShieldCheck } from "lucide-react";
import PageHero from "@/components/PageHero";
import HubSpotForm from "@/components/HubSpotForm";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Schedule a Call",
  description:
    "Book your free 15-minute consultation with Renew Life RX. No commitment. We'll walk through your goals, the process, and what to expect.",
};

export default function SchedulePage() {
  return (
    <>
      <PageHero
        eyebrow="Schedule a Call"
        title={
          <>
            Free 15-minute consultation.
            <br />
            <span className="text-brand-blue">No commitment.</span>
          </>
        }
        subtitle="Tell us a little about yourself. We'll get in touch to walk through the process and answer your questions."
      />

      <section className="pb-24 pt-4 bg-section-tint-blue">
        <div className="container-x">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14">
            <div className="md:col-span-5 space-y-6">
              <Reveal>
                <div className="card p-6">
                  <h3 className="font-display font-bold text-lg text-brand-ink">What to expect on the call</h3>
                  <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-brand-charcoal/85">
                    <li className="flex gap-2.5">
                      <Clock size={16} className="text-brand-blue mt-1 shrink-0" />
                      <span>15 minutes, by phone</span>
                    </li>
                    <li className="flex gap-2.5">
                      <ShieldCheck size={16} className="text-brand-blue mt-1 shrink-0" />
                      <span>No high-pressure sales — we're here to answer questions</span>
                    </li>
                    <li className="flex gap-2.5">
                      <Phone size={16} className="text-brand-blue mt-1 shrink-0" />
                      <span>Walk through goals, labs, and pricing in plain English</span>
                    </li>
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="card p-6">
                  <h3 className="font-display font-bold text-lg text-brand-ink">Prefer to call right now?</h3>
                  <a
                    href={site.phoneHref}
                    className="mt-3 flex items-center gap-3 text-brand-blue font-semibold text-lg hover:underline"
                  >
                    <Phone size={18} />
                    {site.phone}
                  </a>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-2 flex items-center gap-3 text-brand-charcoal/85 font-medium hover:text-brand-blue"
                  >
                    <Mail size={16} />
                    {site.email}
                  </a>
                  <p className="mt-4 text-xs text-brand-charcoal/65 leading-relaxed">
                    If you receive our voicemail, it simply means we're helping other callers, or it's after business hours. We'll get back to you.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="rounded-2xl bg-brand-mist/70 p-5 text-xs text-brand-charcoal/70 leading-relaxed">
                  We never share, sell, or loan your contact information for any reason. Your privacy is our priority.
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-7">
              <Reveal>
                <div className="card p-7 md:p-9">
                  <h2 className="font-display font-bold text-2xl md:text-3xl text-brand-ink">
                    Tell us about you
                  </h2>
                  <p className="mt-2 text-brand-charcoal/70 text-[15px]">
                    We'll be in touch within one business day.
                  </p>
                  <div className="mt-6">
                    <HubSpotForm />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
