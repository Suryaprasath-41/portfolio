import { motion } from "framer-motion";
import { skills } from "../lib/content";

const categoryAccents: Record<string, string> = {
  Languages: "var(--color-amber)",
  Backend: "var(--color-teal-deep)",
  Frontend: "var(--color-rust)",
  Databases: "var(--color-ink)",
  Tools: "var(--color-amber)",
  Other: "var(--color-teal-deep)",
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="section relative bg-[var(--color-paper)] overflow-hidden"
    >
      <div className="relative max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 md:col-span-4">
            <div className="tick mb-4">— 02 / Skills</div>
            <h2 className="font-display font-light text-[clamp(2.2rem,6vw,5rem)] leading-[0.95] tracking-tight">
              A toolkit
              <br />
              <span className="italic">for shipping.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6 flex items-end">
            <p className="text-[15px] leading-relaxed text-[var(--color-ink)]/70 max-w-[520px]">
              I lean back-end first — relational modelling, query performance
              and clean REST surfaces — but I'm equally at home wiring up a
              React UI when the product needs it.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-line)] border border-[var(--color-line)]">
          {Object.entries(skills).map(([cat, items], i) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="bg-[var(--color-paper)] p-8 md:p-10 group relative overflow-hidden hover:bg-[var(--color-cream)] transition-colors"
              data-hover
            >
              <div
                className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-2xl"
                style={{ background: categoryAccents[cat] }}
              />

              <div className="relative flex items-baseline justify-between mb-6">
                <span className="font-display italic text-2xl tracking-tight">
                  {cat}
                </span>
                <span className="num text-xs text-[var(--color-fog)]">
                  0{i + 1}
                </span>
              </div>

              <div className="relative flex flex-wrap gap-2">
                {items.map((it, j) => (
                  <motion.span
                    key={it}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.06 + j * 0.04 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[var(--color-line)] bg-white/40 font-mono text-[11px] uppercase tracking-[.12em]"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: categoryAccents[cat] }}
                    />
                    {it}
                  </motion.span>
                ))}
              </div>

              <div className="relative mt-8 pt-4 border-t border-[var(--color-line)] flex items-center justify-between">
                <span className="tick">
                  {items.length} item{items.length === 1 ? "" : "s"}
                </span>
                <span
                  className="w-6 h-6 rounded-full border border-[var(--color-line)] flex items-center justify-center group-hover:bg-[var(--color-ink)] group-hover:text-[var(--color-amber)] transition-colors"
                  aria-hidden
                >
                  →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}