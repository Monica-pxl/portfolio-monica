import { ThemeProvider } from './ThemeContext';
import { LanguageProvider } from './LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Learned from './components/Learned';
import Contact from './components/Contact';

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
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

