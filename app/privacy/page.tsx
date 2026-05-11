import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Renew Life RX collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle={`Last updated: ${new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}`}
      />

      <section className="pb-24">
        <div className="container-x">
          <article className="max-w-3xl mx-auto prose-custom">
            <p className="text-brand-charcoal/85 leading-relaxed">
              {site.legalEntity}, operating as {site.name} ("we," "us," "our"), respects your privacy
              and is committed to protecting the personal information you share with us. This Privacy
              Policy describes the types of information we collect, how we use it, and the choices
              you have regarding your information.
            </p>

            <h2 className="font-display font-bold text-2xl text-brand-ink mt-10 mb-3">
              Information We Collect
            </h2>
            <p className="text-brand-charcoal/85 leading-relaxed">
              We collect information you voluntarily provide when you contact us, schedule a
              consultation, complete a health questionnaire, or enroll in a program. This may include
              name, email address, phone number, date of birth, medical history, lab results, and
              other information necessary to evaluate eligibility and deliver care.
            </p>

            <h2 className="font-display font-bold text-2xl text-brand-ink mt-10 mb-3">
              How We Use Information
            </h2>
            <p className="text-brand-charcoal/85 leading-relaxed">
              We use your information to provide and improve our services, communicate with you about
              your care, schedule appointments, fulfill prescriptions, comply with legal obligations,
              and protect our patients and staff.
            </p>

            <h2 className="font-display font-bold text-2xl text-brand-ink mt-10 mb-3">
              We Do Not Sell Your Information
            </h2>
            <p className="text-brand-charcoal/85 leading-relaxed">
              We never share, sell, or loan your contact information for any reason. We share
              information only with service providers (such as labs, pharmacies, and payment
              processors) who are contractually obligated to protect it, or where required by law.
            </p>

            <h2 className="font-display font-bold text-2xl text-brand-ink mt-10 mb-3">
              Health Information
            </h2>
            <p className="text-brand-charcoal/85 leading-relaxed">
              Protected Health Information (PHI) is handled in accordance with the Health Insurance
              Portability and Accountability Act (HIPAA) and described separately in our{" "}
              <a href="/hipaa" className="text-brand-blue underline">
                HIPAA Notice of Privacy Practices
              </a>
              .
            </p>

            <h2 className="font-display font-bold text-2xl text-brand-ink mt-10 mb-3">
              Cookies & Analytics
            </h2>
            <p className="text-brand-charcoal/85 leading-relaxed">
              We may use cookies and similar technologies to operate the site, understand usage, and
              improve user experience. You can control cookies through your browser settings.
            </p>

            <h2 className="font-display font-bold text-2xl text-brand-ink mt-10 mb-3">
              Your Choices
            </h2>
            <p className="text-brand-charcoal/85 leading-relaxed">
              You may request access, correction, or deletion of your personal information by
              contacting us at{" "}
              <a href={`mailto:${site.email}`} className="text-brand-blue underline">
                {site.email}
              </a>
              . Some information may be retained as required by law.
            </p>

            <h2 className="font-display font-bold text-2xl text-brand-ink mt-10 mb-3">
              Changes to This Policy
            </h2>
            <p className="text-brand-charcoal/85 leading-relaxed">
              We may update this Privacy Policy periodically. The "Last updated" date at the top
              indicates when changes were last made. Continued use of our services after changes are
              posted constitutes acceptance of the updated policy.
            </p>

            <h2 className="font-display font-bold text-2xl text-brand-ink mt-10 mb-3">Contact Us</h2>
            <p className="text-brand-charcoal/85 leading-relaxed">
              Questions about this policy? Contact us at{" "}
              <a href={`mailto:${site.email}`} className="text-brand-blue underline">
                {site.email}
              </a>{" "}
              or {site.phone}.
            </p>

            <p className="mt-10 text-sm text-brand-charcoal/60 italic">
              This Privacy Policy is provided as a starting template and should be reviewed by legal
              counsel before publication.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
