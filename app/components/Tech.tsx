import type { IconType } from "react-icons";
import {
  SiCelery, SiDjango, SiDocker, SiGit, SiLinux, SiNextdotjs, SiPostgresql,
  SiPython, SiReact, SiTailwindcss, SiThreedotjs, SiTypescript,
} from "react-icons/si";

export const techIcons: Record<string, IconType> = {
  Django: SiDjango,
  "Next.js": SiNextdotjs,
  React: SiReact,
  Python: SiPython,
  TypeScript: SiTypescript,
  PostgreSQL: SiPostgresql,
  Docker: SiDocker,
  Celery: SiCelery,
  Tailwind: SiTailwindcss,
  Git: SiGit,
  Linux: SiLinux,
  "Three.js": SiThreedotjs,
};

export function Tech({ name, size = 16 }: { name: string; size?: number }) {
  const Icon = techIcons[name];
  return Icon ? <Icon size={size} aria-hidden /> : null;
}
