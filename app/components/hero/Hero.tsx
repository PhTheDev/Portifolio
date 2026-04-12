"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

const stats = [
  { value: "1+", label: "Ano de exp." },
  { value: "3+", label: "Projetos" },
  { value: "10+", label: "Tecnologias" },
];

const socials = [
  { href: "https://github.com/PhTheDev", icon: faGithub, label: "GitHub" },
  { href: "https://www.linkedin.com/in/pedro-henrique-faria-6b22932a7/", icon: faLinkedin, label: "LinkedIn" },
  { href: "https://www.instagram.com/phfaria02/", icon: faInstagram, label: "Instagram" },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-[#0a0a0f]"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left */}
          <div className="flex-1 text-center lg:text-left">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03] mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-xs text-slate-400 tracking-wide">Disponível para oportunidades</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-[64px] font-semibold tracking-tight leading-[1.08] mb-6">
              <span className="block text-white">Pedro Henrique</span>
              <span className="block mt-1 bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Full Stack Dev
              </span>
            </h1>

            {/* Description */}
            <p className="text-base text-slate-500 leading-relaxed max-w-md mb-10 mx-auto lg:mx-0">
              Estudante de Engenharia da Computação na PUC-GO e estagiário no CRMV-GO.
              Construo sistemas completos com Django e Next.js, do backend ao frontend.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10">
              <Link
                href="#projects"
                className="px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white text-sm font-medium transition-all duration-200 hover:-translate-y-px"
              >
                Ver projetos
              </Link>
              <Link
                href="#contact"
                className="px-6 py-3 rounded-xl border border-white/[0.1] bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 text-sm font-medium transition-all duration-200"
              >
                Entrar em contato
              </Link>
            </div>

            {/* Socials */}
            <div className="flex gap-3 justify-center lg:justify-start">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  aria-label={s.label}
                  className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-slate-400 hover:text-white hover:border-indigo-400/40 hover:bg-indigo-400/10 transition-all duration-200"
                >
                  <FontAwesomeIcon icon={s.icon} className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col items-center gap-8">
            {/* Photo */}
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 blur-2xl opacity-20 scale-110" />
              <div className="relative w-56 h-56 lg:w-72 lg:h-72 rounded-full p-px bg-gradient-to-br from-indigo-500/50 via-violet-500/30 to-transparent">
                <div className="w-full h-full rounded-full overflow-hidden border border-white/[0.06]">
                  <Image
                    src="/images/foto.png"
                    alt="Pedro Henrique"
                    width={288}
                    height={288}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-6">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-semibold text-white tracking-tight">{s.value}</div>
                  <div className="text-xs text-slate-500 mt-0.5 whitespace-nowrap">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-white" />
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% center; }
          50% { background-position: 200% center; }
        }
        .animate-gradient { animation: gradient 4s linear infinite; }
      `}</style>
    </section>
  );
};

export default Hero;
