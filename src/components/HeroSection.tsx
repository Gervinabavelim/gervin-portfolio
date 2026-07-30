"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const words = ["scalable", "beautiful", "performant", "accessible"];

function DashboardMockup() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="h-5 w-32 bg-gray-100 rounded-md" />
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Projects", value: "3", color: "text-blue-600" },
            { label: "Commits", value: "847+", color: "text-emerald-600" },
            { label: "Uptime", value: "99.9%", color: "text-purple-600" },
          ].map((s) => (
            <div key={s.label} className="bg-gray-50 rounded-xl p-3 text-center">
              <p className={`text-lg font-bold ${s.color}`}>{s.value}</p>
              <p className="text-[10px] text-gray-500 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-500">Activity</span>
            <span className="text-gray-400">This week</span>
          </div>
          <div className="flex items-end gap-1 h-12">
            {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-accent/20 rounded-t-sm"
                style={{ height: `${h}%` }}
              >
                <div
                  className="w-full bg-accent rounded-t-sm"
                  style={{ height: `${h}%` }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-2">
          {["React", "Next.js", "TypeScript", "Node.js"].map((t) => (
            <span
              key={t}
              className="text-[10px] font-medium bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Sky gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-100 via-blue-50 to-white" />

      {/* Cloud shapes */}
      <div className="absolute top-16 left-[10%] w-32 h-12 bg-white/60 rounded-full blur-sm" />
      <div className="absolute top-12 left-[14%] w-20 h-10 bg-white/50 rounded-full blur-sm" />
      <div className="absolute top-24 right-[15%] w-40 h-14 bg-white/50 rounded-full blur-sm" />
      <div className="absolute top-20 right-[20%] w-24 h-10 bg-white/40 rounded-full blur-sm" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 pt-32 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left: Text */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-100"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-medium text-primary">
                Available for new projects
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary leading-[1.1]"
            >
              I build{" "}
              <span className="text-accent relative">
                {words[wordIndex]}
                <span className="animate-blink">|</span>
              </span>
              <br />
              web experiences.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-muted text-lg leading-relaxed max-w-lg"
            >
              Software developer turning ideas into polished, production-ready
              applications. Specializing in React, Next.js, and full-stack
              TypeScript.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-accent-dark transition-colors"
              >
                View Projects
                <svg
                  className="w-4 h-4"
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
                </svg>
              </a>
              <a
                href="mailto:abavelimgervin@gmail.com"
                className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-primary px-6 py-3 rounded-lg font-semibold text-sm border border-border hover:border-accent hover:text-accent transition-colors"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>

          {/* Right: Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="animate-float hidden md:block"
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60L48 52C96 44 192 28 288 24C384 20 480 28 576 40C672 52 768 68 864 72C960 76 1056 68 1152 56C1248 44 1344 28 1392 20L1440 12V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
