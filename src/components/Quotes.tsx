import { motion } from "framer-motion";

export default function Quotes() {
  return (
    <section className="relative bg-[var(--color-paper)] py-24 md:py-32 overflow-hidden border-t border-[var(--color-line)]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <motion.figure
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <span className="font-display italic text-[var(--color-amber)] text-[6rem] md:text-[10rem] leading-none block">
            &ldquo;
          </span>
          <blockquote className="font-display font-light text-[clamp(1.8rem,4.5vw,3.6rem)] leading-[1.15] tracking-[-0.02em] max-w-[900px] mx-auto -mt-8">
            Make it work, make it right,
            <br className="hidden md:block" />
            <span className="italic"> make it quietly fast.</span>
          </blockquote>
          <figcaption className="mt-8 inline-flex items-center gap-3 tick">
            <span className="w-8 h-px bg-[var(--color-ink)]" />
            A working principle
            <span className="w-8 h-px bg-[var(--color-ink)]" />
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}