"use client";

import Image from "next/image";
import { GraduationCap, Mail, MapPin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import Reveal from "./Reveal";

const factIcons = [MapPin, GraduationCap, Mail];

export default function About() {
  const { dict } = useLanguage();
  const a = dict.about;

  return (
    <section id="about" className="px-[var(--gutter)] py-[clamp(96px,14vw,200px)]">
      <div className="grid gap-12 lg:grid-cols-12">
        <Reveal className="order-2 lg:order-1 lg:col-span-2">
          <dl className="grid grid-cols-1 gap-6 text-sm sm:grid-cols-3 lg:grid-cols-1">
            {a.facts.map((f, i) => {
              const Icon = factIcons[i];
              return (
              <div key={f.label}>
                <dt className="flex items-center gap-2 text-sm font-semibold text-accent"><Icon size={16} aria-hidden /> {f.label}</dt>
                <dd className="mt-1 text-base">{f.value}</dd>
              </div>
              );
            })}
          </dl>
        </Reveal>

        <div className="order-1 lg:order-2 lg:col-span-9 lg:col-start-4">
          <Reveal>
            <p className="text-[clamp(1.25rem,1.9vw,1.75rem)] leading-[1.3]">
              {/* O retrato abre o parágrafo como uma capitular: três linhas de altura */}
              <span className="float-left mr-4 mt-1 block h-[2.8em] w-[2.8em] md:h-[4.5em] md:w-[4.5em] overflow-hidden bg-accent">
                <Image
                  src="/images/foto.png"
                  alt=""
                  width={1792}
                  height={2390}
                  className="h-[140%] w-full object-cover object-top"
                />
              </span>
              <span className="font-semibold">{a.p1Name}</span>
              {a.p1}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-[clamp(1.25rem,1.5vw,1.5rem)] leading-snug">{a.p2}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
