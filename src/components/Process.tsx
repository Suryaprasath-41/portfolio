import { motion } from "framer-motion";

const STEPS = [
  {
    n: "01",
    title: "Listen",
    body: "I start by mapping the real friction — schema gaps, slow queries, brittle endpoints — before touching code.",
    color: "var(--color-amber)",
  },
  {
    n: "02",
    title: "Model",
    body: "Design the relational model and the API contract first. Indexes, constraints, idempotency, error shape.",
    color: "var(--color-teal-deep)",
  },
  {
    n: "03",
    title: "Build",
    body: "Write the smallest correct version. Validate input at the edge. Log with intent. Never trust client input.",
    color: "var(--color-rust)",
  },
  {
    n: "04",
    title: "Tune",
    body: "Profile slow queries, cache the right things, and verify with real-shaped data — not just 10 rows.",
    color: "var(--color-ink)",
  },
  {
    n: "05",
    title: "Ship",
    body: "Deploy behind health checks. Document the contract. Hand off a system the next engineer can extend.",
    color: "var(--color-amber)",
  },
];

export default function Process() {
  return (
    <section
      id="notes"
      className="section relative bg-[var(--color-paper)]"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 md:col-span-5">
            <div className="tick mb-4">— 05 / Method</div>
            <h2 className="font-display font-light text-[clamp(2.2rem,6vw,5rem)] leading-[0.95] tracking-tight">
              How I{" "}
              <span className="italic">approach</span>
              <br />a problem.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7 flex items-end">
            <p className="text-[15px] leading-relaxed text-[var(--color-ink)]/70 max-w-[520px]">
              A simple, repeatable loop that's kept my projects reliable — from
              the voting system to a real-time chat backend.
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Vertical spine line */}
          <div className="absolute left-0 md:left-[3.25rem] top-0 bottom-0 w-px bg-[var(--color-line)]" />

          <ol className="space-y-2">
            {STEPS.map((s, i) => (
              <motion.li
                key={s.n}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="group relative grid grid-cols-12 gap-4 md:gap-8 py-8 border-b border-[var(--color-line)] hover:bg-[var(--color-cream)]/40 transition-colors pl-2 md:pl-0"
                data-hover
              >
                <div className="col-span-3 md:col-span-1 relative flex md:block items-start">
                  <span className="absolute left-[-1.4rem] md:left-[-1.1rem] top-2 w-3 h-3 rounded-full border-2 border-[var(--color-paper)]"
                    style={{ background: s.color }}
                  />
                  <span className="num text-4xl md:text-5xl font-display font-light tracking-tighter md:pl-8">
                    {s.n}
                  </span>
                </div>
                <div className="col-span-9 md:col-span-4">
                  <h3 className="font-display text-2xl md:text-3xl tracking-tight">
                    {s.title}
                  </h3>
                </div>
                <div className="col-span-12 md:col-span-7">
                  <p className="text-[15px] leading-relaxed text-[var(--color-ink)]/75">
                    {s.body}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}