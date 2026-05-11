"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, ShieldCheck, FlaskConical, Stethoscope } from "lucide-react";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-brand-ink">
      {/* —— Poster image (always visible — replace with /public/hero.mp4 to swap in motion) —— */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/hero-poster.jpg)" }}
        aria-hidden="true"
      />

      {/* —— Optional video layer (drop /public/hero.mp4 to activate) —— */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-poster.jpg"
        aria-hidden="true"
      >
        <source src="/hero.mp4" type="video/mp4" />
        <source src="/hero.webm" type="video/webm" />
      </video>

      {/* —— Animated rippling ocean (only in lower water area, below horizon) —— */}
      <svg
        className="absolute inset-x-0 bottom-0 w-full h-[35%] pointer-events-none"
        viewBox="0 0 1600 350"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="waterFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0E1421" stopOpacity="0" />
            <stop offset="100%" stopColor="#0E1421" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Ripple bands — staggered horizontal motion creates ocean shimmer. All bands sit in the water area only. */}
        {[
          { y: 50, opacity: 0.18, dur: 11, amp: 22, stroke: "#A8D5C0" },
          { y: 95, opacity: 0.15, dur: 13, amp: 28, stroke: "#7FA8C8" },
          { y: 140, opacity: 0.12, dur: 10, amp: 32, stroke: "#FFFFFF" },
          { y: 185, opacity: 0.1, dur: 14, amp: 36, stroke: "#5A7BA0" },
          { y: 230, opacity: 0.08, dur: 12, amp: 40, stroke: "#FFFFFF" },
          { y: 280, opacity: 0.06, dur: 15, amp: 44, stroke: "#5A7BA0" },
        ].map((r, i) => (
          <motion.path
            key={i}
            d={`M -100 ${r.y} Q 400 ${r.y - r.amp} 800 ${r.y} T 1700 ${r.y}`}
            stroke={r.stroke}
            strokeOpacity={r.opacity}
            strokeWidth={1.5}
            fill="none"
            animate={{ x: [0, -60, 0] }}
            transition={{ duration: r.dur, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        <rect x="0" y="0" width="1600" height="350" fill="url(#waterFade)" />
      </svg>

      {/* —— Glowing sun bloom enhancer (boosts the sunrise's visual presence) —— */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: "8%",
          bottom: "30%",
          width: "55vw",
          height: "55vw",
          maxWidth: "900px",
          maxHeight: "900px",
          background:
            "radial-gradient(circle, rgba(255,210,150,0.55) 0%, rgba(255,180,110,0.30) 22%, rgba(255,150,80,0.12) 45%, rgba(255,150,80,0) 70%)",
          mixBlendMode: "screen",
        }}
        aria-hidden="true"
      />

      {/* —— Text-side darkening: only darkens left half so the sunrise stays visible —— */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(95deg, rgba(14,20,33,0.85) 0%, rgba(14,20,33,0.55) 35%, rgba(14,20,33,0.15) 60%, rgba(14,20,33,0) 80%)",
        }}
        aria-hidden="true"
      />

      {/* —— Bottom anchor: subtle dark fade at the very bottom for footer transition —— */}
      <div
        className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(14,20,33,0) 0%, rgba(14,20,33,0.5) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="bg-noise" />

      {/* —— Content —— */}
      <div className="relative z-10 container-x flex flex-col justify-center min-h-[92vh] py-32">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2 self-start rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-1.5 mb-6 text-[11px] font-semibold tracking-[0.18em] uppercase text-white"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-green-light animate-pulse" />
          Weight Loss • Hormone • Peptide Therapy
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="h-display text-white text-[44px] sm:text-[64px] md:text-[84px] lg:text-[100px] max-w-5xl"
        >
          Personalized Care.
          <br />
          <span className="bg-gradient-to-r from-white via-white to-brand-blue-glow bg-clip-text text-transparent">
            Real Results.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-6 max-w-2xl text-white/85 text-lg md:text-xl leading-relaxed"
        >
          Medically supervised hormone optimization, weight loss, and peptide therapy — built on your
          lab work and reviewed by a physician. Look, feel, and live your best.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.95 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <Link href="/schedule-a-call" className="btn btn-primary text-base px-7 py-4">
            Schedule a Call
            <ArrowRight size={18} />
          </Link>
          <Link href="/how-it-works" className="btn btn-ghost-light text-base px-7 py-4">
            How It Works
          </Link>
          <a
            href={site.phoneHref}
            className="hidden sm:inline-flex items-center gap-2 ml-2 text-white/90 text-sm font-semibold hover:text-white"
          >
            <Phone size={16} className="text-brand-green-light" />
            {site.phone}
          </a>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 max-w-3xl"
        >
          {[
            { icon: Stethoscope, label: "Physician consultation" },
            { icon: FlaskConical, label: "Lab-based protocols" },
            { icon: ShieldCheck, label: "Ongoing monitoring" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-2xl bg-white/8 backdrop-blur-md border border-white/15 px-4 py-3 text-sm text-white/90"
            >
              <Icon size={18} className="text-brand-green-light shrink-0" />
              <span className="font-semibold">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="h-9 w-5 rounded-full border border-white/40 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1 rounded-full bg-white/80"
          />
        </div>
      </motion.div>
    </section>
  );
}
