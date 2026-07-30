"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      className="px-8 md:px-16 lg:px-24 py-24 md:py-32 border-t border-border"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease }}
        className="max-w-3xl"
      >
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted mb-8">
          Get in Touch
        </p>

        <h2
          className="font-black leading-[0.9] tracking-[-0.03em] mb-6"
          style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}
        >
          Let&apos;s build something<span className="text-accent">.</span>
        </h2>

        <p className="text-text/60 text-base md:text-lg leading-relaxed mb-10 max-w-lg">
          Available for freelance and full-time opportunities. Based in Manila, working worldwide.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-16">
          <a
            href="mailto:abavelimgervin@gmail.com"
            className="inline-flex items-center gap-3 bg-text text-bg px-6 py-3.5 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-text/85 transition-colors rounded-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            abavelimgervin@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/gervin-abavelim-64054918a"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-text/20 text-text px-6 py-3.5 text-[11px] font-bold tracking-[0.2em] uppercase hover:border-text/50 transition-colors rounded-sm"
          >
            LinkedIn
            <span className="text-sm leading-none">↗</span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6 pt-8 border-t border-border">
          {[
            {
              label: "GitHub",
              handle: "Gervinabavelim",
              href: "https://github.com/Gervinabavelim",
            },
            {
              label: "LinkedIn",
              handle: "gervin-abavelim",
              href: "https://www.linkedin.com/in/gervin-abavelim-64054918a",
            },
            {
              label: "Email",
              handle: "abavelimgervin",
              href: "mailto:abavelimgervin@gmail.com",
            },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group flex flex-col gap-1.5 text-text hover:text-accent transition-colors"
            >
              <span className="text-[11px] uppercase tracking-[0.2em] text-muted">
                {s.label}
              </span>
              <span className="text-base font-medium flex items-center gap-2">
                {s.handle}
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-sm">↗</span>
              </span>
            </a>
          ))}
        </div>
      </motion.div>

      <div className="mt-24 pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] tracking-[0.1em] text-muted">
        <p>© {new Date().getFullYear()} Gervin Abavelim</p>
        <p>Built with Next.js & Framer Motion</p>
      </div>
    </section>
  );
}
