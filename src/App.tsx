import { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Learned from './components/Learned';
import Contact from './components/Contact';
import { getSectionIdFromPath } from './routes';

function ScrollToSection() {
  useEffect(() => {
    const sectionId = getSectionIdFromPath(window.location.pathname);
    if (sectionId && sectionId !== 'hero') {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'auto' });
    }
  }, []);
  return null;
}

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <ScrollToSection />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Learned />
          <Contact />
        </main>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;

