import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { gsap } from '../utils/gsapSetup';
import './BackToTop.css';

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTop = () => {
    gsap.to(window, { duration: 1, scrollTo: { y: 0 }, ease: 'power2.inOut' });
  };

  return (
    <button
      className={`back-to-top ${visible ? 'back-to-top--visible' : ''}`}
      onClick={scrollTop}
      aria-label="Back to top"
    >
      <ArrowUp size={18} />
    </button>
  );
}

export default BackToTop;