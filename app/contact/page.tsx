import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import HubSpotForm from "@/components/HubSpotForm";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Renew Life RX",
  description:
    "Get in touch with Renew Life RX. Call, email, or send a message — we'll respond within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            We're here to help.
            <br />
            <span className="text-brand-blue">Let's talk.</span>
          </>
        }
        subtitle="Questions, feedback, or ready to get started — reach out the way that works best for you."
      />

      <section className="pb-24 pt-4 bg-section-tint-green">
        <div className="container-x">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14">
            <div className="md:col-span-5 space-y-4">
              <Reveal>
                <a
                  href={site.phoneHref}
                  className="card p-6 flex items-start gap-4 hover:border-brand-blue/30"
                >
                  <span className="h-11 w-11 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </span>
                  <div>
                    <div className="eyebrow">Phone</div>
                    <div className="mt-1 font-display font-bold text-xl text-brand-ink">
                      {site.phone}
                    </div>
                    <p className="mt-1 text-[14px] text-brand-charcoal/70">
                      Mon–Fri, business hours
                    </p>
                  </div>
                </a>
              </Reveal>

              <Reveal delay={0.06}>
                <a
                  href={`mailto:${site.email}`}
                  className="card p-6 flex items-start gap-4 hover:border-brand-blue/30"
                >
                  <span className="h-11 w-11 rounded-xl bg-brand-green-light/12 text-brand-green flex items-center justify-center shrink-0">
                    <Mail size={20} />
                  </span>
                  <div>
                    <div className="eyebrow">Email</div>
                    <div className="mt-1 font-display font-bold text-xl text-brand-ink">
                      {site.email}
                    </div>
                    <p className="mt-1 text-[14px] text-brand-charcoal/70">
                      We respond within one business day
                    </p>
                  </div>
                </a>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="card p-6 flex items-start gap-4">
                  <span className="h-11 w-11 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </span>
                  <div>
                    <div className="eyebrow">Address</div>
                    <div className="mt-1 font-display font-bold text-base text-brand-ink leading-snug">
                      {site.address.street}
                      <br />
                      {site.address.city}, {site.address.state} {site.address.zip}
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="card p-6 flex items-start gap-4">
                  <span className="h-11 w-11 rounded-xl bg-brand-mist text-brand-charcoal flex items-center justify-center shrink-0">
                    <Clock size={20} />
                  </span>
                  <div>
                    <div className="eyebrow">After Hours</div>
                    <p className="mt-1 text-[14px] text-brand-charcoal/80 leading-relaxed">
                      If you receive our voicemail, leave a message — we'll get back to you. For
                      medical emergencies, call 911 or visit your nearest ER.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-7">
              <Reveal>
                <div className="card p-7 md:p-9">
                  <h2 className="font-display font-bold text-2xl md:text-3xl text-brand-ink">
                    Send us a message
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
