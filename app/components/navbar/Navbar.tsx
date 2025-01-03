"use client"; // Necessário para usar hooks como useState

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-transparent text-white fixed w-full z-50 shadow-lg transition-all">
      <div className="container mx-auto flex justify-between items-center py-4 px-8">
        {/* Logo */}
        <div className="text-3xl font-semibold text-white tracking-tight hover:text-blue-500 transition-colors duration-300">
          <Link href="/">
            <h1>
              <span className="text-blue-500">&lt;/</span>PH
              <span className="text-blue-500">&gt;</span>
            </h1>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navbar Links */}
        <ul
          className={`md:flex md:items-center md:gap-8 font-medium text-lg ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {[
            { label: "Início", href: "home" },
            { label: "Sobre", href: "about" },
            { label: "Projetos", href: "projects" },
            { label: "Habilidades", href: "skills" },
            { label: "Contato", href: "contact" },
          ].map(({ label, href }) => (
            <li key={href}>
              <Link
                href={`#${href}`}
                className="text-white hover:text-blue-500 transition-colors duration-300"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
