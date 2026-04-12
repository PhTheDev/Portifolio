"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

const BrazilFlag = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 22 15"
    className="w-5 h-[14px] rounded-[2px]"
    aria-label="Bandeira do Brasil"
  >
    {/* Green background */}
    <rect width="22" height="15" fill="#009c3b" />
    {/* Yellow diamond */}
    <polygon points="11,1.5 20.5,7.5 11,13.5 1.5,7.5" fill="#FFDF00" />
    {/* Blue circle */}
    <circle cx="11" cy="7.5" r="3.6" fill="#002776" />
    {/* White band across the circle */}
    <rect x="7.4" y="6.9" width="7.2" height="1.2" fill="white" />
  </svg>
);

const USAFlag = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 22 15"
    className="w-5 h-[14px] rounded-[2px]"
    aria-label="USA Flag"
  >
    {/* White background */}
    <rect width="22" height="15" fill="#fff" />
    {/* 7 Red stripes */}
    {[0, 2, 4, 6, 8, 10, 12].map((y) => (
      <rect key={y} x="0" y={y} width="22" height="1" fill="#B22234" />
    ))}
    {/* Blue canton */}
    <rect width="9" height="8" fill="#3C3B6E" />
    {/* Stars (simplified) */}
    {Array.from({ length: 9 }, (_, row) =>
      Array.from({ length: row % 2 === 0 ? 5 : 4 }, (_, col) => (
        <circle
          key={`${row}-${col}`}
          cx={row % 2 === 0 ? 0.9 + col * 1.8 : 1.8 + col * 1.8}
          cy={0.9 + row * 0.85}
          r="0.3"
          fill="white"
        />
      ))
    )}
  </svg>
);

export const LanguageSwitch = () => {
  const { language, toggleLanguage } = useLanguage();
  const isEN = language === "en";

  return (
    <motion.button
      onClick={toggleLanguage}
      aria-label={isEN ? "Switch to Portuguese" : "Mudar para Inglês"}
      title={isEN ? "Switch to Portuguese" : "Mudar para Inglês"}
      className="relative flex items-center gap-1.5 px-1.5 py-1 rounded-full border border-white/[0.10] bg-white/[0.04] hover:border-indigo-400/40 hover:bg-white/[0.08] transition-all duration-200 select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
    >
      {/* Track */}
      <div className="relative flex items-center w-[52px] h-6">
        {/* Sliding pill — moves behind the flags */}
        <motion.div
          layout
          className="absolute top-0.5 w-5 h-5 rounded-full bg-indigo-500/80 shadow-[0_0_8px_rgba(99,102,241,0.5)]"
          animate={{ left: isEN ? "calc(100% - 22px)" : "1px" }}
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />

        {/* Brazil flag */}
        <div className="relative z-10 flex items-center justify-center w-6 h-6">
          <motion.div
            animate={{ opacity: isEN ? 0.45 : 1, scale: isEN ? 0.88 : 1 }}
            transition={{ duration: 0.25 }}
          >
            <BrazilFlag />
          </motion.div>
        </div>

        {/* USA flag */}
        <div className="relative z-10 ml-auto flex items-center justify-center w-6 h-6">
          <motion.div
            animate={{ opacity: isEN ? 1 : 0.45, scale: isEN ? 1 : 0.88 }}
            transition={{ duration: 0.25 }}
          >
            <USAFlag />
          </motion.div>
        </div>
      </div>

      {/* Active lang label */}
      <AnimatePresence mode="wait">
        <motion.span
          key={language}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.18 }}
          className="text-[10px] font-semibold text-slate-300 uppercase tracking-widest w-5 text-center"
        >
          {isEN ? "EN" : "PT"}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
};

export default LanguageSwitch;
