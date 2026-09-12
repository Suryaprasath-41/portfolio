import { motion } from "framer-motion";
import { clubs } from "../lib/content";
import { Shield, ExternalLink, Github } from "lucide-react";

export default function Clubs() {
  return (
    <section className="section relative bg-[var(--color-paper)]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 md:col-span-5">
            <div className="tick mb-4">— 04 / Beyond Code</div>
            <h2 className="font-display font-light text-[clamp(2.2rem,6vw,5rem)] leading-[0.95] tracking-tight">
              Off the{" "}
              <span className="italic">syllabus.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {clubs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="col-span-12 lg:col-span-8 relative bg-gradient-to-br from-[var(--color-graphite)] to-[var(--color-charcoal)] text-[var(--color-paper)] p-8 md:p-12 overflow-hidden group"
              data-hover
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-teal)]/20 rounded-full blur-3xl group-hover:bg-[var(--color-amber)]/30 transition-colors duration-700" />
              <div className="absolute inset-0 bg-grid opacity-[0.05] pointer-events-none" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full border border-[var(--color-amber)]/60 flex items-center justify-center text-[var(--color-amber)]">
                    <Shield size={18} />
                  </div>
                  <span className="tick text-[var(--color-amber)]">
                    Cyber Security Club
                  </span>
                </div>

                <h3 className="font-display text-3xl md:text-5xl tracking-tight leading-tight mb-3">
                  {c.title}
                </h3>
                <div className="text-[var(--color-paper)]/60 font-mono text-xs uppercase tracking-[.18em] mb-6">
                  {c.org}
                </div>

                <p className="text-[15px] md:text-[17px] leading-relaxed text-[var(--color-paper)]/80 max-w-[600px] mb-8">
                  {c.body}
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={c.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 bg-[var(--color-amber)] text-[var(--color-ink)] font-mono text-[11px] uppercase tracking-[.15em] hover:bg-[var(--color-paper)] transition-colors"
                    data-hover
                  >
                    Play Cyber Game
                    <ExternalLink size={14} />
                  </a>
                  <a
                    href={c.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 border border-white/30 font-mono text-[11px] uppercase tracking-[.15em] hover:bg-white hover:text-[var(--color-ink)] transition-colors"
                    data-hover
                  >
                    View Code
                    <Github size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Education card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="col-span-12 lg:col-span-4 bg-[var(--color-ink)] text-[var(--color-paper)] p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 num text-[10px] tracking-[.2em] text-[var(--color-amber)]">
              EDU · 02
            </div>
            <div className="tick text-[var(--color-amber)] mb-6">Education</div>
            <ol className="space-y-7 relative">
              <li className="relative pl-6">
                <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[var(--color-amber)]" />
                <div className="text-[10px] uppercase tracking-[.2em] font-mono text-[var(--color-paper)]/60 mb-1">
                  2023 – 2027
                </div>
                <div className="font-display text-xl leading-tight">
                  B.Tech — CSBS
                </div>
                <div className="text-[13px] text-[var(--color-paper)]/70 mt-1">
                  V.S.B. Engineering College, Karur
                </div>
                <div className="mt-2 num text-2xl text-[var(--color-amber)]">
                  7.18{" "}
                  <span className="text-[11px] text-[var(--color-paper)]/50">
                    CGPA
                  </span>
                </div>
              </li>
              <li className="relative pl-6 pt-6 border-t border-white/10">
                <span className="absolute left-0 top-[34px] w-2 h-2 rounded-full bg-[var(--color-teal)]" />
                <div className="text-[10px] uppercase tracking-[.2em] font-mono text-[var(--color-paper)]/60 mb-1">
                  2022 – 2023
                </div>
                <div className="font-display text-xl leading-tight">
                  Higher Secondary
                </div>
                <div className="text-[13px] text-[var(--color-paper)]/70 mt-1">
                  Malar Matric HSS
                </div>
                <div className="mt-2 num text-2xl text-[var(--color-teal)]">
                  63%{" "}
                  <span className="text-[11px] text-[var(--color-paper)]/50">
                    Score
                  </span>
                </div>
              </li>
            </ol>
          </motion.div>
        </div>

        {/* Certs + Languages row */}
        <div className="grid grid-cols-12 gap-6 mt-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-8 border border-[var(--color-line)] bg-[var(--color-cream)] p-8"
          >
            <div className="flex items-center justify-between mb-5">
              <div className="tick">Certifications</div>
              <div className="num text-[11px] text-[var(--color-fog)]">
                02 verified
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center justify-between border-b border-[var(--color-line)] pb-3">
                <div className="flex items-center gap-4">
                  <span className="font-display italic text-2xl text-[var(--color-amber)]">
                    NPTEL
                  </span>
                  <span className="text-[15px]">Full Stack Development</span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[.18em] text-[var(--color-fog)]">
                  verified
                </span>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="font-display italic text-2xl text-[var(--color-teal-deep)]">
                    Infosys
                  </span>
                  <span className="text-[15px]">Springboard — Java Foundation</span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[.18em] text-[var(--color-fog)]">
                  verified
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-4 border border-[var(--color-line)] bg-[var(--color-amber)] text-[var(--color-ink)] p-8"
          >
            <div className="tick mb-5 text-[var(--color-ink)]/60">Languages</div>
            <div className="space-y-3">
              <div className="font-display text-3xl italic">English</div>
              <div className="font-display text-3xl italic">Tamil</div>
            </div>
            <div className="mt-6 pt-4 border-t border-[var(--color-ink)]/20 tick text-[var(--color-ink)]/60">
              Native + Fluent
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}