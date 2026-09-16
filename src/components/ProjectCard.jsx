import { useState, useRef } from 'react';
import { ExternalLink, ChevronDown } from 'lucide-react';
import { GithubIcon } from './icons/BrandIcons';
import './ProjectCard.css';

function ProjectCard({ project, featured = false }) {
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, active: false });

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y - rect.height / 2) / rect.height) * -8;
    const rotateY = ((x - rect.width / 2) / rect.width) * 8;
    setTilt({ x: rotateX, y: rotateY });

    setSpotlight({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      active: true,
    });
  };

  const resetTilt = () => {
    setTilt({ x: 0, y: 0 });
    setSpotlight((s) => ({ ...s, active: false }));
  };

  const hasGithub = project.github && project.github !== 'PROJECT_GITHUB_URL' && project.github !== '';
  const hasLive = project.live && project.live !== 'PROJECT_LIVE_URL' && project.live !== '';

  return (
    <div
      ref={cardRef}
      className={`project-card glass ${featured ? 'project-card--featured' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        boxShadow: spotlight.active
          ? `0 25px 50px -12px rgba(99, 102, 241, 0.3)`
          : undefined,
      }}
    >
      <div
        className="project-card__spotlight"
        style={{
          opacity: spotlight.active ? 1 : 0,
          background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(99, 102, 241, 0.18), transparent 45%)`,
        }}
      />

      <div className="project-card__shine" />

      <div className="project-card__content">
        <h3 className="project-card__name">{project.name}</h3>
        <p className="project-card__description">{project.description}</p>

        <div className="project-card__tech">
          {project.tech.map((t, i) => (
            <span
              key={t}
              className="project-card__tech-badge"
              style={{ transitionDelay: `${i * 0.03}s` }}
            >
              {t}
            </span>
          ))}
        </div>

        <button
          className="project-card__toggle"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
        >
          {expanded ? 'Hide details' : 'View details'}
          <ChevronDown size={16} className={expanded ? 'rotated' : ''} />
        </button>

        <div className={`project-card__features-wrap ${expanded ? 'project-card__features-wrap--open' : ''}`}>
          <ul className="project-card__features">
            {project.features.map((f, i) => (
              <li key={i} style={{ transitionDelay: `${i * 0.05}s` }}>{f}</li>
            ))}
          </ul>
        </div>

        <div className="project-card__links">
          {hasGithub ? (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn--secondary">
              <GithubIcon size={16} /> GitHub
            </a>
          ) : (
            <span className="project-card__link-placeholder">GitHub link coming soon</span>
          )}

          {hasLive && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
              Live Demo <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;