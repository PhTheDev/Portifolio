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
          ? "bg-[var(--background)] shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex flex-wrap justify-between items-center py-4 px-4 sm:px-8">
        {/* Logo */}
        <div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight hover:text-[var(--accent)] transition-colors duration-300">
          <Link href="/">
            <h1>
              <span className="text-[var(--accent)]">&lt;/</span>PH
              <span className="text-[var(--accent)]">&gt;</span>
            </h1>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Navbar Links */}
        <div
          className={`w-full md:w-auto md:flex transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mt-4 md:mt-0 font-medium text-base sm:text-lg">
            {[
              { label: "Início", href: "home" },
              { label: "Sobre", href: "about" },
              { label: "Projetos", href: "projects" },
              { label: "Habilidades", href: "skills" },
              { label: "Contato", href: "contact" },
            ].map(({ label, href }) => (
              <li key={href} className="w-full md:w-auto">
                <Link
                  href={`#${href}`}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-4 text-center text-white hover:text-[var(--accent)] transition-colors duration-300 hover:bg-gray-800/50 md:hover:bg-transparent rounded-lg"
                >
                  {label}
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
