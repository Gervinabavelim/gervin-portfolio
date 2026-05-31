"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import MagneticButton from "./MagneticButton";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      className="px-6 md:px-16 lg:px-24 py-24 md:py-36 border-t border-border"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease }}
        className="grid md:grid-cols-12 gap-8 md:gap-12"
      >
        {/* Left meta column */}
        <div className="md:col-span-3">
          <p className="text-[11px] uppercase tracking-[0.2em] text-muted mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-accent/60" />
            Get in Touch
          </p>
          <p className="text-sm text-muted leading-relaxed">
            Available for freelance and full-time opportunities. Based in Manila, working worldwide.
          </p>
        </div>

        {/* Right content */}
        <div className="md:col-span-9">
          <h2
            className="font-serif font-bold leading-[0.9] tracking-[-0.02em] mb-12"
            style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}
          >
            Let&apos;s build<br />something<span className="text-accent">.</span>
          </h2>

          <div className="flex flex-col sm:flex-row gap-3 mb-16">
            <MagneticButton
              href="mailto:abavelimgervin@gmail.com"
              className="inline-flex items-center gap-3 bg-accent text-white px-7 py-4 text-[11px] font-semibold tracking-[0.15em] uppercase hover:bg-accent-hover transition-colors cursor-pointer rounded-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              abavelimgervin@gmail.com
            </MagneticButton>
            <MagneticButton
              href="https://www.linkedin.com/in/gervin-abavelim-64054918a"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-border text-cream/80 px-7 py-4 text-[11px] font-semibold tracking-[0.15em] uppercase hover:border-accent hover:text-accent transition-colors cursor-pointer rounded-sm"
            >
              LinkedIn
              <span className="text-sm leading-none">↗</span>
            </MagneticButton>
          </div>

          {/* Social row */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6 pt-10 border-t border-border">
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
                className="group flex flex-col gap-1.5 text-cream/80 hover:text-accent transition-colors"
              >
                <span className="text-[11px] uppercase tracking-[0.15em] text-muted">
                  {s.label}
                </span>
                <span className="text-base font-medium flex items-center gap-2">
                  {s.handle}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                    ↗
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="mt-28 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] tracking-[0.1em] text-muted/60">
        <p>© {new Date().getFullYear()} Gervin Abavelim</p>
        <p>Built with Next.js & Framer Motion</p>
      </div>
    </section>
  );
}
