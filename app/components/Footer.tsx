"use client";

import { useLanguage } from "../context/LanguageContext";
import { Logo } from "./Nav";
import { socials } from "./Contact";

export default function Footer() {
  const { dict } = useLanguage();
  return (
    <footer className="overflow-hidden bg-ink px-[var(--gutter)] pt-16 text-background">
      <div className="flex flex-wrap items-start justify-between gap-8">
        <Logo className="!text-background [&_span]:!text-background" />
        <ul className="flex gap-6 text-base font-medium">
          {socials.map(({ href, label }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer" className="link hover:!text-background">{label}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6 flex flex-wrap justify-between gap-4 text-sm font-medium">
        <p>{dict.footer.legal}</p>
        <a href="#top" className="link hover:!text-background">{dict.footer.top}</a>
      </div>
      <p className="mt-6 max-w-3xl text-sm">
        Fotos / Photos: Friduxa (
        <a className="link hover:!text-background" href="https://commons.wikimedia.org/w/index.php?curid=69662989">Palácio</a>,{" "}
        <a className="link hover:!text-background" href="https://commons.wikimedia.org/w/index.php?curid=69662987">Coreto</a>
        ), CC BY-SA 4.0; Boaventuravinicius (
        <a className="link hover:!text-background" href="https://commons.wikimedia.org/w/index.php?curid=81595457">Goiânia</a>
        ), CC BY-SA 3.0. Wikimedia Commons.
      </p>
      {/* O nome volta em largura total; o corte é na base, nunca nas letras do topo */}
      <p className="display mt-10 translate-y-[12%] whitespace-nowrap text-[16.2vw] leading-[0.82]" aria-hidden>
        Pedro Henrique
      </p>
    </footer>
  );
}
