"use client";

import { Github, Linkedin, Instagram } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import Reveal from "./Reveal";

const EMAIL = "phthedev@gmail.com";
export const socials = [
  { href: "https://github.com/PhTheDev", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/pedro-henrique-faria-6b22932a7/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.instagram.com/phfaria02/", icon: Instagram, label: "Instagram" },
];

export default function Contact() {
  const { dict } = useLanguage();
  const c = dict.contact;

  return (
    <section id="contact" className="flex min-h-[100svh] flex-col justify-between bg-[#6d4de0] px-[var(--gutter)] pb-[var(--gutter)] pt-24 text-accent-ink">
      <Reveal>
        <p className="max-w-md text-[clamp(1.25rem,1.5vw,1.5rem)] font-medium leading-snug">{c.sentence}</p>
      </Reveal>

      <Reveal>
        <a
          href={`mailto:${EMAIL}`}
          className="display block break-words text-[17vw] leading-[0.9] md:whitespace-nowrap md:text-[10.6vw] transition-colors duration-500 hover:text-ink"
        >
          phthedev
          <br className="md:hidden" />
          @gmail.com
        </a>
      </Reveal>

      <Reveal className="flex flex-col justify-between gap-6 text-base font-medium md:flex-row md:items-end">
        <p>
          <a href="https://wa.me/5562999328204" target="_blank" rel="noopener noreferrer" className="link hover:!text-background">{c.phone}</a>
          <br />
          {c.city}
        </p>
        <ul className="flex gap-6">
          {socials.map(({ href, icon: Icon, label }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer" className="link hover:!text-background inline-flex items-center gap-2">
                <Icon size={18} strokeWidth={1.75} /> {label}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
