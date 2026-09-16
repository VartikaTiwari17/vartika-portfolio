import { experiences } from '../data/experienceData';
import { useInView } from '../hooks/useInView';
import './Experience.css';

function TimelineItem({ exp, index }) {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className={`timeline__item ${isInView ? 'timeline__item--visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="timeline__marker" />
      <div className="glass timeline__card">
        <span className="timeline__year">{exp.year}</span>
        <h3 className="timeline__role">{exp.role}</h3>
        <span className="timeline__org">{exp.org}</span>

        <ul className="timeline__points">
          {exp.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>

        <div className="timeline__tech">
          {exp.tech.map((t) => (
            <span key={t} className="timeline__tech-badge">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="experience__header">
        <span className="section__eyebrow">04. Experience</span>
        <h2 className="section__title">Where I've Worked</h2>
      </div>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <TimelineItem key={exp.id} exp={exp} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Experience;