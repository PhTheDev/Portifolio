"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { dictionaries, Language, Dictionary } from "../i18n/dictionaries";

interface LanguageContextProps {
  language: Language;
  dict: Dictionary;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("pt");

  useEffect(() => {
    const savedLang = localStorage.getItem("portfolio-lang") as Language;
    if (savedLang === "pt" || savedLang === "en") {
      setLanguage(savedLang);
    } else {
      const browserLang = navigator.language.split("-")[0];
      if (browserLang === "en") {
        setLanguage("en");
      }
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const newLang = prev === "pt" ? "en" : "pt";
      localStorage.setItem("portfolio-lang", newLang);
      return newLang;
    });
  };

  const dict = dictionaries[language];

  return (
    <LanguageContext.Provider value={{ language, dict, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

/**
 * LangTransition — wrap any text/section that should animate on language change.
 * Uses AnimatePresence + framer motion with the current language as the key,
 * so every switch triggers a fade+slide animation.
 */
export const LangTransition = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const { language } = useLanguage();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={language}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.22, ease: "easeInOut" }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
