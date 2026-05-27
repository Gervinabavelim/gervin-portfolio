"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experience = [
  {
    period: "2024 — Present",
    role: "Software Developer",
    company: "Your Company",
    companyUrl: "#",
    description:
      "Building and maintaining full-stack web applications. Update this with your actual responsibilities and achievements.",
  },
  {
    period: "2023 — 2024",
    role: "Junior Developer",
    company: "Previous Company",
    companyUrl: "#",
    description:
      "Contributed to product features and improved developer experience. Replace with real details about your work.",
  },
  {
    period: "2022 — 2023",
    role: "Freelance Developer",
    company: "Self-Employed",
    companyUrl: "#",
    description:
      "Delivered web solutions for various clients. Add your specific projects, tools used, and impact made.",
  },
];

const education = [
  {
    period: "2018 — 2022",
    degree: "Bachelor of Science in Information Technology",
    school: "Your University",
    description: "Update with your actual degree, institution, and any notable achievements.",
  },
];

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

function EntryRow({
  item,
  index,
}: {
  item: { period: string; description: string; [key: string]: string };
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease }}
      className="border-b border-border py-8 grid md:grid-cols-[180px_1fr] gap-4 md:gap-12"
    >
      <span className="text-sm font-mono text-muted">{item.period}</span>
      <div>
        <h3 className="font-bold text-lg text-[#1a1a1a] leading-tight">
          {item.role || item.degree}
        </h3>
        {item.company && (
          <a
            href={item.companyUrl}
            className="text-sm text-accent font-semibold hover:underline underline-offset-2"
          >
            {item.company}
          </a>
        )}
        {item.school && (
          <p className="text-sm text-[#555] font-semibold">{item.school}</p>
        )}
        <p className="text-sm text-[#555] mt-2 leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32">
      <div className="max-w-4xl mx-auto px-8">
        <motion.div
          ref={headerRef}
          variants={stagger}
          initial="hidden"
          animate={headerInView ? "show" : "hidden"}
          className="mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-semibold tracking-[0.2em] uppercase text-muted mb-6"
          >
            Experience
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-black leading-[1.05] tracking-tight"
          >
            Where I&apos;ve
            <br />
            worked
            <span className="text-accent">.</span>
          </motion.h2>
        </motion.div>

        <div className="mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted mb-0">
            Work
          </p>
          <div className="border-t border-border mt-4">
            {experience.map((item, i) => (
              <EntryRow key={i} item={item} index={i} />
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted mb-0">
            Education
          </p>
          <div className="border-t border-border mt-4">
            {education.map((item, i) => (
              <EntryRow key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
