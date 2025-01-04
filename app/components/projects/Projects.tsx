'use client';

import { motion } from 'framer-motion';
import Image, { StaticImageData } from "next/image";
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiDjango, SiNextdotjs, SiTailwindcss, SiPostgresql } from 'react-icons/si';
import sgcImage from './images/sgc.png';
import { IconType } from 'react-icons';

interface Project {
  id: number;
  nome: string;
  descricao: string;
  imagem: StaticImageData;
  tecnologias: IconType[];
  github: string;
  demo: string;
}

interface ProjectCardProps {
  projeto: Project;
}

const ProjectCard = ({ projeto }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-xl bg-gray-900/50 border border-gray-800/50 backdrop-blur-sm"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={projeto.imagem}
          alt={`Screenshot of ${projeto.nome}`}
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          {projeto.tecnologias.map((Tech, index) => (
            <Tech key={index} className="text-[var(--accent)] text-xl" />
          ))}
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--accent)] transition-colors">
          {projeto.nome}
        </h3>

        <p className="text-gray-400 mb-4">
          {projeto.descricao}
        </p>

        {/* Links */}
        <div className="flex gap-4">
          {projeto.github && (
            <a
              href={projeto.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub className="text-lg" />
              Código
            </a>
          )}
          {projeto.demo && (
            <a
              href={projeto.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <FaExternalLinkAlt className="text-lg" />
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projetos: Project[] = [
    {
      id: 1,
      nome: "SGC - Sistema de Gerenciamento de Chamados",
      descricao: "Sistema completo de gerenciamento de chamados de TI desenvolvido para o CRMV-GO, com funcionalidades de tracking, priorização e relatórios.",
      imagem: sgcImage,
      tecnologias: [SiDjango, SiPostgresql],
      github: "https://github.com/PhTheDev/sgc",
      demo: "https://github.com/PhTheDev/sgc",
    }
  ];

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] to-gray-900">
        <div className="absolute top-40 -left-20 w-72 h-72 bg-[var(--accent)]/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-40 -right-20 w-72 h-72 bg-purple-500/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-[var(--accent)] to-purple-500 bg-clip-text text-transparent">
            Meus Projetos
          </h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-[var(--accent)] to-purple-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
            Uma seleção dos meus projetos mais recentes, demonstrando minhas habilidades em desenvolvimento full-stack.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projetos.map((projeto) => (
            <ProjectCard key={projeto.id} projeto={projeto} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
