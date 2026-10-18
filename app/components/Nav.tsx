"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Languages } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { ease } from "./Reveal";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" aria-label="Pedro Henrique" className={`display text-[1.75rem] leading-none ${className}`}>
      <span className="text-accent">&lt;/</span>PH<span className="text-accent">&gt;</span>
    </a>
  );
}

const ids = ["about", "work", "contact"] as const;

/** Qual seção está na tela, para sublinhar o link ativo. */
function useActive() {
  const [active, setActive] = useState<string>("");
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return active;
}

function LangToggle({ className = "" }: { className?: string }) {
  const { language, toggleLanguage } = useLanguage();
  return (
    <button
      onClick={toggleLanguage}
      aria-label={language === "pt" ? "Switch to English" : "Mudar para Português"}
      className={`flex h-10 items-center gap-1.5 rounded-full border px-3 text-sm font-semibold transition-colors hover:bg-surface ${className}`}
    >
      <Languages size={16} className="text-accent" />
      <span className={language === "pt" ? "text-accent" : ""}>PT</span>
      <span className="opacity-40">/</span>
      <span className={language === "en" ? "text-accent" : ""}>EN</span>
    </button>
  );
}

export default function Nav() {
  const { dict } = useLanguage();
  const active = useActive();
  const [open, setOpen] = useState(false);
  const links = [
    { label: dict.nav.about, href: "#about", id: "about" },
    { label: dict.nav.work, href: "#work", id: "work" },
    { label: dict.nav.contact, href: "#contact", id: "contact" },
  ];

  // Esc fecha e a rolagem do fundo trava enquanto o menu está aberto
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 md:px-8">
      {/* taste-skill-ignore: pílula com blur, padrão do nav do Selecao Simplificada */}
      <div className="relative z-[70] mx-auto flex max-w-6xl items-center justify-between rounded-full border bg-background/80 px-5 py-2 backdrop-blur md:px-6">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Principal">
          {links.map((l) => (
            <a key={l.id} href={l.href} className="group rounded-full px-4 py-2 transition-colors hover:bg-surface">
              <span className="relative">
                {l.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-accent transition-[width] duration-300 group-hover:w-full ${active === l.id ? "w-full" : "w-0"}`} />
              </span>
            </a>
          ))}
          <LangToggle className="ml-2" />
          <a href="#contact" className="btn ml-3 !min-h-10 !px-5 text-sm">
            {dict.nav.cta} <ArrowUpRight size={16} />
          </a>
        </nav>

        <button
          className="relative flex h-10 w-10 items-center justify-center rounded-full md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? dict.nav.close : dict.nav.menu}
          aria-expanded={open}
        >
          {/* três barras viram um X */}
          <motion.span className="absolute h-0.5 w-5 rounded-full bg-ink" animate={open ? { y: 0, rotate: 45 } : { y: -6, rotate: 0 }} transition={{ duration: 0.35, ease }} />
          <motion.span className="absolute h-0.5 w-5 rounded-full bg-ink" animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }} transition={{ duration: 0.2 }} />
          <motion.span className="absolute h-0.5 w-5 rounded-full bg-ink" animate={open ? { y: 0, rotate: -45 } : { y: 6, rotate: 0 }} transition={{ duration: 0.35, ease }} />
        </button>
      </div>

      {/* Menu mobile: um círculo nasce no botão e cobre a tela; os links sobem em sequência */}
      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Principal"
            className="fixed inset-0 z-[60] flex flex-col justify-between bg-background px-6 pb-8 pt-28 md:hidden"
            initial={{ clipPath: "circle(0px at calc(100% - 2.75rem) 2.75rem)" }}
            animate={{ clipPath: "circle(150vmax at calc(100% - 2.75rem) 2.75rem)" }}
            exit={{ clipPath: "circle(0px at calc(100% - 2.75rem) 2.75rem)", transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } }}
            transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
          >
            <ul>
              {links.map((l, i) => (
                <li key={l.id} className="overflow-hidden border-b py-1"> {/* taste-skill-ignore */}
                  <motion.div
                    initial={{ y: "110%" }}
                    animate={{ y: 0, transition: { delay: 0.3 + i * 0.08, duration: 0.7, ease } }}
                    exit={{ y: "110%", transition: { duration: 0.2 } }}
                  >
                    <a href={l.href} onClick={() => setOpen(false)} className="flex items-baseline justify-between py-3">
                      <span className={`display text-[3.5rem] ${active === l.id ? "text-accent" : ""}`}>{l.label}</span>
                      <span className="tabular text-sm">0{i + 1}</span>
                    </a>
                  </motion.div>
                </li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.55, duration: 0.6, ease } }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
            >
              <LangToggle className="mb-5 w-full justify-center" />
              <a href="#contact" onClick={() => setOpen(false)} className="btn w-full justify-center !min-h-14 text-lg">
                {dict.nav.cta} <ArrowUpRight size={18} />
              </a>
              <p className="mt-4 text-center text-sm">{dict.hero.status}</p>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
