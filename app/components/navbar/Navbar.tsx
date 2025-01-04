"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-gray-900/90 backdrop-blur-md border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center py-4 px-4 sm:px-8">
        {/* Logo */}
        <div className="relative group">
          <Link href="/">
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              <span className="text-[var(--accent)] group-hover:text-white transition-colors duration-300">&lt;/</span>
              <span className="group-hover:text-[var(--accent)] transition-colors duration-300">PH</span>
              <span className="text-[var(--accent)] group-hover:text-white transition-colors duration-300">&gt;</span>
            </h1>
          </Link>
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent)] group-hover:w-full transition-all duration-300"></div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative group p-2 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
        >
          <div className="relative flex overflow-hidden items-center justify-center w-6 h-6">
            <div className={`transform transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            } absolute w-6 h-0.5 bg-white rounded`}></div>
            <div className={`transform transition-all duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            } absolute w-6 h-0.5 bg-white rounded`}></div>
            <div className={`transform transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            } absolute w-6 h-0.5 bg-white rounded`}></div>
          </div>
        </button>

        {/* Navbar Links */}
        <div
          className={`w-full md:w-auto md:flex transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row items-center gap-2 md:gap-8 mt-4 md:mt-0">
            {[
              { label: "Início", href: "home" },
              { label: "Sobre", href: "about" },
              { label: "Projetos", href: "projects" },
              { label: "Contato", href: "contact" },
            ].map(({ label, href }) => (
              <li key={href} className="w-full md:w-auto relative group">
                <Link
                  href={`#${href}`}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-4 text-center text-gray-300 hover:text-white transition-colors duration-300 rounded-lg group-hover:bg-gray-800/30"
                >
                  {label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--accent)] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
