import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "../lib/content";

const ROTATING = [
  "build secure APIs.",
  "optimize SQL queries.",
  "ship full-stack apps.",
  "design databases.",
  "automate workflows.",
];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">(
    "typing"
  );

  useEffect(() => {
    const word = ROTATING[idx];
    let timer: number;
    if (phase === "typing") {
      if (typed.length < word.length) {
        timer = window.setTimeout(
          () => setTyped(word.slice(0, typed.length + 1)),
          55 + Math.random() * 40
        );
      } else {
        timer = window.setTimeout(() => setPhase("pausing"), 1600);
      }
    } else if (phase === "pausing") {
      timer = window.setTimeout(() => setPhase("deleting"), 600);
    } else {
      if (typed.length > 0) {
        timer = window.setTimeout(
          () => setTyped(typed.slice(0, -1)),
          28
        );
      } else {
        setIdx((i) => (i + 1) % ROTATING.length);
        setPhase("typing");
      }
    }
    return () => clearTimeout(timer);
  }, [typed, phase, idx]);

  return (
    <section
      id="top"
      className="relative min-h-screen pt-32 md:pt-40 pb-24 px-6 md:px-10 overflow-hidden bg-[var(--color-paper)]"
    >
      {/* Background ambient */}
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-[var(--color-amber)]/15 blur-[120px] drift pointer-events-none" />
      <div
        className="absolute top-1/2 -left-32 w-[480px] h-[480px] rounded-full bg-[var(--color-teal)]/12 blur-[140px] drift pointer-events-none"
        style={{ animationDelay: "3s" }}
      />

      <div className="relative max-w-[1400px] mx-auto">
        {/* Top tick row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex items-center gap-6 mb-10 md:mb-16"
        >
          <span className="tick">
            <span className="text-[var(--color-amber)]">●</span>&nbsp;&nbsp;Available
            for Backend / Full-Stack roles
          </span>
          <span className="hidden md:block tick">
            Namakkal · TN · IN · {new Date().getUTCFullYear()}
          </span>
        </motion.div>

        {/* Headline */}
        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.2, 0.7, 0.2, 1] }}
            className="font-display font-light leading-[0.92] tracking-[-0.04em] text-[clamp(3rem,11vw,11rem)]"
          >
            I design systems
            <br />
            that{" "}
            <span className="italic relative inline-block">
              <span className="relative z-10">scale quietly</span>
              <svg
                viewBox="0 0 300 12"
                className="absolute -bottom-2 left-0 w-full h-3"
                preserveAspectRatio="none"
                aria-hidden
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.4, delay: 1.2 }}
                  d="M2 9 Q 80 2 150 6 T 298 5"
                  fill="none"
                  stroke="#f5b454"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            .
          </motion.h1>
        </div>

        {/* Two-column block */}
        <div className="grid grid-cols-12 gap-6 md:gap-10 mt-16 md:mt-24">
          {/* Left: typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="col-span-12 lg:col-span-7"
          >
            <div className="border border-[var(--color-line)] bg-[rgba(255,255,255,0.5)] backdrop-blur-sm p-6 md:p-8 relative">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-rust)]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-amber)]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-teal)]" />
                </div>
                <span className="tick">~/surya/role.js</span>
              </div>
              <pre className="code whitespace-pre-wrap">
                <span className="text-[var(--color-fog)]">const</span>{" "}
                <span className="text-[var(--color-teal-deep)]">surya</span>{" "}
                <span className="text-[var(--color-fog)]">=</span>{" "}
                <span className="text-[var(--color-fog)]">{"{"}</span>
                {"\n"}
                {"  "}role:{" "}
                <span className="text-[var(--color-amber)]">
                  &quot;Backend & Full-Stack Engineer&quot;
                </span>
                ,
                {"\n"}
                {"  "}location:{" "}
                <span className="text-[var(--color-amber)]">
                  &quot;Namakkal, Tamil Nadu&quot;
                </span>
                ,
                {"\n"}
                {"  "}currently:{" "}
                <span className="text-[var(--color-fog)]">async</span> () {"=>"} (
                {"\n"}
                {"    "}
                <span className="text-[var(--color-amber)] underline decoration-dotted">
                  {typed}
                </span>
                <span className="caret inline-block w-[2px] h-[1em] align-middle bg-[var(--color-ink)] ml-0.5" />
                {"\n"}
                {"  )"}, {"\n"}
                {"}"}; {"\n"}
                {"\n"}
                <span className="text-[var(--color-fog)]">await</span> surya.
                <span className="text-[var(--color-teal-deep)]">currently</span>();
              </pre>
            </div>
          </motion.div>

          {/* Right: meta + summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="col-span-12 lg:col-span-5 flex flex-col gap-6"
          >
            <div>
              <div className="tick mb-3">Professional Summary</div>
              <p className="text-[15px] md:text-[17px] leading-[1.55] text-[var(--color-ink)]/85">
                {profile.summary}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { k: "Projects shipped", v: "9", s: "end-to-end" },
                { k: "Internship", v: "1", s: "Backend · Dwinsoft" },
                { k: "Stack depth", v: "6", s: "domains" },
                { k: "CGPA", v: "7.18", s: "B.Tech CSBS" },
              ].map((m, i) => (
                <motion.div
                  key={m.k}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.08 }}
                  className="border-t border-[var(--color-line)] pt-3"
                >
                  <div className="num text-3xl font-display font-light tracking-tight">
                    {m.v}
                  </div>
                  <div className="text-[11px] uppercase tracking-[.15em] font-mono text-[var(--color-fog)] mt-1">
                    {m.k}
                  </div>
                  <div className="text-[11px] text-[var(--color-fog)]/70 font-mono">
                    {m.s}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-20 flex items-center gap-4 tick"
        >
          <span>scroll</span>
          <span className="flex items-center gap-1">
            <span className="dot inline-block w-1.5 h-1.5 rounded-full bg-[var(--color-ink)]" />
            <span className="dot inline-block w-1.5 h-1.5 rounded-full bg-[var(--color-ink)]" />
            <span className="dot inline-block w-1.5 h-1.5 rounded-full bg-[var(--color-ink)]" />
          </span>
          <span>↓</span>
        </motion.div>
      </div>
    </section>
  );
}