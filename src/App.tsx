import { ThemeProvider } from './ThemeContext';
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
    <ThemeProvider>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Experience />
        <Learned />
        <Contact />
      </main>
    </ThemeProvider>
  );
}

export default App;

