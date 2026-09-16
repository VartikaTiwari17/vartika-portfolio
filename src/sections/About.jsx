import { aboutParagraphs, highlights } from '../data/aboutData';
import Reveal from '../components/Reveal';
import StatCard from '../components/StatCard';
import SectionTitle from '../components/SectionTitle';
import './About.css';

function About() {
  return (
    <section id="about" className="section about">
      <Reveal>
        <div className="about__header">
          <SectionTitle eyebrow="02. About" title="Who I Am" />
        </div>
      </Reveal>

      <div className="about__grid">
        <Reveal direction="left">
          <div className="about__text">
            {aboutParagraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </Reveal>

        <div className="about__highlights">
          {highlights.map((item, i) => (
            <Reveal key={item.id} direction="right" delay={i * 0.1}>
              <StatCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;