import { useEffect, useRef, Suspense, lazy } from 'react';
import { Download, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/icons/BrandIcons';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { useIsMobile } from '../hooks/useIsMobile';
import { gsap } from '../utils/gsapSetup';
import './Hero.css';

const HeroScene = lazy(() => import('../components/HeroScene'));

function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const show3D = !prefersReducedMotion && !isMobile;

  const badgeRef = useRef(null);
  const photoRef = useRef(null);
  const feature1Ref = useRef(null);
  const feature2Ref = useRef(null);
  const feature3Ref = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const actionsRef = useRef(null);
  const socialsRef = useRef(null);

    const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) gsap.to(window, { duration: 1, scrollTo: { y: el, offsetY: 0 }, ease: 'power2.inOut' });
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) gsap.to(window, { duration: 1, scrollTo: { y: el, offsetY: 0 }, ease: 'power2.inOut' });
  };  

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo(badgeRef.current, { opacity: 0, y: -16 }, { opacity: 1, y: 0, duration: 0.6 })
      .fromTo(photoRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.8 }, '-=0.2')
      .fromTo(feature1Ref.current, { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.6 }, '-=0.4')
      .fromTo(feature2Ref.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.5')
      .fromTo(feature3Ref.current, { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.6 }, '-=0.5')
      .fromTo(titleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.3')
      .fromTo(subtitleRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
      .fromTo(descRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
      .fromTo(actionsRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
      .fromTo(socialsRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 }, '-=0.3');
  }, []);

  return (
    <section id="home" className="hero">
      {show3D && (
        <div className="hero__canvas">
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        </div>
      )}

      <div className="hero__center">
        <span ref={badgeRef} className="hero__badge">
          <span className="hero__badge-dot" />
          AVAILABLE FOR OPPORTUNITIES
        </span>

        <div className="hero__photo-stage">
          <div ref={feature1Ref} className="glass hero__feature hero__feature--left">
            <span className="hero__feature-value">3</span>
            <span className="hero__feature-label">Internships</span>
          </div>

          <div ref={photoRef} className="hero__photo-wrap">
            <div className="hero__photo-ring">
              <div className="hero__photo-frame">
                <img src="profile.jpg" alt="Vartika Tiwari" className="hero__photo" />
              </div>
            </div>
          </div>

          <div ref={feature2Ref} className="glass hero__feature hero__feature--top">
            <span className="hero__feature-value">4+</span>
            <span className="hero__feature-label">Projects</span>
          </div>

          <div ref={feature3Ref} className="glass hero__feature hero__feature--right">
            <span className="hero__feature-value">MERN</span>
            <span className="hero__feature-label">Stack Developer</span>
          </div>
        </div>

        <h1 ref={titleRef} className="hero__title">Vartika Tiwari</h1>
        <h2 ref={subtitleRef} className="hero__subtitle gradient-text">Full Stack Developer</h2>

        <p ref={descRef} className="hero__description">
          B.Tech Computer Science graduate with hands-on MERN Stack experience, 3 internships, and end-to-end full-stack projects.
        </p>

        <div ref={actionsRef} className="hero__actions">
          <button className="btn btn--primary" onClick={scrollToProjects}>View Projects <ArrowRight size={16} /></button>
          <a href="/VartikaTiwariFresher2026.pdf" download className="btn btn--secondary">Download Resume <Download size={16} /></a>
          <a href="#contact" className="btn btn--ghost" onClick={scrollToContact}>Contact Me</a>
        </div>

        <div ref={socialsRef} className="hero__socials">
          <a href="https://github.com/VartikaTiwari17" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GithubIcon size={20} /></a>
          <a href="https://linkedin.com/in/vartika-tiwari-a59504291" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon size={20} /></a>
        </div>
      </div>
    </section>
  );
}

export default Hero;