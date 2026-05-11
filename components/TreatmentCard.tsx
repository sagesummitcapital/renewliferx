import Link from "next/link";
import { ArrowUpRight, LucideIcon } from "lucide-react";

export default function TreatmentCard({
  href,
  icon: Icon,
  title,
  description,
  accent = "blue",
}: {
  href: string;
  icon: LucideIcon;
  title: string;
  description: string;
  accent?: "blue" | "green";
}) {
  const accentBg = accent === "blue" ? "bg-brand-blue/8" : "bg-brand-green-light/12";
  const accentText = accent === "blue" ? "text-brand-blue" : "text-brand-green";
  return (
    <Link href={href} className="card group p-7 flex flex-col h-full">
      <div className={`w-12 h-12 rounded-xl ${accentBg} ${accentText} flex items-center justify-center mb-5`}>
        <Icon size={22} strokeWidth={1.8} />
      </div>
      <h3 className="font-display font-bold text-[22px] text-brand-ink leading-tight">
        {title}
      </h3>
      <p className="mt-3 text-[15px] leading-relaxed text-brand-charcoal/75">{description}</p>
      <div className={`mt-6 flex items-center gap-2 text-sm font-semibold ${accentText}`}>
        <span className="link-underline">Learn more</span>
        <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Link>
  );
}
