"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  label: string;
  title: string;
  description: string;
  bullets: string[];
  mockup: ReactNode;
  reverse?: boolean;
  bgAlt?: boolean;
};

export default function FeatureSection({
  label,
  title,
  description,
  bullets,
  mockup,
  reverse = false,
  bgAlt = false,
}: Props) {
  return (
    <section className={`py-20 md:py-28 ${bgAlt ? "bg-bg-alt" : "bg-bg"}`}>
      <div
        className={`max-w-6xl mx-auto px-6 md:px-12 flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } items-center gap-12 md:gap-20`}
      >
        <motion.div
          initial={{ opacity: 0, x: reverse ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 space-y-6"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent">
            {label}
          </span>
          <h3 className="text-3xl md:text-4xl font-extrabold text-primary leading-tight">
            {title}
          </h3>
          <p className="text-muted leading-relaxed">{description}</p>
          <ul className="space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-muted">
                <svg
                  className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: reverse ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="flex-1 flex justify-center"
        >
          <div className="animate-float">{mockup}</div>
        </motion.div>
      </div>
    </section>
  );
}
