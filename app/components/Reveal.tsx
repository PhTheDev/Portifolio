"use client";

import { motion } from "framer-motion";

export const ease = [0.32, 0.72, 0, 1] as const;

/** Entrada ao rolar: sobe e aparece, uma vez. Em movimento reduzido o CSS global zera a duração. */
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
