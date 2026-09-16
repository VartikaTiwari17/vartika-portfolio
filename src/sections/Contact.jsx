import { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/icons/BrandIcons';
import { contactInfo } from '../data/contactData';
import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setStatus('not-configured');
    }
  };

  return (
    <section id="contact" className="section contact">
      <Reveal>
        <div className="contact__header">
          <SectionTitle eyebrow="08. Contact" title="Let's Work Together" />
          <p className="contact__subtitle">Open to opportunities — feel free to reach out.</p>
        </div>
      </Reveal>

      <Reveal>
        <div className="contact__grid">
          <div className="contact__info">
            <a href={`mailto:${contactInfo.email}`} className="glass contact__info-item">
              <Mail size={18} /><span>{contactInfo.email}</span>
            </a>
            <a href={`tel:${contactInfo.phone}`} className="glass contact__info-item">
              <Phone size={18} /><span>{contactInfo.phone}</span>
            </a>
            <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="glass contact__info-item">
              <LinkedinIcon size={18} /><span>LinkedIn</span>
            </a>
            <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="glass contact__info-item">
              <GithubIcon size={18} /><span>GitHub</span>
            </a>
          </div>

          <form className="glass contact__form" onSubmit={handleSubmit} noValidate>
            <div className="contact__field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} aria-invalid={!!errors.name} />
              {errors.name && <span className="contact__error">{errors.name}</span>}
            </div>

            <div className="contact__field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} aria-invalid={!!errors.email} />
              {errors.email && <span className="contact__error">{errors.email}</span>}
            </div>

            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} aria-invalid={!!errors.message} />
              {errors.message && <span className="contact__error">{errors.message}</span>}
            </div>

            <button type="submit" className="btn btn--primary contact__submit">
              Send Message <Send size={16} />
            </button>

            {status === 'not-configured' && (
              <p className="contact__status">
                Form validated successfully. Email sending isn't connected yet —
                set up Formspree or EmailJS to activate this (see project README).
              </p>
            )}
          </form>
        </div>
      </Reveal>
    </section>
  );
}

export default Contact;