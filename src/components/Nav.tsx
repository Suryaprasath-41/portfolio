import { motion, useScroll, useTransform } from "framer-motion";
import { profile } from "../lib/content";

export default function Nav() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [0, 1]);
  const pad = useTransform(scrollY, [0, 200], [28, 14]);

  const items = [
    { label: "Work", href: "#work" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Notes", href: "#notes" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      style={{ paddingTop: pad, paddingBottom: pad }}
      className="fixed top-0 left-0 right-0 z-40 px-6 md:px-10"
    >
      <motion.div
        style={{
          opacity,
          backgroundColor: "rgba(246, 243, 236, 0.78)",
        }}
        className="hidden md:flex items-center justify-between max-w-[1400px] mx-auto backdrop-blur-md border border-[var(--color-line)] rounded-full px-6 py-3"
      >
        <a href="#top" className="flex items-center gap-2 group" data-hover>
          <span className="relative inline-flex items-center justify-center w-7 h-7 rounded-full bg-[var(--color-ink)] text-[var(--color-amber)] font-mono text-xs font-bold">
            S
            <span className="absolute -right-1 -top-1 w-2 h-2 rounded-full bg-[var(--color-teal)]" />
          </span>
          <span className="font-display italic text-[15px] tracking-tight">
            {profile.shortName} —
            <span className="text-[var(--color-fog)] not-italic font-mono text-[10px] uppercase tracking-[.2em] ml-2">
              v1.0
            </span>
          </span>
        </a>

        <ul className="flex items-center gap-7 font-mono text-[11px] uppercase tracking-[.18em]">
          {items.map((it, i) => (
            <li key={it.label}>
              <a
                href={it.href}
                className="relative inline-flex items-center gap-1.5 hover:text-[var(--color-amber)] transition-colors"
                data-hover
              >
                <span className="text-[var(--color-fog)] text-[9px]">
                  0{i + 1}
                </span>
                {it.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${profile.email}`}
          className="font-mono text-[11px] uppercase tracking-[.18em] px-4 py-2 rounded-full bg-[var(--color-ink)] text-[var(--color-paper)] hover:bg-[var(--color-amber)] hover:text-[var(--color-ink)] transition-colors"
          data-hover
        >
          Hire Me →
        </a>
      </motion.div>

      {/* Mobile compact bar */}
      <div className="flex md:hidden items-center justify-between">
        <a href="#top" className="font-display italic text-lg" data-hover>
          {profile.shortName}.
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="font-mono text-[10px] uppercase tracking-[.18em] px-3 py-2 border border-[var(--color-ink)] rounded-full"
          data-hover
        >
          Contact
        </a>
      </div>
    </motion.nav>
  );
}