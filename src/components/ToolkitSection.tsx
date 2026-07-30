"use client";

import { motion } from "framer-motion";

const tools = [
  {
    title: "Frontend",
    icon: "🎨",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    desc: "Building responsive, performant user interfaces with modern frameworks.",
  },
  {
    title: "Backend",
    icon: "⚙️",
    tags: ["Node.js", "Python", "PostgreSQL", "REST APIs"],
    desc: "Designing scalable server-side architectures and robust APIs.",
  },
  {
    title: "Full-Stack",
    icon: "🔗",
    tags: ["Next.js", "Prisma", "tRPC", "Supabase"],
    desc: "End-to-end application development from database to deployment.",
  },
  {
    title: "DevOps",
    icon: "🚀",
    tags: ["Git", "Docker", "CI/CD", "Netlify"],
    desc: "Automating deployments and maintaining reliable infrastructure.",
  },
];

export default function ToolkitSection() {
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
            Toolkit
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
            Technologies I Work With
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white border border-border rounded-2xl p-6 hover:shadow-lg hover:border-accent/30 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{tool.icon}</div>
              <h3 className="font-bold text-primary text-lg mb-2">
                {tool.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-4">
                {tool.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {tool.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium bg-bg-alt text-accent px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
