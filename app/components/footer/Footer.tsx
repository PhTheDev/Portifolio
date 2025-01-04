'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/PhTheDev",
      label: "GitHub"
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/pedro-henrique-faria-6b22932a7/",
      label: "LinkedIn"
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/phfaria02/",
      label: "Instagram"
    }
  ];

  return (
    <footer className="relative bg-gray-900/50 border-t border-gray-800/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="text-center md:text-left">
            <Link href="/">
              <h3 className="text-2xl font-bold">
                <span className="text-[var(--accent)]">&lt;/</span>
                PH
                <span className="text-[var(--accent)]">&gt;</span>
              </h3>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="text-center">
            <ul className="flex justify-center space-x-6">
              {['Início', 'Sobre', 'Projetos', 'Contato'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-[var(--accent)] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end space-x-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-[var(--accent)] transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800/50 text-center text-gray-400">
          <p>
            © {currentYear} Pedro Henrique. Todos os direitos reservados.
          </p>
          <p className="mt-2 text-sm">
            Desenvolvido com 
            <span className="text-[var(--accent)]"> ❤ </span>
            usando Next.js e TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
