import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FAQItem from "@/components/FAQItem";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Renew Life RX — labs, eligibility, monitoring, costs, timelines, and what to expect from hormone optimization, weight loss, and peptide therapy.",
};

const faqs = [
  {
    section: "Getting Started",
    items: [
      {
        q: "Do I need labs before starting any treatment?",
        a: "Yes. Comprehensive lab work is required before starting any therapy. This ensures your current hormone levels and overall health are accurately assessed so we can develop a program that's both safe and effective for your needs.",
      },
      {
        q: "Can I speak with a provider before enrolling?",
        a: "Absolutely. Your free 15-minute consultation is built for exactly that — to answer questions and review your options with no commitment. Just call or schedule online.",
      },
      {
        q: "How long does it take to get started?",
        a: "Most patients complete intake and labs in the first week, then begin therapy shortly after — once your provider has reviewed your results.",
      },
      {
        q: "Is this fully telehealth, or do I need to come in?",
        a: "Renew Life RX operates as a telehealth-based clinic. Labs are completed at your local LabCorp; everything else — consultation, plan review, and follow-up — happens by phone or video.",
      },
    ],
  },
  {
    section: "Treatment & Results",
    items: [
      {
        q: "How fast will I notice changes?",
        a: "Many patients report increased energy, better mood, and enhanced focus within 4–6 weeks. Body composition and other physical changes typically follow over the next 12–16 weeks.",
      },
      {
        q: "How is medication delivered?",
        a: "Once your plan is approved and payment is complete, your medication is fulfilled by a U.S.-based pharmacy and shipped directly to you.",
      },
      {
        q: "What if my dosing needs to change?",
        a: "It often does. That's why we run follow-up labs and check in regularly — your provider adjusts dosing based on your labs and your reported response.",
      },
      {
        q: "Are results guaranteed?",
        a: "No. Treatment is not guaranteed. Outcomes depend on your starting point, adherence, and lifestyle. Individual results vary.",
      },
    ],
  },
  {
    section: "Eligibility & Safety",
    items: [
      {
        q: "Who is not a good candidate for TRT?",
        a: "TRT is not initiated when PSA is ≥ 3.0, or in patients with active prostate or breast cancer, untreated cardiovascular disease, or other contraindications identified by your provider.",
      },
      {
        q: "What about fertility?",
        a: "Traditional TRT can suppress fertility. Patients prioritizing fertility preservation may be candidates for alternative protocols such as enclomiphene or HCG. Discuss this openly during your consultation.",
      },
      {
        q: "Will my insurance cover this?",
        a: "We operate as a cash-pay telehealth clinic. We don't bill insurance. Our pricing is transparent and discussed during your consultation.",
      },
    ],
  },
  {
    section: "Ongoing Care",
    items: [
      {
        q: "How often do I need labs?",
        a: "Baseline labs before starting, follow-up labs at 90 days, then ongoing labs every 6 months minimum. An annual video visit with your provider is required to continue prescribing.",
      },
      {
        q: "What if I need to pause therapy?",
        a: "Just let us know. We'll work with you and document the change in your record. You can resume therapy when you're ready, with appropriate labs.",
      },
      {
        q: "How do I reach my provider or coach?",
        a: "By phone, email, or our patient portal. We respond promptly during business hours.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Answers, before you ask.
          </>
        }
        subtitle="Don't see your question? Schedule a free consultation and we'll walk you through it."
      />

      <section className="py-16 md:py-20 bg-section-soft">
        <div className="container-x">
          <div className="max-w-3xl mx-auto">
            {faqs.map((group, gi) => (
              <Reveal key={group.section} delay={gi * 0.05}>
                <div className="mb-12">
                  <h2 className="eyebrow mb-1">{group.section}</h2>
                  <div className="border-t border-black/12">
                    {group.items.map((item, i) => (
                      <FAQItem key={item.q} question={item.q} answer={<p>{item.a}</p>} defaultOpen={gi === 0 && i === 0} />
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Still have questions?" subtitle="Schedule a free 15-minute consultation. We'll answer them in plain English." />
    </>
  );
}
