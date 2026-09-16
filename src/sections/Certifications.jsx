import { Award } from 'lucide-react';
import { certifications } from '../data/certificationsData';
import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';
import './Certifications.css';

function Certifications() {
  return (
    <section id="certifications" className="section certifications">
      <Reveal>
        <div className="certifications__header">
          <SectionTitle eyebrow="07. Certifications" title="Continuous Learning" />
        </div>
      </Reveal>

      <Reveal>
        <div className="certifications__grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="glass certifications__card">
              <div className="certifications__icon">
                <Award size={22} />
              </div>
              <h3 className="certifications__name">{cert.name}</h3>
              <span className="certifications__issuer">{cert.issuer}</span>
              <span className="certifications__year">{cert.year}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default Certifications;