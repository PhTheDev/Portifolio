"use client";

import { motion } from "framer-motion";
import {
  SiDjango, SiReact, SiNextdotjs, SiTailwindcss,
  SiPython, SiGit, SiPostgresql, SiDocker, SiLinux, SiJavascript,
} from "react-icons/si";

const skills = [
  { name: "Django", icon: SiDjango },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "Python", icon: SiPython },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TailwindCSS", icon: SiTailwindcss },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Docker", icon: SiDocker },
  { name: "Git", icon: SiGit },
  { name: "Linux", icon: SiLinux },
];

const infoCards = [
  {
    label: "Formação",
    value: "Engenharia da Computação",
    sub: "PUC-GO · 7º período · 2023–presente",
    icon: "🎓",
  },
  {
    label: "Experiência atual",
    value: "Estagiário de TI",
    sub: "CRMV-GO · 2024–presente",
    icon: "💼",
  },
  {
    label: "Localização",
    value: "Goiânia, GO",
    sub: "Disponível para remoto ou presencial",
    icon: "📍",
  },
  {
    label: "Foco atual",
    value: "Django + Next.js",
    sub: "Desenvolvimento de sistemas, DevOps e Infraestrutura",
    icon: "⚡",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const About = () => {
  return (
    <section id="about" className="relative py-24 bg-[#0a0a0f] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-indigo-500/30 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs font-mono text-indigo-400 tracking-[0.2em] uppercase mb-3">
            01. Sobre mim
          </p>
          <h2 className="text-4xl font-semibold text-white tracking-tight mb-4">
            Quem sou eu
          </h2>
          <div className="w-8 h-0.5 bg-indigo-500 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: bio + info cards */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-slate-400 leading-relaxed mb-10 text-[15px]"
            >
              Olá! Sou{" "}
              <span className="text-white font-medium">Pedro Henrique Faria dos Santos Soares</span>,
              tenho 21 anos e sou desenvolvedor.
              Apaixonado por construir soluções completas — do banco de dados à interface.
              Atualmente cursando Engenharia da Computação e atuando como estagiário no CRMV-GO,
              onde já desenvolvi sistemas utilizados em âmbito nacional.
            </motion.p>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {infoCards.map((card) => (
                <motion.div
                  key={card.label}
                  variants={item}
                  className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-indigo-500/30 hover:bg-indigo-500/[0.04] transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-lg mt-0.5">{card.icon}</span>
                    <div>
                      <p className="text-[10px] text-slate-600 uppercase tracking-widest mb-1">{card.label}</p>
                      <p className="text-sm text-white font-medium">{card.value}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{card.sub}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: skills + experience */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.2em] mb-6"
            >
              Habilidades técnicas
            </motion.p>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3"
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={item}
                  whileHover={{ y: -2 }}
                  className="group flex items-center gap-3 p-3.5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-indigo-500/30 hover:bg-indigo-500/[0.06] transition-all duration-300 cursor-default"
                >
                  <skill.icon className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300 transition-colors flex-shrink-0" />
                  <span className="text-sm text-slate-300 font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Experience timeline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 p-5 rounded-xl border border-white/[0.06] bg-white/[0.02]"
            >
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center gap-1 mt-1">
                  <div className="w-2 h-2 rounded-full bg-indigo-400" />
                  <div className="w-px flex-1 min-h-[60px] bg-white/[0.06]" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-sm text-white font-medium">Desenvolvedor Full Stack — Estagiário</p>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-400 border border-indigo-500/20">Atual</span>
                  </div>
                  <p className="text-xs text-slate-500 mb-3">CRMV-GO · 2024 – presente</p>
                  <ul className="space-y-1.5">
                    {[
                      "Desenvolvimento de sistemas com Django e Next.js",
                      "Criação de sistemas ativos em âmbito nacional (SGAP, Seleção)",
                      "Arquitetura, modelagem e implementação de ponta a ponta",
                      "Manutenção contínua de sistemas em produção",
                      "Colaboração no SGI com outro estagiário",
                    ].map((it) => (
                      <li key={it} className="flex items-start gap-2 text-xs text-slate-500">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-indigo-500/60 flex-shrink-0" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
