'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaBriefcase, FaServer } from 'react-icons/fa';
import { SiDjango, SiReact, SiNextdotjs, SiTailwindcss, SiPython, SiGit, SiPostgresql, SiDocker, SiLinux, SiJavascript } from 'react-icons/si';
import { BiSolidUser } from 'react-icons/bi';

const About = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Perfil', icon: <BiSolidUser className="text-xl" /> },
    { id: 'education', label: 'Educação', icon: <FaGraduationCap className="text-xl" /> },
    { id: 'experience', label: 'Experiência', icon: <FaBriefcase className="text-xl" /> },
    { id: 'skills', label: 'Habilidades', icon: <FaLaptopCode className="text-xl" /> },
  ];

  const skills = [
    { name: 'Django', icon: <SiDjango />, level: 'Intermediário' },
    { name: 'Next.js', icon: <SiNextdotjs />, level: 'Intermediário' },
    { name: 'React', icon: <SiReact />, level: 'Intermediário' },
    { name: 'Python', icon: <SiPython />, level: 'Intermediário' },
    { name: 'JavaScript', icon: <SiJavascript />, level: 'Intermediário' },
    { name: 'TailwindCSS', icon: <SiTailwindcss />, level: 'Intermediário' },
    { name: 'Git', icon: <SiGit />, level: 'Intermediário' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, level: 'Intermediário' },
    { name: 'Docker', icon: <SiDocker />, level: 'Intermediário' },
    { name: 'Linux', icon: <SiLinux />, level: 'Intermediário' },
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <section id="about" className="min-h-screen py-12 sm:py-16 md:py-24 bg-gradient-to-b from-[var(--background)] to-[var(--background-dark)]">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 text-center bg-gradient-to-r from-[var(--accent)] to-purple-600 text-transparent bg-clip-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Sobre Mim
        </motion.h2>

        {/* Tabs Navigation */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 sm:px-6 py-3 sm:py-4 rounded-xl transition-all flex items-center justify-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-[var(--accent)] text-white shadow-lg shadow-[var(--accent)]/20'
                  : 'bg-gray-800/30 hover:bg-gray-800/50 backdrop-blur-sm'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.icon}
              <span className="text-sm sm:text-base">{tab.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div 
          className="bg-gray-900/40 rounded-2xl p-4 sm:p-6 md:p-8 backdrop-blur-md border border-gray-800/50 shadow-xl"
          variants={fadeIn}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <motion.div className="space-y-4 sm:space-y-6" variants={fadeIn}>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-[var(--accent)] flex items-center gap-3">
                <BiSolidUser /> Quem Sou Eu?
              </h3>
              <div className="space-y-4 text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
                <p>
                  Olá! Meu nome é <span className="text-[var(--accent)]">Pedro Henrique Faria dos Santos Soares</span>, 
                  nasci em 2004 e tenho 20 anos. Sou um desenvolvedor Full Stack em início de carreira, 
                  apaixonado por criar soluções tecnológicas completas e eficientes.
                </p>
              </div>
            </motion.div>
          )}

          {/* Education Tab */}
          {activeTab === 'education' && (
            <motion.div className="space-y-4 sm:space-y-6" variants={fadeIn}>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-[var(--accent)] flex items-center gap-3">
                <FaGraduationCap /> Educação
              </h3>
              <div className="space-y-4">
                <div className="p-4 sm:p-6 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-[var(--accent)]/50 transition-all">
                  <h4 className="text-lg sm:text-xl font-bold flex items-center gap-2">
                    <FaGraduationCap className="text-[var(--accent)]" />
                    Engenharia da Computação
                  </h4>
                  <p className="text-base sm:text-lg text-gray-300 mt-2">
                    Pontifícia Universidade Católica de Goiás (PUC-GO)
                  </p>
                  <p className="text-sm sm:text-base text-gray-400 mt-1">
                    2023 - Presente • 5º período
                  </p>
                  <ul className="mt-4 text-sm sm:text-base text-gray-300 list-disc list-inside space-y-2">
                    <li>Participação em projetos de pesquisa e desenvolvimento</li>
                    <li>Foco em programação e desenvolvimento de software</li>
                    <li>Estudo de arquitetura de computadores e sistemas embarcados</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <motion.div className="space-y-4 sm:space-y-6" variants={fadeIn}>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-[var(--accent)] flex items-center gap-3">
                <FaBriefcase /> Experiência
              </h3>
              <div className="space-y-4">
                <div className="p-4 sm:p-6 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-[var(--accent)]/50 transition-all">
                  <h4 className="text-lg sm:text-xl font-bold flex items-center gap-2">
                    <FaServer className="text-[var(--accent)]" />
                    Desenvolvedor Full Stack - Estagiário
                  </h4>
                  <p className="text-base sm:text-lg text-gray-300 mt-2">
                    Conselho Regional de Medicina Veterinária de Goiás (CRMV-GO)
                  </p>
                  <p className="text-sm sm:text-base text-gray-400 mt-1">
                    2024 - Presente
                  </p>
                  <ul className="mt-4 text-sm sm:text-base text-gray-300 list-disc list-inside space-y-2">
                    <li>Desenvolvimento de sistemas com Django e Next.js</li>
                    <li>Criação e manutenção de APIs RESTful</li>
                    <li>Implementação de interfaces responsivas e modernas</li>
                    <li>Integração de sistemas e banco de dados</li>
                    <li>Primeiro contato profissional com desenvolvimento Full Stack</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <motion.div className="space-y-4 sm:space-y-6" variants={fadeIn}>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-[var(--accent)] flex items-center gap-3">
                <FaLaptopCode /> Habilidades
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="p-3 sm:p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 transition-all"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl mb-2">
                      <span className="text-[var(--accent)]">{skill.icon}</span>
                      <span className="font-semibold">{skill.name}</span>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-400">
                      {skill.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
