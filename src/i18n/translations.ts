export const translations = {
  es: {
    navbar: {
      links: [
        { label: 'Inicio', href: '#hero' },
        { label: 'Sobre mí', href: '#about' },
        { label: 'Habilidades', href: '#skills' },
        { label: 'Proyectos', href: '#projects' },
        { label: 'Experiencia', href: '#experience' },
        { label: 'Experiencia práctica', href: '#learned' },
        { label: 'Contacto', href: '#contact' },
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
        'Desarrolladora web junior con experiencia práctica en desarrollo full stack, proyectos web e integración de APIs REST.',
      btnProjects: 'Ver proyectos',
      btnContact: 'Contacto',
      btnCvEs: 'Descargar CV',
      scroll: 'Scroll',
    },

    about: {
      title: 'Sobre',
      titleSpan: 'mí',
      p1: 'Soy <strong>Mónica Muñoz de la Torre</strong>, Técnica Superior en Desarrollo de Aplicaciones Web (DAW) y Técnica en Sistemas Microinformáticos y Redes (SMR).',
      p2: 'Tengo experiencia práctica en desarrollo web full stack, APIs REST y bases de datos, adquirida durante mis prácticas en empresa y mediante proyectos académicos y personales.',
      p3: 'Me considero una persona metódica y detallista. Me gusta analizar cómo funcionan las aplicaciones, comprender la lógica que hay detrás de cada funcionalidad y comprobar que todo funciona correctamente. Busco una oportunidad como desarrolladora web junior en la que aplicar mis conocimientos y seguir adquiriendo experiencia profesional.',
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
      titleSpan: 'habilidades',
      subtitle: 'Tecnologías y herramientas con las que he trabajado',
      categories: [
        'Lenguajes',
        'Frontend',
        'Backend & Frameworks',
        'Bases de datos',
        'Herramientas',
        'Despliegue y alojamiento',
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
          features: [
            'Autenticación y roles',
            'Reservas online',
            'API REST',
            'Multi-centro',
          ],
        },
        {
          id: 'gallery',
          title: 'Gallery Space',
          subtitle: 'SPA · React + TypeScript',
          description:
            'Single Page Application con gestión de tarjetas fotográficas. Permite agregar, editar y eliminar imágenes, dar likes, reordenarlas con drag & drop y alternar entre modo claro y oscuro.',
          features: ['CRUD completo', 'Likes', 'Drag & drop', 'Modo oscuro'],
        },
        {
          id: 'chat-retro',
          title: 'Chat Retro',
          subtitle: 'Proyecto personal · React + Node.js',
          description:
            'Aplicación de chat en tiempo real de estilo nostálgico, desarrollada como proyecto personal. Incluye múltiples salas temáticas de chat, autenticación de usuarios por roles y mensajería privada.',
          features: ['Chat en tiempo real', 'Salas temáticas', 'Mensajería privada', 'Historial de mensajes'],
        }
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
          tags: [
            'React',
            'JavaScript',
            'TypeScript',
            'Node.js',
            'Express.js',
            'Git',
            'APIs REST',
            'Postman',
          ],
          description:
            'Participación en el desarrollo y mantenimiento de aplicaciones web en un entorno de logística, trabajando con React, TypeScript, Node.js y Express.js. Colaboración con el equipo técnico en el desarrollo de funcionalidades, integración de APIs REST, pruebas con Postman y desarrollo de herramientas internas.',
        },
        {
          id: 'exp2',
          title: 'Prácticas DAW (formación)',
          type: 'Contrato de formación · En remoto',
          period: 'may. 2025 – jun. 2025',
          tags: ['JavaScript', 'Node.js', 'Next.js'],
          description:
            'Formación en desarrollo web mediante proyectos guiados y ejercicios prácticos en tecnologías frontend y backend.',
        },
        {
          id: 'exp3',
          title: 'Prácticas Grado Medio (SMR)',
          type: 'Contrato de formación · Híbrido',
          period: 'abr. 2024 – jun. 2024',
          tags: ['WordPress', 'Canva', 'Diseño web'],
          description:
            'Apoyo en proyectos web corporativos en el sector de diseño de interiores, adaptando contenido y realizando ajustes básicos de diseño con WordPress y herramientas visuales.',
        },
      ],
    },

    learned: {
      title: 'Experiencia',
      titleSpan: 'práctica',
      subtitle:
        'Experiencia práctica adquirida principalmente durante mis prácticas, además de proyectos académicos.',
      items: [
        {
          title: 'Desarrollo Full Stack y herramientas modernas',
          description:
            'Durante mis prácticas he trabajado en funcionalidades frontend y backend, integrando APIs y desarrollando componentes reutilizables con React y Storybook.',
          tags: [
            'React',
            'Storybook',
            'APIs REST',
            'Frontend',
            'Backend',
          ],
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
          tags: [
            'Chrome Extension',
            'JavaScript',
            'DevTools',
            'Herramientas internas',
          ],
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
          tags: ['Postman', 'Testing', 'APIs REST'],
        },
        {
          title: 'Despliegue y publicación de aplicaciones',
          description:
            'He realizado despliegues de aplicaciones web, publicando el frontend y el backend en plataformas externas y utilizando servicios de alojamiento de bases de datos.',
          tags: ['Vercel', 'Render', 'Aiven.io'],
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
        { label: 'Practical experience', href: '#learned' },
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
        'Junior Web Developer with practical experience in full-stack development, web projects, and REST API integration.',
      btnProjects: 'View projects',
      btnContact: 'Contact',
      btnCvEs: 'Download CV',
      scroll: 'Scroll',
    },

    about: {
      title: 'About',
      titleSpan: 'me',
      p1: 'I am <strong>Mónica Muñoz de la Torre</strong>, a Higher Technician in Web Application Development (DAW) and a Technician in Microcomputer Systems and Networks (SMR).',
      p2: 'I have hands-on experience in full-stack web development, REST APIs, and databases, gained during my internships and through academic and personal projects.',
      p3: 'I consider myself methodical and detail-oriented. I enjoy analyzing how applications work, understanding the logic behind each feature, and checking that everything works correctly. I am looking for an opportunity as a junior web developer where I can apply my skills and continue gaining professional experience.',
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
        'Deployment & Hosting',
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
          features: [
            'Auth & roles',
            'Online booking',
            'REST API',
            'Multi-center',
          ],
        },
        {
          id: 'gallery',
          title: 'Gallery Space',
          subtitle: 'SPA · React + TypeScript',
          description:
            'Single Page Application with photo card management. Allows adding, editing and deleting images, liking, reordering with drag & drop and toggling between light and dark mode.',
          features: ['Full CRUD', 'Likes', 'Drag & drop', 'Dark mode'],
        },
        {
          id: 'chat-retro',
          title: 'Chat Retro',
          subtitle: 'Personal project · React + Node.js',
          description:
            'Nostalgic-style real-time chat application developed as a personal project. It includes multiple themed chat rooms, role-based user authentication, and private messaging.',
          features: ['Real-time chat', 'Themed chat rooms', 'Private messaging', 'Message history'],
        }
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
          tags: [
            'React',
            'JavaScript',
            'TypeScript',
            'Node.js',
            'Express.js',
            'Git',
            'REST APIs',
            'Postman',
          ],
          description:
            'Participated in the development and maintenance of web applications in a logistics environment, working with React, TypeScript, Node.js and Express.js. Collaborated with the technical team on feature development, REST API integration, Postman testing and internal tool development.',
        },
        {
          id: 'exp2',
          title: 'DAW training internship',
          type: 'Training contract · Remote',
          period: 'May 2025 – Jun. 2025',
          tags: ['JavaScript', 'Node.js', 'Next.js'],
          description:
            'Web development training through guided projects and practical exercises in frontend and backend technologies.',
        },
        {
          id: 'exp3',
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
      titleSpan: 'experience',
      subtitle:
        'Practical experience acquired mainly during my internships, as well as through academic projects.',
      items: [
        {
          title: 'Full Stack development and modern tools',
          description:
            'During my internship, I worked on frontend and backend features, integrating APIs and developing reusable components with React and Storybook.',
          tags: [
            'React',
            'Storybook',
            'REST APIs',
            'Frontend',
            'Backend',
          ],
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
          tags: [
            'Chrome Extension',
            'JavaScript',
            'DevTools',
            'Internal Tools',
          ],
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
          tags: ['Postman', 'Testing', 'REST APIs'],
        },
        {
          title: 'Application deployment and publishing',
          description:
            'I have deployed web applications, publishing the frontend and backend on external platforms and using database hosting services.',
          tags: ['Vercel', 'Render', 'Aiven.io'],
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