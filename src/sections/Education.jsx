import { GraduationCap } from 'lucide-react';
import { education } from '../data/educationData';
import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';
import './Education.css';

export default function Education() {
return ( <section id="education" className="section education"> <div className="container"> <Reveal> <div className="education__header"> <SectionTitle
           eyebrow="MY BACKGROUND"
           title="Education"
           description="My academic journey and qualifications."
         /> </div> </Reveal>


    <div className="education__list">
      {education.map((item) => (
        <Reveal key={item.id}>
          <article
            className={`education__card glass ${
              item.primary ? 'education__card--primary' : ''
            }`}
          >
            <div className="education__icon">
              <GraduationCap size={25} />
            </div>

            <div className="education__info">
              <h3 className="education__degree">{item.degree}</h3>
              <span className="education__institution">
                {item.institution}
              </span>
            </div>

            <div className="education__meta">
              <span className="education__duration">{item.duration}</span>
              <span className="education__score">{item.score}</span>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  </div>
</section>


);
}
