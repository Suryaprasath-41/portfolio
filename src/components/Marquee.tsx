const PHRASES = [
  "Backend that breathes.",
  "Secure by default.",
  "Databases, tuned.",
  "REST done right.",
  "Ship > talk.",
];

export default function Marquee() {
  const items = [...PHRASES, ...PHRASES];
  return (
    <div className="relative bg-[var(--color-ink)] text-[var(--color-paper)] py-10 overflow-hidden border-y border-white/10 marquee">
      <div className="marquee-track flex gap-12 whitespace-nowrap will-change-transform">
        {items.map((p, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="marquee-text">{p}</span>
            <span className="text-[var(--color-amber)] text-6xl">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}