"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center py-20 overflow-hidden bg-gradient-to-b from-gray-900 to-[var(--background)]">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-20 left-0 w-72 h-72 bg-[var(--accent)]/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-72 h-72 bg-purple-500/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="space-y-8">
              {/* Greeting */}
              <div className="inline-block animate-fade-in">
                <span className="px-4 py-2 rounded-full border border-gray-700 bg-gray-800/50 text-sm font-medium text-gray-300">
                  Desenvolvedor Full Stack
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="block text-white animate-fade-in">
                  Olá, eu sou
                </span>
                <span className="block mt-2 bg-gradient-to-r from-[var(--accent)] to-purple-500 text-transparent bg-clip-text animate-fade-in animation-delay-200">
                  Pedro Henrique
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg text-gray-400 max-w-2xl animate-fade-in animation-delay-400">
                Desenvolvedor Full Stack focado em criar soluções tecnológicas
                eficientes e modernas. Cursando Engenharia da Computação na PUC-GO
                e atuando como estagiário no CRMV-GO, desenvolvendo sistemas com
                Django e Next.js.
              </p>

              {/* Social Links */}
              <div className="flex gap-4 justify-center lg:justify-start animate-fade-in animation-delay-600">
                {[
                  {
                    href: "https://github.com/PhTheDev",
                    icon: faGithub,
                    label: "GitHub",
                  },
                  {
                    href: "https://www.linkedin.com/in/pedro-henrique-faria-6b22932a7/",
                    icon: faLinkedin,
                    label: "LinkedIn",
                  },
                  {
                    href: "https://www.instagram.com/phfaria02/",
                    icon: faInstagram,
                    label: "Instagram",
                  },
                ].map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    aria-label={social.label}
                    className="group relative p-4 bg-gray-800/50 rounded-xl hover:bg-[var(--accent)]/10 transition-all duration-300"
                  >
                    <FontAwesomeIcon
                      icon={social.icon}
                      className="w-6 h-6 text-[var(--accent)] group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 border border-gray-700 group-hover:border-[var(--accent)] rounded-xl transition-colors duration-300"></div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-72 h-72 lg:w-96 lg:h-96 animate-fade-in animation-delay-800">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)] to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative rounded-full overflow-hidden border-2 border-gray-700 p-2">
              <Image
                src="/images/foto.png"
                alt="Pedro Henrique"
                width={400}
                height={400}
                className="rounded-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
