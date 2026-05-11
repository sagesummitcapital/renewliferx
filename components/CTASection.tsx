import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { site } from "@/lib/site";
import Reveal from "./Reveal";

export default function CTASection({
  title = "Ready to feel like yourself again?",
  subtitle = "Free 15-minute consultation. No commitment. No pressure.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-mesh animate-gradientShift" aria-hidden="true" />
      <div className="bg-noise" />

      <div className="relative container-x">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <div
              className="eyebrow"
              style={{ color: "#2EAE5E" }}
            >
              Get Started
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="h-display text-white text-[36px] sm:text-[48px] md:text-[60px] mt-3">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-10 flex flex-wrap justify-center items-center gap-3">
              <Link href="/schedule-a-call" className="btn btn-primary text-base px-7 py-4">
                Schedule a Call
                <ArrowRight size={18} />
              </Link>
              <a href={site.phoneHref} className="btn btn-ghost-light text-base px-7 py-4">
                <Phone size={16} />
                Call {site.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
