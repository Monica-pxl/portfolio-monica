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
- Navegación suave con anclas entre secciones

---

## 4. Estructura del proyecto

```
├── public/                        # Recursos estáticos servidos directamente (CV en PDF, foto de perfil)
└── src/
    ├── components/                # Secciones del portfolio, cada una con su .tsx y .css
    │   ├── Navbar.tsx / .css      # Barra de navegación con cambio de idioma y tema
    │   ├── Hero.tsx / .css        # Sección de presentación principal
    │   ├── About.tsx / .css       # Información personal y formación
    │   ├── Skills.tsx / .css      # Tecnologías agrupadas por categoría
    │   ├── Projects.tsx / .css    # Tarjetas de proyectos destacados
    │   ├── Experience.tsx / .css  # Experiencia laboral y prácticas
    │   ├── Learned.tsx / .css     # Conocimientos prácticos adquiridos
    │   └── Contact.tsx / .css     # Datos de contacto
    ├── App.tsx                    # Componente raíz con layout y orden de secciones
    ├── translations.ts            # Todos los textos del sitio en español e inglés
    ├── LanguageContext.tsx        # Contexto y hook para el cambio de idioma
    └── ThemeContext.tsx           # Contexto y hook para el cambio de tema (claro/oscuro)
```

---

## 5. Instalación en local

```bash
git clone https://github.com/Monica-pxl/monica-munoz-portfolio.git
cd monica-munoz-portfolio
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

---

## 7. Autora

- **Autora:** Mónica Muñoz de la Torre