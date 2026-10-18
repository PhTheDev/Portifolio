"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import Reveal from "./Reveal";

export default function Place() {
  const { dict } = useLanguage();
  const p = dict.place;

  return (
    <section className="px-[var(--gutter)] py-[clamp(64px,10vw,140px)]">
      <Reveal className="mb-12 grid gap-6 md:grid-cols-12">
        <h2 className="text-[clamp(3rem,8vw,7rem)] md:col-span-6">{p.title}</h2>
        <p className="max-w-md self-end text-[clamp(1.25rem,1.5vw,1.5rem)] leading-snug md:col-span-5 md:col-start-8">{p.text}</p>
      </Reveal>

      <div className="grid gap-x-6 gap-y-10 md:grid-cols-12">
        <Reveal className="md:col-span-7">
          <div className="group overflow-hidden"><Image src="/images/goiania/skyline.jpg" alt={p.skyAlt} width={1920} height={1440} sizes="(min-width:768px) 58vw, 100vw" className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105" /></div>
          <p className="mt-3 flex items-center gap-1.5 text-sm"><MapPin size={14} className="text-accent" aria-hidden />{p.skyCap}</p>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-4 md:col-start-9 md:mt-32">
          <div className="group overflow-hidden"><Image src="/images/goiania/palacios.jpg" alt={p.palAlt} width={1920} height={1440} sizes="(min-width:768px) 33vw, 100vw" className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105" /></div>
          <p className="mt-3 flex items-center gap-1.5 text-sm"><MapPin size={14} className="text-accent" aria-hidden />{p.palCap}</p>
        </Reveal>
        <Reveal className="md:col-span-6 md:col-start-3">
          <div className="group overflow-hidden"><Image src="/images/goiania/coreto.jpg" alt={p.corAlt} width={1920} height={1440} sizes="(min-width:768px) 50vw, 100vw" className="aspect-[16/9] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105" /></div>
          <p className="mt-3 flex items-center gap-1.5 text-sm"><MapPin size={14} className="text-accent" aria-hidden />{p.corCap}</p>
        </Reveal>
      </div>
    </section>
  );
}
