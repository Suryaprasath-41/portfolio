import { motion } from "framer-motion";
import { profile } from "../lib/content";
import { Mail, Phone, MapPin, Linkedin, Github, ArrowUpRight } from "lucide-react";

const links = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Location", value: profile.location, href: "#" },
  { icon: Linkedin, label: "LinkedIn", value: "suryaprasath-palaniappan", href: profile.linkedin },
  { icon: Github, label: "GitHub", value: "Suryaprasath-41", href: profile.github },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-[var(--color-ink)] text-[var(--color-paper)] overflow-hidden"
    >
      {/* Big background typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-display italic font-light text-[clamp(8rem,28vw,30rem)] leading-none text-white/[0.04] tracking-[-0.04em] whitespace-nowrap">
          let's talk
        </span>
      </div>

      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[var(--color-amber)]/8 blur-[140px] pointer-events-none" />

      <div className="relative section">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-12 gap-6 mb-12">
            <div className="col-span-12 md:col-span-7">
              <div className="tick text-[var(--color-amber)] mb-4">
                — 05 / Contact
              </div>
              <h2 className="font-display font-light text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] tracking-[-0.03em]">
                Have a backend
                <br />
                problem?{" "}
                <span className="italic text-[var(--color-amber)]">
                  Let's untangle it.
                </span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9 flex items-end">
              <p className="text-[15px] leading-relaxed text-[var(--color-paper)]/65">
                Open to full-time backend / full-stack roles, internships, and
                interesting collaborations. The fastest way to reach me is
                email — I reply within a day.
              </p>
            </div>
          </div>

          {/* Big email CTA */}
          <motion.a
            href={`mailto:${profile.email}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group block relative border-y border-white/15 py-10 md:py-14 mb-10 hover:border-[var(--color-amber)] transition-colors"
            data-hover
          >
            <div className="flex items-center justify-between gap-6 flex-wrap">
              <div>
                <div className="tick text-[var(--color-paper)]/40 mb-2">
                  Primary inbox
                </div>
                <div className="font-display text-[clamp(1.8rem,5vw,4rem)] tracking-tight leading-none break-all">
                  {profile.email}
                </div>
              </div>
              <div className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[.2em] text-[var(--color-amber)] group-hover:translate-x-2 transition-transform">
                Compose <ArrowUpRight size={20} />
              </div>
            </div>
          </motion.a>

          {/* Contact grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-white/10 border border-white/10">
            {links.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group bg-[var(--color-ink)] p-6 hover:bg-[var(--color-graphite)] transition-colors relative"
                data-hover
              >
                <div className="flex items-center justify-between mb-4">
                  <l.icon size={18} className="text-[var(--color-amber)]" />
                  <ArrowUpRight
                    size={14}
                    className="text-[var(--color-paper)]/30 group-hover:text-[var(--color-amber)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <div className="tick mb-2 text-[var(--color-paper)]/50">
                  {l.label}
                </div>
                <div className="text-[14px] text-[var(--color-paper)]/90 break-all group-hover:text-[var(--color-amber)] transition-colors">
                  {l.value}
                </div>
              </motion.a>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <span className="w-7 h-7 rounded-full bg-[var(--color-amber)] text-[var(--color-ink)] font-mono text-xs font-bold flex items-center justify-center">
                S
              </span>
              <span className="font-display italic text-lg">
                {profile.name}
              </span>
            </div>
            <div className="tick text-[var(--color-paper)]/50">
              © {new Date().getUTCFullYear()} · Built with care ·{" "}
              <span className="text-[var(--color-amber)]">v1.0</span>
            </div>
            <a
              href="#top"
              className="font-mono text-[11px] uppercase tracking-[.2em] hover:text-[var(--color-amber)] transition-colors"
              data-hover
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}