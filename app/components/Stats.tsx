"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { Clock, Globe, Layers } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { Tech } from "./Tech";
import Reveal from "./Reveal";

const stack = ["Django", "Next.js", "React", "Python", "TypeScript", "PostgreSQL", "Docker", "Celery", "Tailwind", "Git", "Linux"];
const rowIcons = [Clock, Layers, Globe];

function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const calm = useReducedMotion();
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    if (calm) return setV(to);
    const c = animate(0, to, { duration: 1.6, ease: [0.32, 0.72, 0, 1], onUpdate: (x) => setV(Math.round(x)) });
    return () => c.stop();
  }, [inView, to, calm]);
  return <span ref={ref}>{v}</span>;
}

export default function Stats() {
  const { dict } = useLanguage();
  const s = dict.stats;
  const loop = [...stack, ...stack];

  return (
    <>
      <section className="px-[var(--gutter)] py-[clamp(64px,10vw,140px)]">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-6 lg:col-start-2">
            <h2 className="mb-10 text-[clamp(3rem,8vw,7rem)]">{s.title}</h2>
            <dl className="grid grid-cols-[88px_1fr] gap-x-6 gap-y-8 md:grid-cols-[132px_1fr]">
              {s.rows.map((r, i) => {
                const Icon = rowIcons[i];
                return (
                <div key={r.text} className="col-span-2 grid grid-cols-subgrid items-baseline">
                  <dt className="display tabular text-right text-[clamp(3rem,6vw,5rem)] text-accent"><CountUp to={Number(r.fig)} /></dt>
                  <dd className="flex max-w-[44ch] items-start gap-3 text-[clamp(1.25rem,1.5vw,1.5rem)] leading-snug">
                    <Icon size={22} className="mt-1 shrink-0 text-accent" aria-hidden />
                    {r.text}
                  </dd>
                </div>
                );
              })}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Faixa lima com as tecnologias, em movimento contínuo */}
      <section aria-label={s.stackTitle} className="overflow-hidden bg-accent py-6 text-accent-ink">
        <div className="marquee-track flex gap-10">
          {loop.map((t, i) => (
            <span key={i} className="display inline-flex shrink-0 items-center gap-4 text-[clamp(2.25rem,5vw,4.5rem)]" aria-hidden={i >= stack.length}>
              <Tech name={t} size={44} /> {t}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
