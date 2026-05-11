import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative bg-brand-ink text-white/80 mt-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="container-x pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <Image
              src="/brand/logo-dark-bg.png"
              alt={site.name}
              width={220}
              height={56}
              className="h-10 w-auto mb-5"
            />
            <p className="text-sm leading-relaxed text-white/70 max-w-sm">
              Medically supervised hormone optimization, weight loss, and peptide therapy. Lab-based,
              physician-reviewed treatment plans with ongoing monitoring.
            </p>

            <ul className="mt-6 space-y-2.5 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 text-brand-green-light shrink-0" />
                <span>{site.address.full}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-brand-green-light shrink-0" />
                <a href={site.phoneHref} className="hover:text-white">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-brand-green-light shrink-0" />
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-display font-bold text-white text-[13px] uppercase tracking-[0.18em] mb-4">
              Programs
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/treatments/trt-hrt-men" className="hover:text-white">Testosterone / HRT</Link></li>
              <li><Link href="/treatments/womens-hormone-optimization" className="hover:text-white">Women's Hormones</Link></li>
              <li><Link href="/treatments/medical-weight-loss" className="hover:text-white">Medical Weight Loss</Link></li>
              <li><Link href="/treatments/peptide-therapy" className="hover:text-white">Peptide Therapy</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-display font-bold text-white text-[13px] uppercase tracking-[0.18em] mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/how-it-works" className="hover:text-white">How It Works</Link></li>
              <li><Link href="/why-renew-life" className="hover:text-white">Why Renew Life</Link></li>
              <li><Link href="/blood-work" className="hover:text-white">Blood Work</Link></li>
              <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="font-display font-bold text-white text-[13px] uppercase tracking-[0.18em] mb-4">
              Get Started
            </h3>
            <p className="text-sm text-white/70 mb-4">
              Free 15-minute consultation. No commitment.
            </p>
            <Link href="/schedule-a-call" className="btn btn-primary">
              Schedule a Call
            </Link>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 text-xs text-white/60 leading-relaxed space-y-3">
          <p>
            <strong className="text-white/85">Medical disclaimer.</strong> Treatment is not guaranteed.
            Only a licensed physician can diagnose and prescribe hormones. No prescription will be provided
            unless a clinical need exists based on required lab work, physician consultation, physical
            examination, and current medical history. Agreeing to lab work does not automatically equate
            to clinical necessity or a resulting prescription. Content on this site is educational and is
            not intended to be, nor should it be construed as, medical advice. Individual results vary.
          </p>
          <p>
            <strong className="text-white/85">Emergency.</strong> If you are experiencing a medical
            emergency, call 911 or go to your nearest emergency room. Do not use this site to seek emergency care.
          </p>
        </div>

        <div className="mt-8 flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-xs text-white/55">
          <div>
            © {new Date().getFullYear()} {site.legalEntity}. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/hipaa" className="hover:text-white">HIPAA Notice</Link>
            <Link href="/terms" className="hover:text-white">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
