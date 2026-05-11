"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/cn";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Header is "solid" (white blur, dark text) any time the user has scrolled, OR they're on a non-home page.
  // Only the home page at scroll-top uses the transparent/white-text treatment over the dark hero.
  const solid = scrolled || !isHome;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        solid
          ? "bg-white/85 backdrop-blur-md border-b border-black/5 shadow-soft"
          : "bg-transparent"
      )}
    >
      <div className="container-x flex items-center justify-between h-[72px]">
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label={site.name}>
          <Image
            src={solid ? "/brand/logo.png" : "/brand/logo-dark-bg.png"}
            alt={site.name}
            width={220}
            height={56}
            priority
            className="h-9 w-auto md:h-10"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((item) => {
            if (!("children" in item) || !item.children) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-[14px] font-semibold transition-colors hover:text-brand-blue",
                    solid ? "text-brand-charcoal" : "text-white/90 hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              );
            }
            return (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setTreatmentsOpen(true)}
                onMouseLeave={() => setTreatmentsOpen(false)}
              >
                <button
                  className={cn(
                    "flex items-center gap-1 text-[14px] font-semibold transition-colors hover:text-brand-blue",
                    solid ? "text-brand-charcoal" : "text-white/90 hover:text-white"
                  )}
                  aria-expanded={treatmentsOpen}
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown size={14} className={cn("transition-transform", treatmentsOpen && "rotate-180")} />
                </button>
                <div
                  className={cn(
                    "absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200",
                    treatmentsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"
                  )}
                >
                  <div className="bg-white rounded-2xl shadow-lift border border-black/5 p-2 min-w-[280px]">
                    <Link
                      href={item.href}
                      className="block px-4 py-3 rounded-xl hover:bg-brand-mist transition-colors"
                    >
                      <div className="text-[13px] font-semibold text-brand-blue uppercase tracking-wider">
                        All Treatments
                      </div>
                      <div className="text-[13px] text-brand-charcoal/70">Overview of programs</div>
                    </Link>
                    <div className="h-px bg-black/5 my-1" />
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-3 rounded-xl hover:bg-brand-mist transition-colors text-[14px] font-medium text-brand-ink"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        {/* Right CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={site.phoneHref}
            className={cn(
              "flex items-center gap-2 text-[13px] font-semibold transition-colors",
              solid ? "text-brand-charcoal hover:text-brand-blue" : "text-white/90 hover:text-white"
            )}
          >
            <Phone size={14} />
            {site.phone}
          </a>
          <Link href="/schedule-a-call" className="btn btn-primary">
            Schedule a Call
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          className={cn(
            "lg:hidden p-2 -mr-2 transition-colors",
            solid ? "text-brand-ink" : "text-white"
          )}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 top-[72px] bottom-0 bg-white transition-transform duration-300 overflow-y-auto",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="container-x py-6">
          <nav className="flex flex-col">
            {nav.map((item) => (
              <div key={item.href} className="border-b border-black/5">
                <Link
                  href={item.href}
                  className="flex items-center justify-between py-4 text-base font-semibold text-brand-ink"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
                {"children" in item && item.children && (
                  <div className="pb-3 -mt-2">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        onClick={() => setOpen(false)}
                        className="block py-2 pl-4 text-sm text-brand-charcoal/80"
                      >
                        — {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="/schedule-a-call"
              onClick={() => setOpen(false)}
              className="btn btn-primary justify-center"
            >
              Schedule a Call
            </Link>
            <a href={site.phoneHref} className="btn btn-ghost justify-center">
              <Phone size={16} /> {site.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
