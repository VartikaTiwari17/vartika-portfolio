import { useState } from 'react';
import './styles/global.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';
import BackgroundOrbs from './components/BackgroundOrbs';
import BackToTop from './components/BackToTop';
import Preloader from './components/Preloader';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import MoreProjects from './sections/MoreProjects';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="app">
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      <BackgroundOrbs />
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <MoreProjects />
      <Education />
      <Certifications />
      <Contact />
      <BackToTop />
      <Footer />
    </div>
  );
}

export default App;