import { additionalProjects } from '../data/additionalProjectsData';
import ProjectCard from '../components/ProjectCard';
import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';
import './Projects.css';

function MoreProjects() {
  return (
    <section id="more-projects" className="section projects">
      <Reveal>
        <div className="projects__header">
          <SectionTitle eyebrow="Also Built" title="More Projects" />
        </div>
      </Reveal>

      <div className="projects__grid">
        {additionalProjects.map((project, i) => (
          <Reveal key={project.id} delay={i * 0.15}>
            <ProjectCard project={project} featured={false} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default MoreProjects;