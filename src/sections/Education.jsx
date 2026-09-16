import { GraduationCap } from 'lucide-react';
import { education } from '../data/educationData';
import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';
import './Education.css';

function Education() {
  return (
    <section id="education" className="section education">
      <Reveal>
        <div className="education__header">
          <SectionTitle eyebrow="06. Education" title="Academic Background" />
        </div>
      </Reveal>

      <Reveal>
        <div className="education__list">
          {education.map((edu) => (
            <div
              key={edu.id}
              className={`glass education__card ${edu.primary ? 'education__card--primary' : ''}`}
            >
              <div className="education__icon">
                <GraduationCap size={22} />
              </div>
              <div className="education__info">
                <h3 className="education__degree">{edu.degree}</h3>
                <span className="education__institution">{edu.institution}</span>
              </div>
              <div className="education__meta">
                <span className="education__duration">{edu.duration}</span>
                <span className="education__score">{edu.score}</span>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default Education;