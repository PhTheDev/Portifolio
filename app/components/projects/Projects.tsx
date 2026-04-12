"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiDjango, SiNextdotjs, SiTailwindcss, SiPostgresql } from "react-icons/si";
import { IconType } from "react-icons";
import { useLanguage, LangTransition } from "../../context/LanguageContext";

interface Project {
  id: number;
  nome: string;
  descricao: string;
  tecnologias: { icon: IconType; name: string }[];
  github?: string;
  demo?: string;
  featured?: boolean;
  wip?: boolean;
  badge?: string;
  scope?: string;
}



const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProjectCard = ({ projeto, dict }: { projeto: Project; dict: any }) => (
  <motion.div
    variants={cardVariant}
    whileHover={{ y: -4 }}
    className={`group relative flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 ${
      projeto.featured
        ? "border-indigo-500/25 bg-indigo-500/[0.04] hover:border-indigo-500/40"
        : "border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12]"
    }`}
  >
    {/* Badges */}
    <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 items-end">
      {projeto.featured && (
        <span className="text-[10px] px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-medium tracking-wide">
          {dict.projects.badges.featured}
        </span>
      )}
      {projeto.scope === "Nacional" && (
        <span className="text-[10px] px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/25 font-medium tracking-wide">
          🇧🇷 {dict.projects.badges.national}
        </span>
      )}
      {projeto.wip && (
        <span className="text-[10px] px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/25 font-medium tracking-wide">
          {dict.projects.badges.wip}
        </span>
      )}
    </div>

    {/* Placeholder visual */}
    <div className="relative h-36 overflow-hidden bg-gradient-to-br from-[#0f0f1a] to-[#13131f] border-b border-white/[0.04]">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex gap-4 opacity-[0.08]">
          {projeto.tecnologias.map(({ icon: Icon, name }) => (
            <Icon key={name} className="w-10 h-10 text-white" />
          ))}
        </div>
      </div>
      {projeto.featured && (
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-violet-900/10" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-80" />
    </div>

    {/* Body */}
    <div className="flex flex-col flex-1 p-6">
      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {projeto.tecnologias.map(({ icon: Icon, name }) => (
          <span
            key={name}
            className="flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-lg border border-white/[0.07] bg-white/[0.03] text-slate-400"
          >
            <Icon className="w-3 h-3 text-indigo-400" />
            {name}
          </span>
        ))}
      </div>

      <h3 className="text-white font-medium text-[15px] leading-snug mb-2 group-hover:text-indigo-200 transition-colors">
        {projeto.nome}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-6">
        {projeto.descricao}
      </p>

      {/* Links */}
      <div className="flex items-center gap-4 pt-4 border-t border-white/[0.05]">
        {projeto.github && (
          <a
            href={projeto.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-slate-500 hover:text-white transition-colors"
          >
            <FaGithub className="w-3.5 h-3.5" />
            {dict.projects.links.source}
          </a>
        )}
        {projeto.demo && !projeto.wip && (
          <a
            href={projeto.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-slate-500 hover:text-indigo-400 transition-colors ml-auto"
          >
            <FaExternalLinkAlt className="w-3 h-3" />
            {dict.projects.links.demo}
          </a>
        )}
        {projeto.wip && (
          <span className="text-xs text-slate-700 ml-auto italic">{dict.projects.links.wip}</span>
        )}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const { dict } = useLanguage();

  const projetos: Project[] = [
    {
      id: 1,
      nome: dict.projects.items.sgc.name,
      descricao: dict.projects.items.sgc.desc,
      tecnologias: [
        { icon: SiDjango, name: "Django" },
        { icon: SiPostgresql, name: "PostgreSQL" },
      ],
      github: "https://github.com/PhTheDev/sgc",
      demo: "https://sgc.crmvgo.org.br",
      featured: true,
    },
    {
      id: 2,
      nome: dict.projects.items.sgap.name,
      descricao: dict.projects.items.sgap.desc,
      tecnologias: [
        { icon: SiNextdotjs, name: "Next.js" },
        { icon: SiTailwindcss, name: "TailwindCSS" },
        { icon: SiDjango, name: "Django" },
        { icon: SiPostgresql, name: "PostgreSQL" },
      ],
      demo: "https://sgap.crmvgo.org.br",
      featured: true,
      scope: "Nacional",
    },
    {
      id: 3,
      nome: dict.projects.items.selecao.name,
      descricao: dict.projects.items.selecao.desc,
      tecnologias: [
        { icon: SiNextdotjs, name: "Next.js" },
        { icon: SiTailwindcss, name: "TailwindCSS" },
        { icon: SiDjango, name: "Django" },
        { icon: SiPostgresql, name: "PostgreSQL" },
      ],
      demo: "https://selecao.crmvgo.org.br",
      scope: "Nacional",
    },
    {
      id: 4,
      nome: dict.projects.items.sgd.name,
      descricao: dict.projects.items.sgd.desc,
      tecnologias: [
        { icon: SiDjango, name: "Django" },
        { icon: SiPostgresql, name: "PostgreSQL" },
      ],
      demo: "https://sgd.crmvgo.org.br",
    },
    {
      id: 5,
      nome: dict.projects.items.sgi.name,
      descricao: dict.projects.items.sgi.desc,
      tecnologias: [
        { icon: SiNextdotjs, name: "Next.js" },
        { icon: SiTailwindcss, name: "TailwindCSS" },
        { icon: SiDjango, name: "Django" },
        { icon: SiPostgresql, name: "PostgreSQL" },
      ],
      wip: true,
      badge: "Em breve",
    },
    {
      id: 6,
      nome: dict.projects.items.portfolio.name,
      descricao: dict.projects.items.portfolio.desc,
      tecnologias: [
        { icon: SiNextdotjs, name: "Next.js" },
        { icon: SiTailwindcss, name: "TailwindCSS" },
      ],
      github: "https://github.com/PhTheDev",
    },
  ];

  return (
    <section id="projects" className="relative py-24 bg-[#0a0a0f] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-indigo-500/30 to-transparent" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-violet-600/8 rounded-full blur-[100px]" />
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
          <LangTransition>
          <p className="text-xs font-mono text-indigo-400 tracking-[0.2em] uppercase mb-3">
            {dict.projects.sectionTitle}
          </p>
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-4xl font-semibold text-white tracking-tight mb-4">
                {dict.projects.title}
              </h2>
              <div className="w-8 h-0.5 bg-indigo-500 rounded-full" />
            </div>
            <a
              href="https://github.com/PhTheDev"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 text-xs text-slate-500 hover:text-indigo-400 transition-colors mb-4"
            >
              {dict.projects.viewAllGithub}
              <FaExternalLinkAlt className="w-3 h-3" />
            </a>
          </div>
          <p className="text-slate-600 text-sm mt-4 max-w-lg">
            {dict.projects.description}
          </p>
          </LangTransition>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projetos.map((p) => (
            <ProjectCard key={p.id} projeto={p} dict={dict} />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/PhTheDev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors"
          >
            <FaGithub className="w-4 h-4" />
            {dict.projects.moreOnGithub}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
