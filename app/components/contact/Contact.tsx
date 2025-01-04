'use client';

import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import { FaWhatsapp, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

interface ContactCardProps {
  icon: IconType;
  title: string;
  value: string;
  href: string;
}

const ContactCard = ({ icon: Icon, title, value, href }: ContactCardProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group p-6 rounded-xl bg-gray-800/30 border border-gray-700/50 hover:border-[var(--accent)] transition-all duration-300"
    >
      <div className="flex items-center gap-4">
        <div className="p-4 rounded-full bg-[var(--accent)]/10 group-hover:bg-[var(--accent)]/20 transition-all">
          <Icon className="w-6 h-6 text-[var(--accent)]" />
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-1 text-white group-hover:text-[var(--accent)] transition-colors">
            {title}
          </h3>
          <p className="text-gray-400 group-hover:text-white transition-colors">
            {value}
          </p>
        </div>
      </div>
    </motion.a>
  );
};

const Contact = () => {
  const contactMethods = [
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      value: "(62) 99932-8204",
      href: "https://wa.me/5562999328204"
    },
    {
      icon: FaEnvelope,
      title: "Email",
      value: "phthedev@gmail.com",
      href: "mailto:phthedev@gmail.com"
    },
    {
      icon: FaGithub,
      title: "GitHub",
      value: "PhTheDev",
      href: "https://github.com/PhTheDev"
    },
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      value: "Pedro Henrique",
      href: "https://www.linkedin.com/in/pedro-henrique-faria-6b22932a7/"
    }
  ];

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-[var(--background)]">
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
            Entre em Contato
          </h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-[var(--accent)] to-purple-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
            Estou disponível para novos projetos, colaborações e oportunidades.
            Vamos transformar suas ideias em realidade?
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {contactMethods.map((method, index) => (
            <ContactCard
              key={index}
              icon={method.icon}
              title={method.title}
              value={method.value}
              href={method.href}
            />
          ))}
        </motion.div>

        {/* Additional Contact Form or Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl bg-gray-900/50 border border-gray-800/50 backdrop-blur-sm text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Vamos Trabalhar Juntos?
          </h3>
          <p className="text-gray-400">
            Estou sempre aberto a discutir novos projetos e oportunidades de colaboração.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;