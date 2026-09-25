import { motion } from "framer-motion";
import { experience } from "../lib/content";

export default function Work() {
  return (
    <section
      id="work"
      className="section relative bg-[var(--color-ink)] text-[var(--color-paper)] overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-[0.06] pointer-events-none" />
      <div className="absolute top-20 right-10 w-[420px] h-[420px] rounded-full bg-[var(--color-amber)]/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 md:col-span-4">
            <div className="tick text-[var(--color-amber)] mb-4">
              — 01 / Work
            </div>
            <h2 className="font-display font-light text-[clamp(2.2rem,6vw,5rem)] leading-[0.95] tracking-tight">
              Where I
              <br />
              <span className="italic text-[var(--color-amber)]">
                sharpened
              </span>{" "}
              the craft.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6 flex items-end">
            <p className="text-[15px] leading-relaxed text-[var(--color-paper)]/70 max-w-[520px]">
              A short, intentional stint that produced real production modules
              — not toy work. I optimised queries, owned database schema design,
              and contributed features that shipped to users.
            </p>
          </div>
        </div>

        {/* Experience card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
          className="relative border border-white/10 bg-white/[0.02] backdrop-blur-sm p-8 md:p-12"
        >
          {/* Diagonal stripe tag */}
          <div className="absolute -top-3 left-8 bg-[var(--color-amber)] text-[var(--color-ink)] px-3 py-1 font-mono text-[10px] uppercase tracking-[.2em]">
            Internship · Production work
          </div>

          <div className="grid grid-cols-12 gap-6 md:gap-10">
            <div className="col-span-12 md:col-span-5">
              <div className="text-[var(--color-amber)] font-mono text-xs uppercase tracking-[.18em] mb-3">
                {experience.role}
              </div>
              <h3 className="font-display text-3xl md:text-4xl leading-tight tracking-tight">
                {experience.company}
              </h3>
              <div className="mt-4 flex items-center gap-3 text-[var(--color-paper)]/60 font-mono text-xs uppercase tracking-[.15em]">
                <span>{experience.period}</span>
                <span className="w-1 h-1 rounded-full bg-[var(--color-paper)]/40" />
                <span>On-site · Karur, TN</span>
              </div>

              {/* Tiny stack used */}
              <div className="mt-8 flex flex-wrap gap-2">
                {["Python", "MySQL", "SQL Optimization", "Schema Design", "REST APIs"].map(
                  (s) => (
                    <span
                      key={s}
                      className="px-3 py-1.5 border border-white/15 font-mono text-[10px] uppercase tracking-[.15em] text-[var(--color-paper)]/70"
                    >
                      {s}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="col-span-12 md:col-span-7">
              <ol className="space-y-5">
                {experience.bullets.map((b, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.12, duration: 0.6 }}
                    className="flex gap-4 group"
                  >
                    <span className="font-mono text-xs text-[var(--color-amber)] mt-1 shrink-0">
                      0{i + 1}
                    </span>
                    <span className="text-[15px] md:text-[17px] leading-[1.55] text-[var(--color-paper)]/85 group-hover:text-[var(--color-paper)] transition-colors">
                      {b}
                    </span>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}