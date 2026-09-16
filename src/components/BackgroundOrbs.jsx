import { useIsMobile } from '../hooks/useIsMobile';
import { useReducedMotion } from '../hooks/useReducedMotion';
import './BackgroundOrbs.css';

function BackgroundOrbs() {
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();

  if (isMobile || prefersReducedMotion) return null;

  return (
    <div className="bg-orbs" aria-hidden="true">
      <div className="bg-orb bg-orb--1" />
      <div className="bg-orb bg-orb--2" />
      <div className="bg-orb bg-orb--3" />
    </div>
  );
}

export default BackgroundOrbs;