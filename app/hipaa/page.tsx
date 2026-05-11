import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "HIPAA Notice of Privacy Practices",
  description:
    "Renew Life RX HIPAA Notice of Privacy Practices — how we may use and disclose your protected health information.",
};

export default function HIPAAPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="HIPAA Notice of Privacy Practices"
        subtitle="This notice describes how medical information about you may be used and disclosed and how you can get access to this information."
      />

      <section className="pb-24">
        <div className="container-x">
          <article className="max-w-3xl mx-auto">
            <p className="text-brand-charcoal/85 leading-relaxed">
              {site.legalEntity} d/b/a {site.name} is committed to safeguarding your protected health
              information ("PHI") in accordance with the Health Insurance Portability and
              Accountability Act ("HIPAA").
            </p>

            <h2 className="font-display font-bold text-2xl text-brand-ink mt-10 mb-3">
              Uses & Disclosures of PHI
            </h2>
            <p className="text-brand-charcoal/85 leading-relaxed">
              We may use and disclose your PHI for treatment, payment, and health care operations.
              For example, we may share your information with the laboratory performing your blood
              work, or with the pharmacy fulfilling your prescription.
            </p>

            <h2 className="font-display font-bold text-2xl text-brand-ink mt-10 mb-3">Your Rights</h2>
            <ul className="text-brand-charcoal/85 leading-relaxed space-y-2 list-disc pl-6">
              <li>The right to inspect and copy your PHI.</li>
              <li>The right to request an amendment to your PHI.</li>
              <li>The right to request restrictions on certain uses and disclosures.</li>
              <li>The right to request confidential communications.</li>
              <li>The right to receive an accounting of certain disclosures.</li>
              <li>The right to receive a paper copy of this notice.</li>
              <li>The right to file a complaint without retaliation.</li>
            </ul>

            <h2 className="font-display font-bold text-2xl text-brand-ink mt-10 mb-3">
              Our Responsibilities
            </h2>
            <p className="text-brand-charcoal/85 leading-relaxed">
              We are required by law to maintain the privacy of your PHI, provide you with this
              notice, and abide by the terms of the notice currently in effect. We will notify you
              promptly if a breach occurs that may have compromised the privacy of your information.
            </p>

            <h2 className="font-display font-bold text-2xl text-brand-ink mt-10 mb-3">
              Filing a Complaint
            </h2>
            <p className="text-brand-charcoal/85 leading-relaxed">
              If you believe your privacy rights have been violated, you may file a complaint with us
              at{" "}
              <a href={`mailto:${site.email}`} className="text-brand-blue underline">
                {site.email}
              </a>{" "}
              or with the U.S. Department of Health and Human Services Office for Civil Rights.
            </p>

            <h2 className="font-display font-bold text-2xl text-brand-ink mt-10 mb-3">Contact</h2>
            <p className="text-brand-charcoal/85 leading-relaxed">
              {site.name} • {site.address.full}
              <br />
              Phone: {site.phone} • Email:{" "}
              <a href={`mailto:${site.email}`} className="text-brand-blue underline">
                {site.email}
              </a>
            </p>

            <p className="mt-10 text-sm text-brand-charcoal/60 italic">
              This notice is provided as a starting template and should be reviewed by qualified
              legal counsel before publication.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
