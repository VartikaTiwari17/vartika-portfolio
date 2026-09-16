import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons';
import { contactInfo } from '../data/contactData';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__name">Vartika Tiwari</span>
          <span className="footer__role">Full Stack Developer</span>
        </div>

        <div className="footer__socials">
          <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GithubIcon size={18} />
          </a>
          <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedinIcon size={18} />
          </a>
          <a href={`mailto:${contactInfo.email}`} aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {year} Vartika Tiwari</span>
      </div>
    </footer>
  );
}

export default Footer;