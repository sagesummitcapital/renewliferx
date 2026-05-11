import { ShieldAlert } from "lucide-react";

export default function DisclaimerBlock({
  variant = "default",
}: {
  variant?: "default" | "trt";
}) {
  return (
    <div className="rounded-2xl border border-black/8 bg-brand-mist/60 p-6 md:p-7">
      <div className="flex items-center gap-3 mb-3">
        <div className="h-9 w-9 rounded-full bg-white border border-black/8 flex items-center justify-center text-brand-blue">
          <ShieldAlert size={18} />
        </div>
        <h3 className="font-display font-bold text-[15px] uppercase tracking-[0.18em] text-brand-charcoal">
          Important Information
        </h3>
      </div>
      <div className="text-[13.5px] leading-relaxed text-brand-charcoal/80 space-y-2">
        <p>
          Treatment is not guaranteed. Only a licensed physician can diagnose and prescribe hormones.
          No prescription will be provided unless a clinical need exists based on required lab work,
          physician consultation, physical examination, and current medical history.
        </p>
        {variant === "trt" && (
          <p>
            Continued therapy requires ongoing monitoring including periodic blood work and an annual
            video visit with your provider. Refills are contingent on adherence to monitoring requirements.
          </p>
        )}
        <p>
          Content is educational and is not intended to be, nor should it be construed as, medical
          advice. Individual results vary. If you are experiencing a medical emergency, call 911.
        </p>
      </div>
    </div>
  );
}
