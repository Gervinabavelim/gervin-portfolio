"use client";

type Props = {
  items: string[];
};

export default function Marquee({ items }: Props) {
  // Double the items so the loop seams together.
  const loop = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-border py-5 -mx-6 md:-mx-12">
      <div className="flex gap-12 whitespace-nowrap animate-marquee w-max">
        {loop.map((item, i) => (
          <span
            key={i}
            className="font-mono text-sm uppercase tracking-[0.25em] text-cream/80 flex items-center gap-12"
          >
            {item}
            <span className="text-accent">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
