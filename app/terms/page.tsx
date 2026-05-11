import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms governing your use of the Renew Life RX website and services.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        subtitle={`Last updated: ${new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}`}
      />

      <section className="pb-24">
        <div className="container-x">
          <article className="max-w-3xl mx-auto">
            <p className="text-brand-charcoal/85 leading-relaxed">
              These Terms of Use ("Terms") govern your access to and use of the {site.name} website
              (the "Site") operated by {site.legalEntity}. By accessing the Site, you agree to be
              bound by these Terms.
            </p>

            <h2 className="font-display font-bold text-2xl text-brand-ink mt-10 mb-3">
              Educational Content
            </h2>
            <p className="text-brand-charcoal/85 leading-relaxed">
              Information on the Site is provided for educational purposes only and is not intended
              as, nor should it be construed as, medical advice, diagnosis, or treatment. Always
              seek the advice of a qualified health provider with any questions you may have
              regarding a medical condition.
            </p>

            <h2 className="font-display font-bold text-2xl text-brand-ink mt-10 mb-3">
              No Guarantee of Treatment
            </h2>
            <p className="text-brand-charcoal/85 leading-relaxed">
              Treatment is not guaranteed. Only a licensed physician can diagnose and prescribe
              hormones. No prescription will be provided unless a clinical need exists based on
              required lab work, physician consultation, physical examination, and current medical
              history. Agreeing to lab work does not automatically equate to clinical necessity or a
              resulting prescription.
            </p>

            <h2 className="font-display font-bold text-2xl text-brand-ink mt-10 mb-3">
              No Doctor-Patient Relationship
            </h2>
            <p className="text-brand-charcoal/85 leading-relaxed">
              Use of the Site does not create a doctor-patient relationship. A doctor-patient
              relationship is established only through formal enrollment, completion of intake, and
              direct communication with a licensed provider.
            </p>

            <h2 className="font-display font-bold text-2xl text-brand-ink mt-10 mb-3">
              Emergencies
            </h2>
            <p className="text-brand-charcoal/85 leading-relaxed">
              If you are experiencing a medical emergency, call 911 or go to the nearest emergency
              room. Do not use this Site to seek emergency care.
            </p>

            <h2 className="font-display font-bold text-2xl text-brand-ink mt-10 mb-3">
              Intellectual Property
            </h2>
            <p className="text-brand-charcoal/85 leading-relaxed">
              All content on the Site — including text, graphics, logos, and images — is owned by{" "}
              {site.legalEntity} or its licensors and is protected by intellectual property laws.
              You may not reproduce, distribute, or create derivative works without prior written
              permission.
            </p>

            <h2 className="font-display font-bold text-2xl text-brand-ink mt-10 mb-3">
              Limitation of Liability
            </h2>
            <p className="text-brand-charcoal/85 leading-relaxed">
              To the maximum extent permitted by law, {site.legalEntity} is not liable for any
              indirect, incidental, special, or consequential damages arising from your use of the
              Site or services. Individual results vary.
            </p>

            <h2 className="font-display font-bold text-2xl text-brand-ink mt-10 mb-3">
              Governing Law
            </h2>
            <p className="text-brand-charcoal/85 leading-relaxed">
              These Terms are governed by the laws of the State of Arizona, without regard to its
              conflict-of-laws principles.
            </p>

            <h2 className="font-display font-bold text-2xl text-brand-ink mt-10 mb-3">Contact</h2>
            <p className="text-brand-charcoal/85 leading-relaxed">
              Questions about these Terms? Contact us at{" "}
              <a href={`mailto:${site.email}`} className="text-brand-blue underline">
                {site.email}
              </a>{" "}
              or {site.phone}.
            </p>

            <p className="mt-10 text-sm text-brand-charcoal/60 italic">
              These Terms are provided as a starting template and should be reviewed by qualified
              legal counsel before publication.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
