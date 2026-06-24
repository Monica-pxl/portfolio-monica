export const translations = {
  es: {
    navbar: {
      links: [
        { label: 'Inicio', href: '#inicio' },
        { label: 'Sobre mí', href: '#sobre-mi' },
        { label: 'Skills', href: '#skills' },
        { label: 'Proyectos', href: '#proyectos' },
        { label: 'Experiencia', href: '#experiencia' },
        { label: 'Conocimientos prácticos', href: '#conocimientos-practicos' },
        { label: 'Contacto', href: '#contacto' },
      ],
      toggleDark: 'Activar modo oscuro',
      toggleLight: 'Activar modo claro',
      modoDark: 'Modo oscuro',
      modoLight: 'Modo claro',
      openMenu: 'Abrir menú',
    },
    hero: {
      badge: 'Disponible para nuevas oportunidades',
      role: 'Desarrolladora Web Full Stack · DAW',
      location: 'Valencia, España',
      description:
        'Desarrolladora web con experiencia en proyectos full stack y frontend a través de prácticas en empresa y proyectos académicos.',
      btnProjects: 'Ver proyectos',
      btnContact: 'Contacto',
      btnCvEs: 'Descargar CV',
      scroll: 'Scroll',
    },
    about: {
      title: 'Sobre',
      titleSpan: 'mí',
      p1: 'Soy <strong>Mónica Muñoz de la Torre</strong>, Técnica Superior en Desarrollo de Aplicaciones Web (DAW). Antes completé el ciclo de Sistemas Microinformáticos y Redes (SMR), lo que me dio una base sólida en infraestructura y redes.',
      p2: 'Me apasiona el desarrollo frontend y full stack. He trabajado en proyectos reales durante prácticas en empresa y a lo largo de mi formación, donde he aplicado tecnologías modernas y aprendido a trabajar de forma profesional.',
      p3: 'Busco oportunidades donde pueda seguir creciendo, aportar energía y curiosidad, y desarrollarme como profesional en el mundo del desarrollo web.',
      card1Title: 'DAW',
      card1Sub: 'Técnico Superior en Desarrollo de Aplicaciones Web',
      card2Title: 'SMR',
      card2Sub: 'Sistemas Microinformáticos y Redes',
      card3Title: 'Full Stack & Frontend',
      card3Sub: 'Proyectos académicos y prácticas en empresa',
      statProjects: 'proyectos',
    },
    skills: {
      title: 'Mis',
      titleSpan: 'skills',
      subtitle: 'Tecnologías y herramientas con las que he trabajado',
      categories: [
        'Lenguajes',
        'Frontend',
        'Backend & Frameworks',
        'Bases de datos',
        'Herramientas',
      ],
    },
    projects: {
      title: 'Mis',
      titleSpan: 'proyectos',
      subtitle: 'Proyectos académicos y personales que reflejan mis habilidades',
      items: [
        {
          id: 'hairgest',
          title: 'HairGest',
          subtitle: 'TFG — Gestión de peluquerías',
          description:
            'Aplicación web full stack para gestión de citas en peluquerías multicentro. Incluye sistema de autenticación con JWT, gestión de roles diferenciados, reservas online y una API REST completa.',
          features: ['Autenticación y roles', 'Reservas online', 'API REST', 'Multi-centro'],
        },
        {
          id: 'gallery',
          title: 'Gallery Space',
          subtitle: 'SPA · React + TypeScript',
          description:
            'Single Page Application con gestión de tarjetas fotográficas. Permite agregar, editar y eliminar imágenes, dar likes, reordenarlas con drag & drop y alternar entre modo claro y oscuro.',
          features: ['CRUD completo', 'Likes', 'Drag & drop', 'Modo oscuro'],
        },
      ],
      demo: 'Demo',
    },
    experience: {
      title: 'Experiencia',
      subtitle: 'Prácticas, proyectos y formación',
      items: [
        {
          id: 'exp1',
          title: 'Prácticas en desarrollo web (DAW)',
          type: 'Contrato de formación · En remoto',
          period: 'mar. 2026 – may. 2026',
          tags: ['Node.js', 'TypeScript', 'React', 'Git'],
          description:
            'Participación en el desarrollo y mantenimiento de aplicaciones web en un entorno de logística, colaborando con el equipo técnico en tareas de soporte, actualización de funcionalidades y gestión de contenido.',
        },
        {
          id: 'exp2',
          title: 'Proyecto final de FP (TFG) — HairGest',
          type: 'Proyecto académico',
          period: 'oct. 2025 – may. 2026',
          tags: ['Angular', 'Node.js', 'Express', 'MongoDB', 'JWT', 'TypeScript'],
          description:
            'Aplicación web full stack para gestión de citas en centros de peluquería multicentro. Incluye autenticación JWT, sistema de roles y gestión de reservas en tiempo real.',
        },
        {
          id: 'exp3',
          title: 'Prácticas DAW (formación)',
          type: 'Contrato de formación · En remoto',
          period: 'may. 2025 – jun. 2025',
          tags: ['JavaScript', 'Node.js', 'Next.js'],
          description:
            'Formación en desarrollo web mediante proyectos guiados y ejercicios prácticos en tecnologías frontend y backend.',
        },
        {
          id: 'exp4',
          title: 'Prácticas Grado Medio',
          type: 'Contrato de formación · Híbrido',
          period: 'abr. 2024 – jun. 2024',
          tags: ['WordPress', 'Canva', 'Diseño web'],
          description:
            'Apoyo en proyectos web corporativos en el sector de diseño de interiores, adaptando contenido y realizando ajustes básicos de diseño con WordPress y herramientas visuales.',
        },
      ],
    },
    learned: {
      title: 'Conocimientos',
      titleSpan: 'prácticos',
      subtitle: 'Reflexiones y aprendizajes clave a lo largo de mi formación y experiencia',
      items: [
        {
          title: 'Desarrollo Full Stack y herramientas modernas',
          description:
            'He trabajado en funcionalidades frontend y backend durante mis prácticas, integrando APIs, automatizando procesos y gestionando datos en Notion. También he creado componentes reutilizables y sistemas de diseño con Storybook en React.',
          tags: ['React', 'Storybook', 'APIs REST', 'Notion', 'Frontend', 'Backend'],
        },
        {
          title: 'Automatización y gestión de datos',
          description:
            'He participado en la creación de flujos de automatización: envío de correos automáticos, gestión de reseñas de usuarios y almacenamiento estructurado de información en bases de datos conectadas con Notion.',
          tags: ['Automatización', 'Notion', 'Email', 'Base de datos'],
        },
        {
          title: 'Desarrollo de extensiones y herramientas internas',
          description:
            'He desarrollado una extensión de Chrome orientada a mejorar la productividad en reuniones diarias (daily standups), utilizada dentro del entorno de la empresa.',
          tags: ['Chrome Extension', 'JavaScript', 'DevTools', 'Productividad'],
        },
        {
          title: 'Diseño web y experiencia de usuario',
          description:
            'He apoyado en tareas de diseño frontend: selección de referencias visuales, creación de maquetas y uso de herramientas como WordPress, Canva y CSS para mejorar la parte visual de los proyectos.',
          tags: ['WordPress', 'Canva', 'CSS', 'Maquetación', 'UX/UI'],
        },
        {
          title: 'Control de calidad y testing',
          description:
            'He realizado pruebas de APIs con Postman y verificado el correcto funcionamiento del backend y el frontend para asegurar la estabilidad de las aplicaciones.',
          tags: ['Postman', 'Testing', 'APIs REST', 'QA'],
        },
      ],
    },
    contact: {
      title: 'Hablemos',
      titleSpan: ':)',
      subtitle:
        'Estoy abierta a nuevas oportunidades, colaboraciones o simplemente tener una buena conversación',
      ctaText:
        'Si buscas una desarrolladora junior con ganas de aprender y crecer, o tienes alguna propuesta, no dudes en escribirme.',
      btnEmail: 'Envíame un email',
    },
  },

  en: {
    navbar: {
      links: [
        { label: 'Home', href: '#hero' },
        { label: 'About me', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
        { label: 'Experience', href: '#experience' },
        { label: 'Practical knowledge', href: '#learned' },
        { label: 'Contact', href: '#contact' },
      ],
      toggleDark: 'Enable dark mode',
      toggleLight: 'Enable light mode',
      modoDark: 'Dark mode',
      modoLight: 'Light mode',
      openMenu: 'Open menu',
    },
    hero: {
      badge: 'Available for new opportunities',
      role: 'Full Stack Developer · DAW',
      location: 'Valencia, Spain',
      description:
        'Web developer with experience in full stack and frontend projects through company internships and academic projects.',
      btnProjects: 'View projects',
      btnContact: 'Contact',
      btnCvEs: 'Download CV',
      scroll: 'Scroll',
    },
    about: {
      title: 'About',
      titleSpan: 'me',
      p1: 'I am <strong>Mónica Muñoz de la Torre</strong>, a Higher Technician in Web Application Development (DAW). I previously completed the Microcomputer Systems and Networks (SMR) cycle, which gave me a solid foundation in infrastructure and networking.',
      p2: 'I am passionate about frontend and full stack development. I have worked on real projects during company internships and throughout my training, applying modern technologies and learning to work professionally.',
      p3: 'I am looking for opportunities where I can keep growing, bring energy and curiosity, and develop as a professional in the web development world.',
      card1Title: 'DAW',
      card1Sub: 'Higher Technician in Web Application Development',
      card2Title: 'SMR',
      card2Sub: 'Microcomputer Systems and Networks',
      card3Title: 'Full Stack & Frontend',
      card3Sub: 'Academic projects and company internships',
      statProjects: 'projects',
    },
    skills: {
      title: 'My',
      titleSpan: 'skills',
      subtitle: 'Technologies and tools I have worked with',
      categories: [
        'Languages',
        'Frontend',
        'Backend & Frameworks',
        'Databases',
        'Tools',
      ],
    },
    projects: {
      title: 'My',
      titleSpan: 'projects',
      subtitle: 'Academic and personal projects that reflect my skills',
      items: [
        {
          id: 'hairgest',
          title: 'HairGest',
          subtitle: 'Final Project — Hair salon management',
          description:
            'Full stack web application for appointment management in multi-center hairdressing salons. Includes JWT authentication, role management, online booking and a complete REST API.',
          features: ['Auth & roles', 'Online booking', 'REST API', 'Multi-center'],
        },
        {
          id: 'gallery',
          title: 'Gallery Space',
          subtitle: 'SPA · React + TypeScript',
          description:
            'Single Page Application with photo card management. Allows adding, editing and deleting images, liking, reordering with drag & drop and toggling between light and dark mode.',
          features: ['Full CRUD', 'Likes', 'Drag & drop', 'Dark mode'],
        },
      ],
      demo: 'Demo',
    },
    experience: {
      title: 'Experience',
      subtitle: 'Internships, projects and training',
      items: [
        {
          id: 'exp1',
          title: 'Web development internship (DAW)',
          type: 'Training contract · Remote',
          period: 'Mar. 2026 – May 2026',
          tags: ['Node.js', 'TypeScript', 'React', 'Git'],
          description:
            'Participation in the development and maintenance of web applications in a logistics environment, collaborating with the technical team on support tasks, feature updates and content management.',
        },
        {
          id: 'exp2',
          title: 'Final vocational project (TFG) — HairGest',
          type: 'Academic project',
          period: 'Oct. 2025 – May 2026',
          tags: ['Angular', 'Node.js', 'Express', 'MongoDB', 'JWT', 'TypeScript'],
          description:
            'Full stack web application for appointment management in multi-center hairdressing salons. Includes JWT authentication, role system and real-time booking management.',
        },
        {
          id: 'exp3',
          title: 'DAW training internship',
          type: 'Training contract · Remote',
          period: 'May 2025 – Jun. 2025',
          tags: ['JavaScript', 'Node.js', 'Next.js'],
          description:
            'Web development training through guided projects and practical exercises in frontend and backend technologies.',
        },
        {
          id: 'exp4',
          title: 'SMR Internship',
          type: 'Training contract · Hybrid',
          period: 'Apr. 2024 – Jun. 2024',
          tags: ['WordPress', 'Canva', 'Web Design'],
          description:
            'Support in corporate web projects in the interior design sector, adapting content and making basic design adjustments with WordPress and visual tools.',
        },
      ],
    },
    learned: {
      title: 'Practical',
      titleSpan: 'knowledge',
      subtitle: 'Key reflections and learnings throughout my training and experience',
      items: [
        {
          title: 'Full Stack development and modern tools',
          description:
            'I worked on frontend and backend features during my internship, integrating APIs, automating processes and managing data in Notion. I also created reusable components and design systems with Storybook in React.',
          tags: ['React', 'Storybook', 'APIs REST', 'Notion', 'Frontend', 'Backend'],
        },
        {
          title: 'Automation and data management',
          description:
            'I participated in building automation flows: automatic email sending, user review management and structured data storage in databases connected with Notion.',
          tags: ['Automation', 'Notion', 'Email', 'Database'],
        },
        {
          title: 'Extension and internal tool development',
          description:
            'I developed a Chrome extension aimed at improving productivity in daily standup meetings, used within the company environment.',
          tags: ['Chrome Extension', 'JavaScript', 'DevTools', 'Productivity'],
        },
        {
          title: 'Web design and user experience',
          description:
            'I supported frontend design tasks: selecting visual references, creating mockups and using tools like WordPress, Canva and CSS to improve the visual side of projects.',
          tags: ['WordPress', 'Canva', 'CSS', 'Layout Design', 'UX/UI'],
        },
        {
          title: 'Quality assurance and testing',
          description:
            'I tested APIs with Postman and verified the correct functioning of backend and frontend to ensure application stability.',
          tags: ['Postman', 'Testing', 'APIs REST', 'QA'],
        },
      ],
    },
    contact: {
      title: "Let's talk",
      titleSpan: ':)',
      subtitle:
        'I am open to new opportunities, collaborations or simply having a good conversation',
      ctaText:
        'If you are looking for a junior developer eager to learn and grow, or you have a proposal, feel free to write to me.',
      btnEmail: 'Send me an email',
    },
  },
} as const;

export type Translations = typeof translations;
