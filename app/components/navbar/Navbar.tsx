'use client'; // Necessário para usar hooks como useState

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-transparent text-white fixed w-full z-50 shadow-lg transition-all">
      <div className="container mx-auto flex justify-between items-center py-4 px-8">
        {/* Logo */}
        <div className="text-3xl font-semibold text-white tracking-tight hover:text-blue-500 transition-colors duration-300">
          <Link href="/">
            &lt;/PH&gt;
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
          className={`md:flex md:items-center md:gap-8 font-medium text-lg ${isOpen ? 'block' : 'hidden'}`}
        >
          {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-blue-500 transition-colors duration-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
