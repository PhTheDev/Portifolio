"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaBriefcase,
  FaServer,
} from "react-icons/fa";
import {
  SiDjango,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPython,
  SiGit,
  SiPostgresql,
  SiDocker,
  SiLinux,
  SiJavascript,
} from "react-icons/si";
import { BiSolidUser } from "react-icons/bi";

const About = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "Perfil", icon: <BiSolidUser /> },
    { id: "education", label: "Educação", icon: <FaGraduationCap /> },
    { id: "experience", label: "Experiência", icon: <FaBriefcase /> },
    { id: "skills", label: "Habilidades", icon: <FaLaptopCode /> },
  ];

  const skills = [
    { name: "Django", icon: <SiDjango />, level: "Intermediário" },
    { name: "Next.js", icon: <SiNextdotjs />, level: "Intermediário" },
    { name: "React", icon: <SiReact />, level: "Intermediário" },
    { name: "Python", icon: <SiPython />, level: "Intermediário" },
    { name: "JavaScript", icon: <SiJavascript />, level: "Intermediário" },
    { name: "TailwindCSS", icon: <SiTailwindcss />, level: "Intermediário" },
    { name: "Git", icon: <SiGit />, level: "Intermediário" },
    { name: "PostgreSQL", icon: <SiPostgresql />, level: "Intermediário" },
    { name: "Docker", icon: <SiDocker />, level: "Intermediário" },
    { name: "Linux", icon: <SiLinux />, level: "Intermediário" },
  ];

  return (
    <section id="about" className="relative min-h-screen py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-[var(--background)] to-[var(--background)]">
        <div className="absolute top-40 -left-20 w-72 h-72 bg-[var(--accent)]/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-40 -right-20 w-72 h-72 bg-purple-500/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-[var(--accent)] to-purple-500 bg-clip-text text-transparent">
            Sobre Mim
          </h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-[var(--accent)] to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center gap-3 px-6 py-3 rounded-xl text-sm font-medium
                transition-all duration-300 transform
                ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-[var(--accent)] to-purple-500 text-white scale-105 shadow-lg shadow-[var(--accent)]/20"
                    : "bg-gray-800/50 hover:bg-gray-800/70 backdrop-blur-sm"
                }
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-xl">{tab.icon}</span>
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Content Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-800/50 shadow-xl"
          >
            {/* Content based on active tab */}
            {activeTab === "profile" && (
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-[var(--accent)] flex items-center gap-3">
                  <BiSolidUser /> Quem Sou Eu?
                </h3>
                <p className="text-xl leading-relaxed text-gray-300">
                  Olá! Meu nome é{" "}
                  <span className="text-[var(--accent)] font-semibold">
                    Pedro Henrique Faria dos Santos Soares
                  </span>
                  , nasci em 2004 e tenho 20 anos. Sou um desenvolvedor Full
                  Stack em início de carreira, apaixonado por criar soluções
                  tecnológicas completas e eficientes.
                </p>
              </div>
            )}

            {activeTab === "skills" && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="group p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-[var(--accent)] transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl text-[var(--accent)] group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </span>
                      <div>
                        <h4 className="font-semibold">{skill.name}</h4>
                        <p className="text-sm text-gray-400">{skill.level}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === "education" && (
              <div className="space-y-8">
                <h3 className="text-3xl font-bold text-[var(--accent)] flex items-center gap-3">
                  <FaGraduationCap /> Educação
                </h3>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid gap-6"
                >
                  <div className="group p-6 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-[var(--accent)] transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-[var(--accent)]/10 rounded-lg">
                        <FaGraduationCap className="text-2xl text-[var(--accent)]" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-xl font-bold group-hover:text-[var(--accent)] transition-colors">
                          Engenharia da Computação
                        </h4>
                        <p className="text-lg text-gray-300">
                          Pontifícia Universidade Católica de Goiás (PUC-GO)
                        </p>
                        <p className="text-sm text-[var(--accent)]">
                          2023 - Presente • 5º período
                        </p>
                        <ul className="mt-4 space-y-2 text-gray-400">
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full"></span>
                            Participação em projetos de pesquisa e
                            desenvolvimento
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full"></span>
                            Foco em programação e desenvolvimento de software
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full"></span>
                            Estudo de arquitetura de computadores e sistemas
                            embarcados
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}

            {activeTab === "experience" && (
              <div className="space-y-8">
                <h3 className="text-3xl font-bold text-[var(--accent)] flex items-center gap-3">
                  <FaBriefcase /> Experiência
                </h3>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid gap-6"
                >
                  <div className="group p-6 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-[var(--accent)] transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-[var(--accent)]/10 rounded-lg">
                        <FaServer className="text-2xl text-[var(--accent)]" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <h4 className="text-xl font-bold group-hover:text-[var(--accent)] transition-colors">
                            Desenvolvedor Full Stack - Estagiário
                          </h4>
                          <span className="px-3 py-1 text-xs font-medium bg-[var(--accent)]/10 text-[var(--accent)] rounded-full">
                            Atual
                          </span>
                        </div>
                        <p className="text-lg text-gray-300">
                          Conselho Regional de Medicina Veterinária de Goiás
                          (CRMV-GO)
                        </p>
                        <p className="text-sm text-[var(--accent)]">
                          2024 - Presente
                        </p>
                        <ul className="mt-4 space-y-2 text-gray-400">
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full"></span>
                            Desenvolvimento de sistemas com Django e Next.js
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full"></span>
                            Criação e manutenção de APIs RESTful
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full"></span>
                            Implementação de interfaces responsivas e modernas
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full"></span>
                            Integração de sistemas e banco de dados
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full"></span>
                            Primeiro contato profissional com desenvolvimento
                            Full Stack
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default About;
