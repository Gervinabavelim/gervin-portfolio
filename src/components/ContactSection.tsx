"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 bg-[#f4f4f4]">
      <div className="max-w-4xl mx-auto px-8">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-semibold tracking-[0.2em] uppercase text-muted mb-6"
          >
            Contact
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.0] tracking-tight mb-8"
          >
            Let&apos;s build
            <br />
            something
            <span className="text-accent">.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg text-[#555] max-w-md leading-relaxed mb-12"
          >
            Got a project in mind or just want to say hello? My inbox is always open.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="mailto:abavelimgervin@gmail.com"
              className="inline-flex items-center gap-3 bg-[#1a1a1a] text-white px-8 py-4 text-xs font-semibold tracking-[0.15em] uppercase transition-colors hover:bg-[#333]"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Say Hello
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/gervinabavelim"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-[#ccc] px-8 py-4 text-xs font-semibold tracking-[0.15em] uppercase text-[#1a1a1a] transition-colors hover:bg-[#eee]"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </motion.a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <p className="text-xs text-muted">
              &copy; {new Date().getFullYear()} Gervin Abavelim. All rights reserved.
            </p>
            <p className="text-xs font-mono text-muted">
              Built with Next.js & Framer Motion
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
