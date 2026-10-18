"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, Github, Hammer, Users } from "lucide-react";
import { Tech } from "./Tech";
import { useLanguage } from "../context/LanguageContext";
import Reveal from "./Reveal";

export default function Work() {
  const { dict } = useLanguage();
  const w = dict.work;
  const list = useRef<HTMLUListElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 28 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 28 });
  const label = useRef<HTMLSpanElement>(null);
  const shown = useMotionValue(0);
  const scale = useSpring(shown, { stiffness: 260, damping: 24 });

  // O selo lima segue o cursor sobre a lista (só ponteiro fino).
  const move = (e: React.PointerEvent) => {
    const r = list.current?.getBoundingClientRect();
    if (!r) return;
    x.set(e.clientX - r.left);
    y.set(e.clientY - r.top);
  };

  return (
    <section id="work" className="px-[var(--gutter)] py-[clamp(96px,14vw,200px)]">
      <Reveal className="mb-6 flex flex-wrap items-end justify-between gap-6">
        <h2 className="text-[clamp(3rem,8vw,7rem)]">{w.title}</h2>
        <p className="max-w-xs pb-2 text-[clamp(1.25rem,1.5vw,1.5rem)] leading-snug">{w.remark}</p>
      </Reveal>

      <ul
        ref={list}
        onPointerMove={move}
        onPointerEnter={(e) => e.pointerType === "mouse" && shown.set(1)}
        onPointerLeave={() => shown.set(0)}
        className="relative"
      >
        {w.items.map((p, i) => {
          const wip = "wip" in p && p.wip;
          return (
            <Reveal key={p.key} delay={i * 0.04}>
              <li className="group grid items-baseline gap-x-8 gap-y-3 bg-background py-14 md:py-8 transition-colors duration-500 hover:bg-accent hover:text-accent-ink md:grid-cols-12 md:px-4">
                <h3 className="text-[clamp(2.25rem,5vw,4.5rem)] md:col-span-5">{p.name}</h3>
                <div className="order-3 md:order-none md:col-span-4">
                  <p className="text-base">{p.desc}</p>
                  <p className="mt-3 flex items-center gap-2 text-base font-semibold">
                    {"team" in p && p.team ? <Users size={16} /> : <Hammer size={16} />}
                    {p.role}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2" aria-label="Stack">
                    {p.stack.split(" · ").map((t) => (
                      <li key={t} className="inline-flex items-center gap-1.5 rounded-full bg-surface px-3 py-1 text-sm font-medium text-ink group-hover:bg-accent-ink group-hover:text-accent">
                        <Tech name={t} size={14} /> {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="order-2 flex flex-wrap gap-x-5 gap-y-2 text-base font-semibold md:order-none md:col-span-3 md:justify-end">
                  {"href" in p && p.href && (
                    <a href={p.href} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1">
                      {w.live} <ArrowUpRight size={15} />
                    </a>
                  )}
                  {"code" in p && p.code && (
                    <a href={p.code} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1">
                      <Github size={15} /> {w.code}
                    </a>
                  )}
                  {wip && <span>{w.wip}</span>}
                </div>
              </li>
            </Reveal>
          );
        })}
        <motion.span
          ref={label}
          aria-hidden
          style={{ x, y, scale }}
          className="pointer-events-none absolute left-0 top-0 -ml-12 -mt-12 hidden h-24 w-24 items-center justify-center rounded-full bg-ink text-sm font-bold text-accent-ink md:flex"
        >
          <ArrowUpRight size={28} />
        </motion.span>
      </ul>
    </section>
  );
}
