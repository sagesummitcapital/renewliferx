"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQItem({
  question,
  answer,
  defaultOpen = false,
}: {
  question: string;
  answer: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-black/8">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-6 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="font-display font-bold text-[17px] md:text-[19px] text-brand-ink group-hover:text-brand-blue transition-colors">
          {question}
        </span>
        <span
          className={`shrink-0 h-9 w-9 rounded-full border ${
            open ? "border-brand-blue bg-brand-blue text-white" : "border-black/15 text-brand-ink"
          } flex items-center justify-center transition-colors`}
        >
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6 pr-12 text-[15px] leading-relaxed text-brand-charcoal/85">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
