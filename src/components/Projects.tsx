import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState, useEffect } from "react";
import { ExternalLink, Github, Search, X, Layers, Filter } from "lucide-react";
import { projects } from "../lib/content";

type Accent = "amber" | "teal" | "rust";

const accentMap: Record<Accent, { bar: string; ink: string; soft: string; ring: string; chip: string }> = {
  amber: {
    bar: "var(--color-amber)",
    ink: "var(--color-ink)",
    soft: "#fde9c4",
    ring: "rgba(245,180,84,.55)",
    chip: "var(--color-amber)",
  },
  teal: {
    bar: "var(--color-teal)",
    ink: "var(--color-teal-deep)",
    soft: "#d8f1ee",
    ring: "rgba(95,201,194,.55)",
    chip: "var(--color-teal-deep)",
  },
  rust: {
    bar: "var(--color-rust)",
    ink: "var(--color-rust)",
    soft: "#f4d6cb",
    ring: "rgba(193,87,58,.55)",
    chip: "var(--color-rust)",
  },
};

const ALL_TECH = Array.from(
  new Set(projects.flatMap((p) => p.stack))
).sort();

export default function Projects() {
  const [hover, setHover] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [activeTech, setActiveTech] = useState<string | null>(null);
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesTech = activeTech ? p.stack.includes(activeTech) : true;
      const matchesQuery = q
        ? `${p.title} ${p.description} ${p.category} ${p.stack.join(" ")}`
            .toLowerCase()
            .includes(q)
        : true;
      return matchesTech && matchesQuery;
    });
  }, [query, activeTech]);

  const featured = filtered.filter((p) => p.featured);
  const others = filtered.filter((p) => !p.featured);

  const openProject = useMemo(
    () => projects.find((p) => p.id === openId) || null,
    [openId]
  );

  // Close modal on ESC
  useEffect(() => {
    if (!openId) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenId(null);
    };
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [openId]);

  return (
    <section
      id="projects"
      className="section relative bg-[var(--color-cream)] overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 md:col-span-5">
            <div className="tick mb-4">— 03 / Projects</div>
            <h2 className="font-display font-light text-[clamp(2.2rem,6vw,5rem)] leading-[0.95] tracking-tight">
              <span className="italic">{filtered.length}</span> projects,
              <br />
              shipped end-to-end.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7 flex items-end">
            <p className="text-[15px] leading-relaxed text-[var(--color-ink)]/70 max-w-[520px]">
              From real production deployments to AI agents and algorithm work —
              every project is built, tested and (where applicable) deployed by
              me. GitHub repos verified against my account.
            </p>
          </div>
        </div>

        {/* Controls: search + tech filter */}
        <div className="mb-10 grid grid-cols-12 gap-4 items-stretch">
          <div className="col-span-12 md:col-span-5 relative">
            <Search
              size={14}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-fog)] pointer-events-none"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects, tech, descriptions…"
              aria-label="Search projects"
              className="w-full pl-10 pr-4 py-3 bg-[var(--color-paper)] border border-[var(--color-line)] font-mono text-[13px] focus:outline-none focus:border-[var(--color-ink)] focus:bg-white transition-colors"
              data-hover
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-fog)] hover:text-[var(--color-ink)]"
                aria-label="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </div>

          <div className="col-span-12 md:col-span-7 flex items-center gap-3 overflow-x-auto pb-1">
            <span className="tick shrink-0 flex items-center gap-1.5">
              <Filter size={11} /> tech
            </span>
            <button
              onClick={() => setActiveTech(null)}
              className={`shrink-0 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[.15em] border transition-colors ${
                activeTech === null
                  ? "bg-[var(--color-ink)] text-[var(--color-amber)] border-[var(--color-ink)]"
                  : "border-[var(--color-line)] hover:bg-[var(--color-paper)]"
              }`}
              data-hover
            >
              all
            </button>
            {ALL_TECH.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTech(t === activeTech ? null : t)}
                className={`shrink-0 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[.15em] border transition-colors ${
                  activeTech === t
                    ? "bg-[var(--color-ink)] text-[var(--color-amber)] border-[var(--color-ink)]"
                    : "border-[var(--color-line)] hover:bg-[var(--color-paper)]"
                }`}
                data-hover
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Featured trio */}
        {featured.length > 0 && (
          <div className="mb-6 flex items-baseline justify-between">
            <div className="tick">★ Featured</div>
            <div className="tick hidden md:block">{featured.length} projects</div>
          </div>
        )}

        <div className="space-y-6 mb-12">
          {featured.map((p, i) => (
            <ProjectCard
              key={p.id}
              p={p}
              index={i}
              hover={hover === p.id}
              onHover={(v) => setHover(v ? p.id : null)}
              onOpen={() => setOpenId(p.id)}
            />
          ))}
        </div>

        {/* Others */}
        {others.length > 0 && (
          <>
            <div className="mb-6 flex items-baseline justify-between hairline pt-8">
              <div className="tick flex items-center gap-2">
                <Layers size={11} /> More work
              </div>
              <div className="tick hidden md:block">{others.length} projects</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {others.map((p, i) => (
                <ProjectCardCompact
                  key={p.id}
                  p={p}
                  index={i}
                  onOpen={() => setOpenId(p.id)}
                />
              ))}
            </div>
          </>
        )}

        {filtered.length === 0 && (
          <div className="border border-dashed border-[var(--color-line)] py-20 text-center">
            <div className="font-display italic text-3xl text-[var(--color-fog)] mb-2">
              Nothing matches that.
            </div>
            <button
              onClick={() => {
                setQuery("");
                setActiveTech(null);
              }}
              className="font-mono text-[11px] uppercase tracking-[.18em] underline underline-offset-4 hover:text-[var(--color-amber)]"
              data-hover
            >
              clear filters
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {openProject && (
          <ProjectModal project={openProject} onClose={() => setOpenId(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

/* ───────────── Featured full-bleed card ───────────── */

function ProjectCard({
  p,
  index,
  hover,
  onHover,
  onOpen,
}: {
  p: (typeof projects)[number];
  index: number;
  hover: boolean;
  onHover: (v: boolean) => void;
  onOpen: () => void;
}) {
  const a = accentMap[p.accent];
  const hasGithub = !!p.github;
  const hasLive = !!p.live;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      className="group relative grid grid-cols-12 gap-0 border border-[var(--color-line)] bg-[var(--color-paper)] hover:bg-white transition-colors overflow-hidden"
      data-hover
    >
      {/* Left index column */}
      <div
        className="col-span-12 md:col-span-2 p-6 md:p-8 border-b md:border-b-0 md:border-r border-[var(--color-line)] flex md:flex-col justify-between md:justify-start items-start gap-4"
        style={{ background: a.soft }}
      >
        <span
          className="num text-5xl md:text-7xl font-display font-light tracking-tighter"
          style={{ color: a.ink }}
        >
          {p.id}
        </span>
        <div className="flex md:flex-col gap-2 mt-auto">
          <span className="font-mono text-[10px] uppercase tracking-[.18em] text-[var(--color-ink)]/60">
            {p.category}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[.18em] text-[var(--color-ink)]/40">
            Featured
          </span>
        </div>
      </div>

      {/* Thumbnail */}
      <div className="col-span-12 md:col-span-4 border-b md:border-b-0 md:border-r border-[var(--color-line)] relative overflow-hidden bg-[var(--color-ink)] aspect-[16/9] md:aspect-auto">
        <img
          src={p.image}
          alt={`${p.title} preview`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-[.18em] px-2 py-1 bg-black/55 text-white backdrop-blur-sm">
          {p.status}
        </div>
      </div>

      {/* Middle content */}
      <div className="col-span-12 md:col-span-4 p-6 md:p-10 flex flex-col">
        <h3 className="font-display text-3xl md:text-4xl leading-[1.05] tracking-tight mb-3">
          {p.title}
        </h3>
        <p className="text-[14px] md:text-[15px] leading-relaxed text-[var(--color-ink)]/75 max-w-[520px] mb-5">
          {p.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {p.stack.map((s) => (
            <span
              key={s}
              className="px-2.5 py-1 border border-[var(--color-line)] bg-white/60 font-mono text-[10px] uppercase tracking-[.12em]"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Right action column */}
      <div className="col-span-12 md:col-span-2 p-6 md:p-8 border-t md:border-t-0 md:border-l border-[var(--color-line)] flex md:flex-col gap-3 justify-end">
        <button
          onClick={onOpen}
          className="flex items-center justify-between gap-2 px-4 py-3 bg-[var(--color-ink)] text-[var(--color-paper)] font-mono text-[11px] uppercase tracking-[.15em] hover:bg-[var(--color-amber)] hover:text-[var(--color-ink)] transition-colors"
          data-hover
          aria-label={`View details for ${p.title}`}
        >
          Details
          <span aria-hidden>↗</span>
        </button>

        {hasLive ? (
          <a
            href={p.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-2 px-4 py-3 font-mono text-[11px] uppercase tracking-[.15em] border transition-colors"
            style={{
              borderColor: a.bar,
              color: a.ink,
              background: "transparent",
            }}
            data-hover
          >
            Live
            <ExternalLink size={12} />
          </a>
        ) : (
          <span
            className="flex items-center justify-between gap-2 px-4 py-3 font-mono text-[11px] uppercase tracking-[.15em] border border-dashed border-[var(--color-line)] text-[var(--color-fog)] cursor-not-allowed"
            aria-disabled
            title="No live demo deployed"
          >
            No demo
          </span>
        )}

        {hasGithub ? (
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-2 px-4 py-3 border border-[var(--color-ink)] font-mono text-[11px] uppercase tracking-[.15em] hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)] transition-colors"
            data-hover
            aria-label={`Open ${p.title} on GitHub`}
          >
            GitHub
            <Github size={12} />
          </a>
        ) : (
          <span
            className="flex items-center justify-between gap-2 px-4 py-3 border border-dashed border-[var(--color-line)] text-[var(--color-fog)] font-mono text-[11px] uppercase tracking-[.15em] cursor-not-allowed"
            aria-disabled
            title="No public repository"
          >
            No repo
          </span>
        )}

        <div className="hidden md:block mt-auto pt-6">
          <div className="flex items-center justify-between tick mb-2">
            <span>Status</span>
            <span className="flex items-center gap-1.5">
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: hasLive ? "#10b981" : "var(--color-fog)" }}
              />
              {hasLive ? "live" : "open source"}
            </span>
          </div>
          <div className="w-full h-px bg-[var(--color-line)] overflow-hidden">
            <motion.div
              animate={{ width: hover ? "100%" : hasLive ? "60%" : "30%" }}
              transition={{ duration: 1.2 }}
              className="h-full"
              style={{ background: a.bar }}
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* ───────────── Compact card (for "More work") ───────────── */

function ProjectCardCompact({
  p,
  index,
  onOpen,
}: {
  p: (typeof projects)[number];
  index: number;
  onOpen: () => void;
}) {
  const a = accentMap[p.accent];
  const hasGithub = !!p.github;
  const hasLive = !!p.live;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.07 }}
      className="group relative border border-[var(--color-line)] bg-[var(--color-paper)] hover:bg-white transition-colors overflow-hidden flex flex-col"
      data-hover
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[var(--color-ink)]">
        <img
          src={p.image}
          alt={`${p.title} preview`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span
            className="num text-2xl font-display tracking-tighter"
            style={{ color: a.bar }}
          >
            {p.id}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[.18em] px-2 py-1 bg-black/55 text-white backdrop-blur-sm">
            {p.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-display text-2xl leading-tight tracking-tight mb-2">
          {p.title}
        </h3>
        <p className="text-[13px] leading-relaxed text-[var(--color-ink)]/70 mb-4">
          {p.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {p.stack.slice(0, 4).map((s) => (
            <span
              key={s}
              className="px-2 py-0.5 border border-[var(--color-line)] bg-white/60 font-mono text-[9px] uppercase tracking-[.12em]"
            >
              {s}
            </span>
          ))}
          {p.stack.length > 4 && (
            <span className="px-2 py-0.5 font-mono text-[9px] uppercase tracking-[.12em] text-[var(--color-fog)]">
              +{p.stack.length - 4}
            </span>
          )}
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t border-[var(--color-line)]">
          <button
            onClick={onOpen}
            className="flex-1 px-3 py-2 bg-[var(--color-ink)] text-[var(--color-paper)] font-mono text-[10px] uppercase tracking-[.15em] hover:bg-[var(--color-amber)] hover:text-[var(--color-ink)] transition-colors text-center"
            data-hover
          >
            Details
          </button>
          {hasLive ? (
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 border border-[var(--color-line)] hover:bg-[var(--color-paper)] transition-colors"
              data-hover
              aria-label={`Open live demo of ${p.title}`}
              title="Live demo"
            >
              <ExternalLink size={12} />
            </a>
          ) : (
            <span
              className="px-3 py-2 border border-dashed border-[var(--color-line)] text-[var(--color-fog)] cursor-not-allowed"
              aria-disabled
              title="No live demo"
            >
              <ExternalLink size={12} />
            </span>
          )}
          {hasGithub ? (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 border border-[var(--color-line)] hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)] transition-colors"
              data-hover
              aria-label={`Open ${p.title} on GitHub`}
              title="GitHub repository"
            >
              <Github size={12} />
            </a>
          ) : (
            <span
              className="px-3 py-2 border border-dashed border-[var(--color-line)] text-[var(--color-fog)] cursor-not-allowed"
              aria-disabled
              title="No public repository"
            >
              <Github size={12} />
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

/* ───────────── Modal ───────────── */

function ProjectModal({
  project,
  onClose,
}: {
  project: (typeof projects)[number];
  onClose: () => void;
}) {
  const a = accentMap[project.accent];
  const hasGithub = !!project.github;
  const hasLive = !!project.live;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/65 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} details`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
        className="relative w-full max-w-[1000px] max-h-[90vh] overflow-y-auto bg-[var(--color-paper)] border border-[var(--color-line)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[var(--color-ink)] text-[var(--color-paper)] hover:bg-[var(--color-amber)] hover:text-[var(--color-ink)] transition-colors flex items-center justify-center"
          aria-label="Close details"
          data-hover
        >
          <X size={14} />
        </button>

        {/* Image */}
        <div className="relative aspect-[16/8] overflow-hidden bg-[var(--color-ink)]">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg, transparent 50%, ${a.soft})`,
            }}
          />
          <div
            className="absolute bottom-4 left-6 right-6 flex items-end justify-between flex-wrap gap-4"
            style={{ color: a.ink }}
          >
            <div>
              <div
                className="num text-6xl font-display font-light tracking-tighter leading-none"
                style={{ color: a.ink }}
              >
                {project.id}
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[.18em] mt-2 opacity-70">
                {project.category} · {project.status}
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-10 grid grid-cols-12 gap-6 md:gap-10">
          {/* Left: story */}
          <div className="col-span-12 md:col-span-7">
            <h3 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight mb-4">
              {project.title}
            </h3>
            <p className="text-[15px] md:text-[16px] leading-relaxed text-[var(--color-ink)]/80 mb-7">
              {project.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-7">
              <div className="border-l-2 pl-4" style={{ borderColor: a.bar }}>
                <div className="tick mb-1.5">Problem</div>
                <p className="text-[13px] leading-relaxed text-[var(--color-ink)]/75">
                  {project.problem}
                </p>
              </div>
              <div className="border-l-2 pl-4" style={{ borderColor: a.bar }}>
                <div className="tick mb-1.5">Solution</div>
                <p className="text-[13px] leading-relaxed text-[var(--color-ink)]/75">
                  {project.solution}
                </p>
              </div>
            </div>

            <div className="mb-7">
              <div className="tick mb-3">Main features</div>
              <ul className="space-y-2">
                {project.features.map((f, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-[14px] text-[var(--color-ink)]/80"
                  >
                    <span style={{ color: a.bar }} className="shrink-0">
                      ▸
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="tick mb-3">Architecture / Implementation</div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {project.architecture.map((a, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-[13px] text-[var(--color-ink)]/80"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                      style={{ background: a.color || accentMap[project.accent].bar }}
                    />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: meta + actions */}
          <div className="col-span-12 md:col-span-5">
            <div className="border border-[var(--color-line)] bg-white/40 p-6">
              <div className="tick mb-4">Stack</div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 border border-[var(--color-line)] bg-[var(--color-paper)] font-mono text-[10px] uppercase tracking-[.12em]"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="space-y-2.5">
                {hasLive && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-2 w-full px-4 py-3 bg-[var(--color-ink)] text-[var(--color-paper)] font-mono text-[11px] uppercase tracking-[.15em] hover:bg-[var(--color-amber)] hover:text-[var(--color-ink)] transition-colors"
                    data-hover
                  >
                    <span className="flex items-center gap-2">
                      <ExternalLink size={13} /> Live demo
                    </span>
                    <span className="opacity-50 text-[9px]">↗</span>
                  </a>
                )}
                {hasGithub ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-2 w-full px-4 py-3 border border-[var(--color-ink)] font-mono text-[11px] uppercase tracking-[.15em] hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)] transition-colors"
                    data-hover
                  >
                    <span className="flex items-center gap-2">
                      <Github size={13} /> View on GitHub
                    </span>
                    <span className="opacity-50 text-[9px]">↗</span>
                  </a>
                ) : (
                  <div className="flex items-center justify-between gap-2 w-full px-4 py-3 border border-dashed border-[var(--color-line)] font-mono text-[11px] uppercase tracking-[.15em] text-[var(--color-fog)]">
                    <span className="flex items-center gap-2">
                      <Github size={13} /> No public repository
                    </span>
                  </div>
                )}

                {!hasLive && (
                  <div className="flex items-center justify-between gap-2 w-full px-4 py-3 border border-dashed border-[var(--color-line)] font-mono text-[11px] uppercase tracking-[.15em] text-[var(--color-fog)]">
                    <span className="flex items-center gap-2">
                      <ExternalLink size={13} /> No live deployment
                    </span>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-5 border-t border-[var(--color-line)] tick">
                <div className="flex items-center justify-between mb-1">
                  <span>repo source</span>
                  <span className="text-[var(--color-ink)]/70 normal-case tracking-normal">
                    {project.repoSource}
                  </span>
                </div>
                <div className="flex items-center justify-between mb-1">
                  <span>id</span>
                  <span className="text-[var(--color-ink)]/70">{project.id}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>category</span>
                  <span className="text-[var(--color-ink)]/70">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}