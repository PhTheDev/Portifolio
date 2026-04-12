"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { LanguageSwitch } from "./LanguageSwitch";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { dict, language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Variantes para animações
  const navVariants = {
    top: { backgroundColor: "rgba(17, 24, 39, 0)", backdropFilter: "blur(0px)" },
    scrolled: { backgroundColor: "rgba(17, 24, 39, 0.9)", backdropFilter: "blur(8px)" },
  };

  const logoLetterVariants = {
    rest: { color: "var(--accent)" },
    hover: { color: "#ffffff", transition: { duration: 0.3 } },
  };

  const underlineVariants = {
    rest: { width: 0 },
    hover: { width: "100%", transition: { duration: 0.3 } },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
  };

  const linkItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.3 },
    }),
  };

  return (
    <motion.nav
      initial="top"
      animate={scrolled || isOpen ? "scrolled" : "top"}
      variants={navVariants}
      className="fixed w-full z-50 border-b border-gray-800/50"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center py-4 px-4 sm:px-8">
        {/* Logo */}
        <motion.div
          className="relative group"
          whileHover="hover"
          initial="rest"
          animate="rest"
        >
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
        </motion.div>

        {/* Actions (Language Toggle + Mobile Menu Button) */}
        <div className="flex items-center gap-3">
          <LanguageSwitch />
          <motion.button
            className="md:hidden relative p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle Navigation"
            whileTap={{ scale: 0.95 }}
          >
          <div className="relative flex overflow-hidden items-center justify-center w-6 h-6">
            <motion.div
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute w-6 h-0.5 bg-white rounded"
            />
            <motion.div
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute w-6 h-0.5 bg-white rounded"
            />
            <motion.div
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute w-6 h-0.5 bg-white rounded"
            />
          </div>
        </motion.button>
        </div>

        {/* Navbar Links (Desktop) */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-8">
            {[
              { label: dict.navbar.home, href: "home" },
              { label: dict.navbar.about, href: "about" },
              { label: dict.navbar.projects, href: "projects" },
              { label: dict.navbar.contact, href: "contact" },
            ].map(({ label, href }) => (
              <motion.li
                key={href}
                className="relative group"
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                <Link
                  href={`#${href}`}
                  className="py-2 text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {label}
                </Link>
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-[var(--accent)]"
                  variants={underlineVariants}
                />
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={mobileMenuVariants}
              className="w-full md:hidden overflow-hidden"
            >
              <ul className="flex flex-col items-center gap-2 mt-4 pb-2">
                {[
                  { label: dict.navbar.home, href: "home" },
                  { label: dict.navbar.about, href: "about" },
                  { label: dict.navbar.projects, href: "projects" },
                  { label: dict.navbar.contact, href: "contact" },
                ].map(({ label, href }, index) => (
                  <motion.li
                    key={href}
                    className="w-full"
                    custom={index}
                    variants={linkItemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    <Link
                      href={`#${href}`}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 px-4 text-center text-gray-300 hover:text-white hover:bg-gray-800/30 rounded-lg transition-colors"
                    >
                      {label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;