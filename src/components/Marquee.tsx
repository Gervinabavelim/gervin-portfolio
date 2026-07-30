"use client";

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Tailwind CSS",
  "Prisma",
  "Docker",
  "Git",
  "REST APIs",
  "Framer Motion",
];

export default function Marquee() {
  const loop = [...techStack, ...techStack];

  return (
    <div className="overflow-hidden bg-primary py-4">
      <div className="flex gap-12 whitespace-nowrap animate-marquee w-max">
        {loop.map((item, i) => (
          <span
            key={i}
            className="text-xs uppercase tracking-[0.2em] text-white/40 flex items-center gap-12 font-medium"
          >
            {item}
            <span className="text-accent/60">&#9670;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
