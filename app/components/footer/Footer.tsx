"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: FaGithub, href: "https://github.com/PhTheDev", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/pedro-henrique-faria-6b22932a7/", label: "LinkedIn" },
  { icon: FaInstagram, href: "https://www.instagram.com/phfaria02/", label: "Instagram" },
];

const links = ["Início", "Sobre", "Projetos", "Contato"];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="font-mono text-base">
            <span className="text-indigo-400">&lt;</span>
            <span className="text-white font-semibold">PH</span>
            <span className="text-indigo-400">/&gt;</span>
          </Link>

          {/* Links */}
          <nav className="flex items-center gap-6">
            {links.map((label) => (
              <Link
                key={label}
                href={`#${label.toLowerCase()}`}
                className="text-xs text-slate-600 hover:text-slate-400 transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/[0.06] text-slate-600 hover:text-slate-300 hover:border-white/[0.12] transition-all"
              >
                <s.icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-700">
          <p>© {year} Pedro Henrique. Todos os direitos reservados.</p>
          <p>Desenvolvido com <span className="text-indigo-500">♥</span> usando Next.js e TailwindCSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
