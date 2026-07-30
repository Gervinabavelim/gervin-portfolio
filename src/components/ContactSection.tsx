"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-primary py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Ready to start your next project?
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            I&apos;m always interested in hearing about new opportunities and
            exciting projects. Let&apos;s connect and build something amazing
            together.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="mailto:abavelimgervin@gmail.com"
              className="inline-flex items-center gap-3 bg-accent text-white px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-accent-dark transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              abavelimgervin@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/gervin-abavelim-64054918a"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-3.5 rounded-lg font-semibold text-sm hover:border-white/50 transition-colors"
            >
              LinkedIn
              <span className="text-xs">↗</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
