"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { ease } from "./Reveal";

// Three.js só carrega no cliente.
const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease, delay },
});

/** Hora de Goiânia, atualizada a cada 15s. */
function useClock() {
  const [t, setT] = useState("");
  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat("pt-BR", { hour: "2-digit", minute: "2-digit", timeZone: "America/Sao_Paulo" }).format(new Date());
    setT(fmt());
    const id = setInterval(() => setT(fmt()), 15000);
    return () => clearInterval(id);
  }, []);
  return t;
}

export default function Hero() {
  const { dict } = useLanguage();
  const h = dict.hero;
  const time = useClock();
  const calm = useReducedMotion() ?? false;
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="top" className="flex min-h-[calc(100svh-4.5rem)] flex-col px-[var(--gutter)] pb-[var(--gutter)] pt-8">
      <motion.div className="flex items-center justify-between text-sm" {...rise(0)}>
        <span className="inline-flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-full bg-accent" />
          {h.status}
        </span>
        <span className="tabular" suppressHydrationWarning>Goiânia · {time || "--:--"}</span>
      </motion.div>

      {/* Nome e notebook centralizados verticalmente no espaço entre a linha de status e a base */}
      <div className="flex flex-1 items-center py-8">
      <div className="relative w-full">
        <h1 className="text-[clamp(4rem,13vw,13rem)] leading-[0.86]" aria-label="Pedro Henrique">
          <motion.span className="block" initial={{ y: "30%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.1, ease }}>
            Pedro
          </motion.span>
          <motion.span className="block" initial={{ y: "30%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.1, ease, delay: 0.1 }}>
            Henrique
          </motion.span>
        </h1>

        <motion.div
          className="scene mt-6 h-[34svh] md:absolute md:-inset-y-[6svh] md:left-[42%] md:right-0 md:mt-0 md:h-auto"
          {...rise(0.25)}
        >
          {mounted && <HeroScene calm={calm} />}
        </motion.div>
      </div>
      </div>

      {/* Frase e ação na base */}
      <div className="flex flex-wrap items-center justify-between gap-x-12 gap-y-6">
        <motion.p className="max-w-[44ch] text-[clamp(1.125rem,1.4vw,1.375rem)] leading-relaxed" {...rise(0.3)}>
          {h.line}
        </motion.p>
        <motion.a href="#work" className="btn" {...rise(0.4)}>
          {h.cta} <ArrowDownRight size={18} />
        </motion.a>
      </div>
    </section>
  );
}
