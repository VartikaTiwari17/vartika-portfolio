import { useEffect, useRef, useState } from 'react';
import { gsap } from '../utils/gsapSetup';
import './Preloader.css';

function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const wrapRef = useRef(null);
  const nameRef = useRef(null);
  const barRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    let count = 0;
    const interval = setInterval(() => {
      count += Math.floor(Math.random() * 8) + 4;
      if (count >= 100) {
        count = 100;
        clearInterval(interval);
      }
      setProgress(count);
    }, 90);

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = '';
        onComplete();
      },
    });

    tl.fromTo(
      nameRef.current.querySelectorAll('.pre-letter'),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: 'power3.out' }
    )
      .to({}, { duration: 1.2 }) // hold while progress bar fills
      .to(nameRef.current, { opacity: 0, y: -10, duration: 0.4 })
      .to(barRef.current, { opacity: 0, duration: 0.3 }, '<')
      .to(panelRef.current, {
        yPercent: -100,
        duration: 0.9,
        ease: 'power4.inOut',
      })
      .to(wrapRef.current, { display: 'none', duration: 0 });

    return () => clearInterval(interval);
  }, [onComplete]);

  const name = 'VARTIKA TIWARI';

  return (
    <div ref={wrapRef} className="preloader">
      <div ref={panelRef} className="preloader__panel">
        <h1 ref={nameRef} className="preloader__name">
          {name.split('').map((char, i) => (
            <span key={i} className="pre-letter">
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>
        <div ref={barRef} className="preloader__bar-wrap">
          <div className="preloader__bar" style={{ width: `${progress}%` }} />
          <span className="preloader__percent">{progress}%</span>
        </div>
      </div>
    </div>
  );
}

export default Preloader;