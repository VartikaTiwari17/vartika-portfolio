import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../utils/gsapSetup';
import './SectionTitle.css';

function SectionTitle({ eyebrow, title }) {
  const titleRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const letters = titleRef.current.querySelectorAll('.title-letter');

    const ctx = gsap.context(() => {
      gsap.fromTo(
        letters,
        { opacity: 0, y: 30, rotateX: -60 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.6,
          stagger: 0.02,
          ease: 'back.out(1.7)',
          scrollTrigger: { trigger: titleRef.current, start: 'top 88%' },
        }
      );

      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.3,
          scrollTrigger: { trigger: titleRef.current, start: 'top 88%' },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="section-title-wrap">
      <span className="section__eyebrow">{eyebrow}</span>
      <h2 ref={titleRef} className="section__title section-title--reveal">
        {title.split('').map((char, i) => (
          <span key={i} className="title-letter">
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </h2>
      <span ref={lineRef} className="section-title__underline" />
    </div>
  );
}

export default SectionTitle;