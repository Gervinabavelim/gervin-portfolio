"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    q: "What technologies do you specialize in?",
    a: "I work primarily with TypeScript, React, Next.js, Node.js, and Python. I'm experienced with databases like PostgreSQL and tools like Prisma, Docker, and various CI/CD platforms.",
  },
  {
    q: "Are you available for freelance work?",
    a: "Yes! I'm open to freelance projects, contract work, and full-time opportunities. Feel free to reach out to discuss your project needs.",
  },
  {
    q: "What is your development process?",
    a: "I follow an iterative approach: understand requirements, design the architecture, build incrementally with continuous testing, and deploy with monitoring. Communication is key throughout.",
  },
  {
    q: "Do you work with teams or solo?",
    a: "Both! I'm comfortable working independently on projects end-to-end, and I thrive in collaborative team environments using Git workflows, code reviews, and agile methodologies.",
  },
  {
    q: "How can I get in touch?",
    a: "You can email me at abavelimgervin@gmail.com or connect with me on LinkedIn. I typically respond within 24 hours.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 bg-bg-alt">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-3">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <span className="font-semibold text-primary text-sm pr-4">
                  {faq.q}
                </span>
                <motion.svg
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-5 h-5 text-muted flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-muted text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
