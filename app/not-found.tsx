import Link from "next/link";
import { ArrowLeft, Phone } from "lucide-react";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 overflow-hidden bg-mesh-light">
      <div className="absolute inset-0 bg-grid opacity-50" aria-hidden="true" />
      <div className="relative container-x">
        <div className="max-w-2xl">
          <div className="eyebrow">404 — Page not found</div>
          <h1 className="h-display text-brand-ink text-[48px] sm:text-[68px] md:text-[88px] mt-3 leading-[1.02]">
            We couldn't find that page.
          </h1>
          <p className="mt-5 text-lg text-brand-charcoal/75 leading-relaxed">
            The page may have moved, been renamed, or never existed. Let's get you back on track.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/" className="btn btn-primary">
              <ArrowLeft size={16} />
              Back to home
            </Link>
            <a href={site.phoneHref} className="btn btn-ghost">
              <Phone size={16} />
              Call {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
