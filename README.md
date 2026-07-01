# Portfolio — Mónica Muñoz de la Torre

## 1. Descripción del proyecto

Portfolio personal desarrollado con **React + TypeScript + Vite**. Funciona como carta de presentación profesional: muestra mi perfil como desarrolladora web full stack, mis proyectos, experiencia y formas de contacto.

Es una SPA (Single Page Application) con las siguientes secciones:

- **Inicio** — Presentación breve con acceso a proyectos, contacto y descarga de CV
- **Sobre mí** — Formación (DAW, SMR) y motivaciones profesionales
- **Skills** — Tecnologías y herramientas organizadas por categorías
- **Proyectos** — Proyectos destacados con descripción y características
- **Experiencia** — Historial laboral y prácticas en empresa
- **Conocimientos prácticos** — Aprendizajes aplicados durante la formación
- **Contacto** — Datos de contacto

---

## 2. Tecnologías utilizadas

- **Framework:** React 19
- **Lenguaje:** TypeScript
- **Bundler:** Vite
- **Estilos:** CSS por componente (sin frameworks externos)
- **Control de versiones:** Git y GitHub
- **Despliegue:** Vercel

---

## 3. Características

- Soporte multiidioma (español / inglés) mediante `LanguageContext`
- Modo claro / oscuro mediante `ThemeContext`
- Diseño responsive adaptado a móvil, tablet y escritorio
- Rutas localizadas por idioma (ej: `/proyectos` en ES, `/projects` en EN)
- Navegación suave entre secciones con actualización de URL mediante History API

---

## 4. Estructura del proyecto

```
├── public/                          # Recursos estáticos (CV en PDF, foto de perfil)
└── src/
    ├── components/                  # Secciones del portfolio, cada una con su .tsx y .css
    │   ├── Navbar.tsx / .css        # Barra de navegación con cambio de idioma y tema
    │   ├── Hero.tsx / .css          # Sección de presentación principal
    │   ├── About.tsx / .css         # Información personal y formación
    │   ├── Skills.tsx / .css        # Tecnologías agrupadas por categoría
    │   ├── Projects.tsx / .css      # Tarjetas de proyectos destacados
    │   ├── Experience.tsx / .css    # Experiencia laboral y prácticas
    │   ├── Learned.tsx / .css       # Conocimientos prácticos adquiridos
    │   └── Contact.tsx / .css       # Datos de contacto
    ├── context/                     # Contextos globales de React
    │   ├── LanguageContext.tsx      # Contexto y hook para el cambio de idioma (ES / EN)
    │   └── ThemeContext.tsx         # Contexto y hook para el cambio de tema (claro / oscuro)
    ├── routes/                      # Rutas localizadas de la aplicación
    │   └── index.ts                 # Mapa de rutas por idioma y utilidades de navegación
    ├── i18n/                        # Internacionalización
    │   └── translations.ts          # Todos los textos del sitio en español e inglés
    ├── assets/                      # Imágenes e iconos usados en la web
    ├── App.tsx                      # Componente raíz con layout y orden de secciones
    ├── App.css                      # Estilos globales residuales del scaffold de Vite
    ├── index.css                    # Variables CSS, reset, tipografía y dark mode
    └── main.tsx                     # Punto de entrada de la aplicación
```

---

## 5. Instalación en local

```bash
git clone https://github.com/Monica-pxl/portfolio-monica.git
cd portfolio-monica
npm install
npm run dev
```

La aplicación estará disponible en [http://localhost:5173](http://localhost:5173).

Para generar el build de producción:

```bash
npm run build
```

---

## 6. Despliegue

El portfolio está desplegado en Vercel y accesible en:

**[https://monica-munoz-portfolio.vercel.app](https://monica-munoz-portfolio.vercel.app)**

Vercel está configurado mediante `vercel.json` para redirigir todas las rutas al `index.html`, permitiendo que el enrutamiento client-side funcione correctamente.

---

## 7. Autora

- **Autora:** Mónica Muñoz de la Torre