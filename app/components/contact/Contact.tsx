"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { FaWhatsapp, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

interface ContactMethod {
  icon: IconType;
  title: string;
  value: string;
  href: string;
  color: string;
}

const contactMethods: ContactMethod[] = [
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    value: "(62) 99932-8204",
    href: "https://wa.me/5562999328204",
    color: "emerald",
  },
  {
    icon: FaEnvelope,
    title: "Email",
    value: "phthedev@gmail.com",
    href: "mailto:phthedev@gmail.com",
    color: "indigo",
  },
  {
    icon: FaGithub,
    title: "GitHub",
    value: "PhTheDev",
    href: "https://github.com/PhTheDev",
    color: "slate",
  },
  {
    icon: FaLinkedin,
    title: "LinkedIn",
    value: "Pedro Henrique",
    href: "https://www.linkedin.com/in/pedro-henrique-faria-6b22932a7/",
    color: "blue",
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string; hoverBg: string; hoverBorder: string }> = {
  emerald: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    border: "border-emerald-500/20",
    hoverBg: "hover:bg-emerald-500/[0.06]",
    hoverBorder: "hover:border-emerald-500/30",
  },
  indigo: {
    bg: "bg-indigo-500/10",
    text: "text-indigo-400",
    border: "border-indigo-500/20",
    hoverBg: "hover:bg-indigo-500/[0.06]",
    hoverBorder: "hover:border-indigo-500/30",
  },
  slate: {
    bg: "bg-white/[0.06]",
    text: "text-slate-300",
    border: "border-white/[0.08]",
    hoverBg: "hover:bg-white/[0.08]",
    hoverBorder: "hover:border-white/[0.15]",
  },
  blue: {
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    border: "border-blue-500/20",
    hoverBg: "hover:bg-blue-500/[0.06]",
    hoverBorder: "hover:border-blue-500/30",
  },
};

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 bg-[#0a0a0f] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-indigo-500/30 to-transparent" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-indigo-600/6 rounded-full blur-[120px]" />
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
            03. Contato
          </p>
          <h2 className="text-4xl font-semibold text-white tracking-tight mb-4">
            Vamos conversar
          </h2>
          <div className="w-8 h-0.5 bg-indigo-500 rounded-full mb-6" />
          <p className="text-slate-500 text-[15px] max-w-md leading-relaxed">
            Estou aberto a novas oportunidades, projetos freelance e colaborações.
            Pode me chamar por qualquer canal abaixo.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {contactMethods.map((method) => {
            const c = colorMap[method.color];
            return (
              <motion.a
                key={method.title}
                variants={item}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className={`group flex flex-col gap-4 p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] ${c.hoverBg} ${c.hoverBorder} transition-all duration-300`}
              >
                <div className={`w-10 h-10 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center`}>
                  <method.icon className={`w-4 h-4 ${c.text}`} />
                </div>
                <div>
                  <p className="text-[11px] text-slate-600 uppercase tracking-widest mb-1">{method.title}</p>
                  <p className="text-sm text-slate-300 font-medium group-hover:text-white transition-colors">{method.value}</p>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative rounded-2xl border border-indigo-500/20 bg-indigo-500/[0.04] p-8 text-center overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Pronto para transformar suas ideias em realidade?
          </h3>
          <p className="text-slate-500 text-sm mb-6 max-w-sm mx-auto">
            Estou sempre disponível para discutir novos projetos e oportunidades.
          </p>
          <a
            href="mailto:phthedev@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white text-sm font-medium transition-all duration-200 hover:-translate-y-px"
          >
            <FaEnvelope className="w-3.5 h-3.5" />
            Enviar mensagem
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
