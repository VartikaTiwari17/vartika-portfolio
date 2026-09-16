import { useState, Suspense, lazy } from 'react';
import { skillCategories } from '../data/skillsData';
import { useIsMobile } from '../hooks/useIsMobile';
import { useReducedMotion } from '../hooks/useReducedMotion';
import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';
import './Skills.css';
import '../components/SkillsOrbit.css';

const SkillsOrbit = lazy(() => import('../components/SkillsOrbit'));

function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);
  const currentSkills = skillCategories.find((cat) => cat.id === activeCategory)?.skills || [];
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();
  const show3D = !isMobile && !prefersReducedMotion;

  return (
    <section id="skills" className="section skills">
      <Reveal>
        <div className="skills__header">
          <SectionTitle eyebrow="03. Skills" title="What I Work With" />
        </div>
      </Reveal>

      {show3D && (
        <Reveal>
          <div className="skills__orbit-wrap">
            <Suspense fallback={null}>
              <SkillsOrbit />
            </Suspense>
          </div>
        </Reveal>
      )}

      <Reveal>
        <div className="skills__tabs">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              className={`skills__tab ${activeCategory === cat.id ? 'skills__tab--active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="skills__grid">
          {currentSkills.map((skill) => (
            <div key={skill} className="glass skills__chip">
              {skill}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default Skills;