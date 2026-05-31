"use client";

type Props = {
  items: string[];
};

export default function Marquee({ items }: Props) {
  const loop = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-border py-4 -mx-6 md:-mx-16 lg:-mx-24">
      <div className="flex gap-16 whitespace-nowrap animate-marquee w-max">
        {loop.map((item, i) => (
          <span
            key={i}
            className="text-[11px] uppercase tracking-[0.2em] text-cream/30 flex items-center gap-16"
          >
            {item}
            <span className="text-accent/40">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
