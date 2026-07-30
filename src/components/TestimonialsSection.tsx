"use client";

import { motion } from "framer-motion";

const highlights = [
  {
    quote:
      "A full-stack project tracking tool with real-time progress visualization and team collaboration features.",
    project: "Project Tracker",
    initials: "PT",
    color: "bg-blue-500",
  },
  {
    quote:
      "A laundry service management platform with order tracking, scheduling, and customer notifications.",
    project: "Laundry Service",
    initials: "LS",
    color: "bg-emerald-500",
  },
  {
    quote:
      "A task management app with kanban boards, drag-and-drop, and automated workflow triggers.",
    project: "Orderly",
    initials: "OD",
    color: "bg-purple-500",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-bg">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-3">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
            Project Highlights
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((h, i) => (
            <motion.div
              key={h.project}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-accent/20 text-5xl font-serif mb-3">&ldquo;</div>
              <p className="text-muted leading-relaxed mb-6">{h.quote}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div
                  className={`w-10 h-10 ${h.color} rounded-full flex items-center justify-center text-white text-sm font-bold`}
                >
                  {h.initials}
                </div>
                <div>
                  <p className="font-semibold text-primary text-sm">
                    {h.project}
                  </p>
                  <p className="text-xs text-muted">Full-Stack Application</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
