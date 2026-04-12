export type Dictionary = typeof pt;
export type Language = "pt" | "en";

export const pt = {
  navbar: {
    home: "Início",
    about: "Sobre",
    projects: "Projetos",
    contact: "Contato",
  },
  hero: {
    status: "Disponível para oportunidades",
    subtitle: "Full Stack Dev",
    description: "Estudante de Engenharia da Computação na PUC-GO e estagiário no CRMV-GO. Construo sistemas completos com Django e Next.js, do backend ao frontend.",
    viewProjects: "Ver projetos",
    contactMe: "Entrar em contato",
    stats: {
      exp: "Ano de exp.",
      projects: "Projetos Participados",
      tech: "Tecnologias",
    }
  },
  about: {
    sectionTitle: "01. Sobre mim",
    title: "Quem sou eu",
    bioPart1: "Olá! Sou ",
    bioName: "Pedro Henrique Faria dos Santos Soares",
    bioPart2: ", tenho 21 anos e sou desenvolvedor. Apaixonado por construir soluções completas — do banco de dados à interface. Atualmente cursando Engenharia da Computação e atuando como estagiário no CRMV-GO, onde já desenvolvi sistemas utilizados em âmbito nacional.",
    infoCards: {
      degree: { label: "Formação", value: "Engenharia da Computação", sub: "PUC-GO · 7º período · 2023–presente" },
      exp: { label: "Experiência atual", value: "Estagiário de TI", sub: "CRMV-GO · 2024–presente" },
      location: { label: "Localização", value: "Goiânia, GO", sub: "Disponível para remoto ou presencial" },
      focus: { label: "Foco atual", value: "Django + Next.js", sub: "Desenvolvimento de sistemas, DevOps e Infraestrutura" },
    },
    skillsTitle: "Habilidades técnicas",
    experience: {
      role: "Desenvolvedor Full Stack — Estagiário",
      current: "Atual",
      period: "CRMV-GO · 2024 – presente",
      items: [
        "Desenvolvimento de sistemas com Django e Next.js",
        "Criação de sistemas ativos em âmbito nacional (SGAP, Seleção)",
        "Arquitetura, modelagem e implementação de ponta a ponta",
        "Manutenção contínua de sistemas em produção",
        "Colaboração no SGI com outro estagiário",
      ]
    }
  },
  projects: {
    sectionTitle: "02. Projetos",
    title: "O que eu construí",
    viewAllGithub: "Ver todos no GitHub",
    description: "Sistemas desenvolvidos durante o estágio no CRMV-GO — alguns deles ativos em âmbito nacional, usados por conselhos em todo o Brasil.",
    moreOnGithub: "Mais projetos no GitHub",
    badges: {
      featured: "Destaque",
      national: "Nacional",
      wip: "Em breve",
    },
    links: {
      source: "Código fonte",
      demo: "Ver sistema",
      wip: "Em desenvolvimento",
    },
    items: {
      sgc: {
        name: "SGC — Sistema de Gerenciamento de Chamados",
        desc: "Sistema completo de gerenciamento de chamados de TI para o CRMV-GO, com tracking, priorização e geração de relatórios. Desenvolvido do zero: da modelagem à manutenção.",
      },
      sgap: {
        name: "SGAP — Sistema de Gestão de Almoxarifado e Patrimônio",
        desc: "Criado por completo — da licitação de requisitos e modelagem até a manutenção atual. Sistema ativo em âmbito nacional, utilizado por conselhos em todo o Brasil.",
      },
      selecao: {
        name: "Seleção CRMV-GO — Sistema de Seleção de Estagiários",
        desc: "Sistema desenvolvido por completo desde a modelagem até a manutenção. Utilizado em âmbito nacional por conselhos em todo o Brasil para seleção de estagiários.",
      },
      sgd: {
        name: "SGD — Sistema de Gestão de Denúncias",
        desc: "Colaborei com o chefe na finalização do sistema e na correção de bugs. Sistema voltado ao gerenciamento de denúncias do CRMV-GO.",
      },
      sgi: {
        name: "SGI — Sistema de Gestão Integrada",
        desc: "Em desenvolvimento. Projeto conjunto com outro estagiário — participei da arquitetura, modelagem e implementação do frontend. Será o sistema mais completo do CRMV-GO.",
      },
      portfolio: {
        name: "Portfólio Pessoal",
        desc: "Este portfólio! Desenvolvido com Next.js 14 e TailwindCSS, com animações suaves e design responsivo.",
      }
    }
  },
  contact: {
    sectionTitle: "03. Contato",
    title: "Vamos conversar",
    description: "Estou aberto a novas oportunidades, projetos freelance e colaborações. Pode me chamar por qualquer canal abaixo.",
    methods: {
      whatsapp: "WhatsApp",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    cta: {
      title: "Pronto para transformar suas ideias em realidade?",
      subtitle: "Estou sempre disponível para discutir novos projetos e oportunidades.",
      button: "Enviar mensagem",
    }
  },
  footer: {
    rights: "Todos os direitos reservados.",
    developedWith: "Desenvolvido com",
    using: "usando",
  }
};

export const en: Dictionary = {
  navbar: {
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",
  },
  hero: {
    status: "Available for new opportunities",
    subtitle: "Full Stack Dev",
    description: "Computer Engineering student at PUC-GO and IT Intern at CRMV-GO. I build complete systems using Django and Next.js, from backend to frontend.",
    viewProjects: "View projects",
    contactMe: "Get in touch",
    stats: {
      exp: "Years of exp.",
      projects: "Completed Projects",
      tech: "Technologies",
    }
  },
  about: {
    sectionTitle: "01. About me",
    title: "Who am I",
    bioPart1: "Hello! I'm ",
    bioName: "Pedro Henrique Faria dos Santos Soares",
    bioPart2: ", I'm 21 years old and a software developer. Always passionate about creating full-stack solutions — from the database to the user interface. Currently pursuing my degree in Computer Engineering and working as an intern at CRMV-GO, where I've built systems used nationwide.",
    infoCards: {
      degree: { label: "Degree", value: "Computer Engineering", sub: "PUC-GO · 7th semester · 2023–present" },
      exp: { label: "Current Exp", value: "IT Intern", sub: "CRMV-GO · 2024–present" },
      location: { label: "Location", value: "Goiânia, GO / Brazil", sub: "Available for remote work" },
      focus: { label: "Current Focus", value: "Django + Next.js", sub: "Systems Dev, DevOps & Infrastructure" },
    },
    skillsTitle: "Technical skills",
    experience: {
      role: "Full Stack Developer — Intern",
      current: "Present",
      period: "CRMV-GO · 2024 – present",
      items: [
        "System development using Django and Next.js",
        "Creation of active nationwide systems (SGAP, Selection)",
        "End-to-end architecture, modeling, and implementation",
        "Constant maintenance of systems in production environments",
        "Collaboration on the main internal SGI system",
      ]
    }
  },
  projects: {
    sectionTitle: "02. Projects",
    title: "What I've built",
    viewAllGithub: "View all on GitHub",
    description: "Systems developed during my internship at CRMV-GO — some of them are actively used nationwide by regional councils all over Brazil.",
    moreOnGithub: "More projects on GitHub",
    badges: {
      featured: "Featured",
      national: "National",
      wip: "Soon",
    },
    links: {
      source: "Source Code",
      demo: "View Live",
      wip: "In Development",
    },
    items: {
      sgc: {
        name: "SGC — Ticket Management System",
        desc: "Complete IT ticket management system developed for CRMV-GO, with tracking, prioritization, and reports. Built from scratch: from modeling to daily maintenance.",
      },
      sgap: {
        name: "SGAP — Inventory Management System",
        desc: "Built entirely by me — from requirements gathering to architecture and current maintenance. System officially used nationwide by regional councils all across Brazil.",
      },
      selecao: {
        name: "Selection CRMV-GO — Intern Recruitment",
        desc: "Developed end-to-end for the intern recruitment process in regional councils all across Brazil.",
      },
      sgd: {
        name: "SGD — Complaints Management System",
        desc: "Collaborated with the team lead by finalizing the system, debugging, and solving edge cases. Targeted to internal complaint reports at CRMV-GO.",
      },
      sgi: {
        name: "SGI — Integrated Management System",
        desc: "In development. Joint project with another intern. I actively engaged in the architecture, modeling, and front-end development. It will be the most complete system for the enterprise.",
      },
      portfolio: {
        name: "Personal Portfolio",
        desc: "You are looking at it right now! Built using Next.js 14 and TailwindCSS, featuring smooth interactions and a completely responsive design.",
      }
    }
  },
  contact: {
    sectionTitle: "03. Contact",
    title: "Let's talk",
    description: "I'm currently available for work, open source collaborations, or freelance projects. Feel free to message me via whichever platform you prefer.",
    methods: {
      whatsapp: "WhatsApp",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    cta: {
      title: "Ready to turn your ideas into a reality?",
      subtitle: "My inbox is always open for chatting about new projects.",
      button: "Send a message",
    }
  },
  footer: {
    rights: "All rights reserved.",
    developedWith: "Developed with",
    using: "using",
  }
};

export const dictionaries = {
  pt,
  en,
};
