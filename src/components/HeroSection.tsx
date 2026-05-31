"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import WorkList from "./WorkList";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const socials = [
  {
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 005.001-1.721 4.036 4.036 0 01-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 01-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 01-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 008.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 014.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 002.556-.973 4.02 4.02 0 01-1.771 2.22 8.073 8.073 0 002.319-.624 8.645 8.645 0 01-2.019 2.083z" />
      </svg>
    ),
    label: "@Gervindev",
    href: "https://x.com/Gervindev",
  },
  {
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: "/in/gervinabavelim",
    href: "https://www.linkedin.com/in/gervin-abavelim-64054918a",
  },
  {
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
    label: "@Gervinabavelim",
    href: "https://github.com/Gervinabavelim",
  },
  {
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "@abavelimgervin",
    href: "mailto:abavelimgervin@gmail.com",
  },
];

export default function HeroSection() {
  const [showWork, setShowWork] = useState(false);

  return (
    <section className="relative min-h-screen px-8 md:px-16 lg:px-24 pt-16 pb-0 overflow-hidden">
      {/* Subtle gradient wash top-right */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-rose-100/60 via-amber-50/30 to-transparent pointer-events-none" />

      <div className="relative z-10">
        {/* Top row: role label + socials */}
        <div className="flex items-start justify-between mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted"
          >
            Software Developer
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5, ease }}
            className="hidden md:flex flex-col gap-3"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-text/70 hover:text-accent transition-colors"
              >
                {s.icon}
                <span className="text-[13px] font-mono">{s.label}</span>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease }}
          className="font-black leading-[0.88] tracking-[-0.04em] mb-8"
          style={{ fontSize: "clamp(3.5rem, 12vw, 11rem)" }}
        >
          Gervin
          <br />
          Abavelim<span className="text-accent">.</span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease }}
          className="h-px bg-border origin-left max-w-2xl mb-8"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease }}
          className="font-mono text-lg md:text-2xl text-text/60 mb-12"
        >
          An LLM and a{" "}
          <span className="text-text">
            dr<span className="text-accent">ea</span>m
          </span>
          .
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6, ease }}
          className="flex items-center gap-3 mb-12"
        >
          <button
            onClick={() => setShowWork(!showWork)}
            className="flex items-center gap-2.5 bg-text text-bg px-6 py-3.5 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-text/85 transition-colors cursor-pointer rounded-sm"
          >
            {showWork ? "Hide Work" : "View Work"}
            <motion.svg
              animate={{ rotate: showWork ? 180 : 0 }}
              transition={{ duration: 0.3, ease }}
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </button>
        </motion.div>

        {/* Divider before work */}
        <div className="h-px bg-border mb-0" />

        {/* Expandable work section */}
        <motion.div
          initial={false}
          animate={{
            height: showWork ? "auto" : 0,
            opacity: showWork ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease }}
          className="overflow-hidden"
        >
          <WorkList />
        </motion.div>
      </div>
    </section>
  );
}
