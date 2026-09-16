import { projects } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';
import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="section projects">
      <Reveal>
        <div className="projects__header">
          <SectionTitle eyebrow="05. Projects" title="Things I've Built" />
        </div>
      </Reveal>

      <div className="projects__grid">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={i * 0.15}>
            <ProjectCard project={project} featured={project.featured} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Projects;