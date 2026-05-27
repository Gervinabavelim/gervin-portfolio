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
      className="px-6 md:px-12 py-24 md:py-32 border-t border-border"
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
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />
            Contact / 002
          </p>
          <p className="text-xs font-mono text-muted leading-relaxed">
            Available for select freelance and full-time roles. Based in Manila, working worldwide.
          </p>
        </div>

        {/* Right content */}
        <div className="md:col-span-9">
          <h2
            className="font-black uppercase leading-[0.85] tracking-[-0.03em] mb-10"
            style={{ fontSize: "clamp(2.75rem, 9vw, 8rem)" }}
          >
            Let&apos;s build
            <br />
            something<span className="text-accent">.</span>
          </h2>

          <div className="flex flex-col sm:flex-row gap-3 mb-16">
            <MagneticButton
              href="mailto:abavelimgervin@gmail.com"
              className="inline-flex items-center gap-3 bg-cream text-bg px-6 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-accent hover:text-cream transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              abavelimgervin@gmail.com
            </MagneticButton>
            <MagneticButton
              href="https://www.linkedin.com/in/gervin-abavelim-64054918a"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-border text-cream px-6 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:border-accent hover:text-accent transition-colors cursor-pointer"
            >
              LinkedIn
              <span className="text-base leading-none">↗</span>
            </MagneticButton>
          </div>

          {/* Social row */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4 pt-8 border-t border-border">
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
                className="group flex flex-col gap-1 text-cream hover:text-accent transition-colors"
              >
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted">
                  {s.label}
                </span>
                <span className="text-base font-bold flex items-center gap-2">
                  {s.handle}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                    ↗
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Footer line */}
      <div className="mt-24 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[10px] font-mono uppercase tracking-[0.3em] text-muted">
        <p>
          © {new Date().getFullYear()} Gervin Abavelim{" "}
          <span className="text-accent">/</span> All rights reserved
        </p>
        <p>Built with Next.js + Framer Motion</p>
      </div>
    </section>
  );
}
