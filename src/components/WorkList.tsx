"use client";

import { motion } from "framer-motion";

type Project = {
  date: string;
  name: string;
  description: string;
  href: string;
};

const projects: Project[] = [
  {
    date: "2026.06",
    name: "Project Tracker",
    description:
      "A macOS app that auto-tracks your coding projects. Track, build, and ship with ease.",
    href: "https://landing-lime-nine-14.vercel.app/",
  },
  {
    date: "2026.05",
    name: "Laundry Service",
    description:
      "A laundry service booking and order management platform with authentication and real-time order tracking.",
    href: "https://laundry-service-omega.vercel.app",
  },
  {
    date: "2026.04",
    name: "Orderly",
    description:
      "An order management system for service businesses with real-time dashboard, Paystack payments, and WhatsApp messaging.",
    href: "https://orderly-main.vercel.app/order",
  },
];

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

export default function WorkList() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="show"
      className="py-16 md:py-20 max-w-3xl mx-auto"
    >
      <motion.p
        variants={fadeUp}
        className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted mb-1"
      >
        Selected Work
      </motion.p>

      <motion.div variants={fadeUp} className="h-px bg-border mb-0" />

      {projects.map((project) => (
        <motion.div
          key={project.name}
          variants={fadeUp}
          className="border-b border-border py-8 md:py-10"
        >
          <div className="grid grid-cols-12 gap-4 md:gap-8">
            <div className="col-span-12 md:col-span-2">
              <span className="font-mono text-sm text-muted">{project.date}</span>
            </div>
            <div className="col-span-12 md:col-span-10">
              <h3 className="text-lg md:text-xl font-bold mb-2">{project.name}</h3>
              <p className="text-[15px] text-text/60 leading-relaxed mb-4">
                {project.description}
              </p>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-mono font-medium uppercase tracking-[0.2em] text-text border-b border-text/40 pb-0.5 hover:text-accent hover:border-accent transition-colors"
              >
                Open Project
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
