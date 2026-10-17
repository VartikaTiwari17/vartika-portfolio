import { useState } from 'react';
import { Mail, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/icons/BrandIcons';
import { contactInfo } from '../data/contactData';
import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';
import './Contact.css';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/meaenbpv';

function Contact() {
const [formData, setFormData] = useState({
name: '',
email: '',
message: '',
});

const [errors, setErrors] = useState({});
const [status, setStatus] = useState('idle');

const validate = () => {
const newErrors = {};

```
if (!formData.name.trim()) {
  newErrors.name = 'Please enter your name.';
}

if (!formData.email.trim()) {
  newErrors.email = 'Please enter your email address.';
} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
  newErrors.email = 'Please enter a valid email address.';
}

if (!formData.message.trim()) {
  newErrors.message = 'Please enter a message.';
}

return newErrors;
```

};

const handleChange = (e) => {
const { name, value } = e.target;

```
setFormData((prev) => ({
  ...prev,
  [name]: value,
}));

setErrors((prev) => ({
  ...prev,
  [name]: '',
}));

if (status !== 'idle') {
  setStatus('idle');
}
```

};

const handleSubmit = async (e) => {
e.preventDefault();

```
const newErrors = validate();
setErrors(newErrors);

if (Object.keys(newErrors).length > 0) {
  return;
}

setStatus('sending');

try {
  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    }),
  });

  const result = await response.json().catch(() => ({}));

  if (!response.ok) {
    const message =
      result.errors?.map((error) => error.message).join(' ') ||
      'Your message could not be sent. Please try again.';

    throw new Error(message);
  }

  setStatus('success');
  setFormData({
    name: '',
    email: '',
    message: '',
  });
  setErrors({});
} catch (error) {
  console.error('Contact form submission failed:', error);
  setStatus('error');
}
```

};

return ( <section id="contact" className="section contact"> <Reveal> <div className="contact__header"> <SectionTitle eyebrow="08. Contact" title="Let's Work Together" /> <p className="contact__subtitle">
Open to opportunities — feel free to reach out. </p> </div> </Reveal>

```
  <Reveal>
    <div className="contact__grid">
      <div className="contact__info">
        <a
          href={`mailto:${contactInfo.email}`}
          className="glass contact__info-item"
        >
          <Mail size={18} />
          <span>{contactInfo.email}</span>
        </a>

        <a
          href={`tel:${contactInfo.phone}`}
          className="glass contact__info-item"
        >
          <Phone size={18} />
          <span>{contactInfo.phone}</span>
        </a>

        <a
          href={contactInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="glass contact__info-item"
        >
          <LinkedinIcon size={18} />
          <span>LinkedIn</span>
        </a>

        <a
          href={contactInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="glass contact__info-item"
        >
          <GithubIcon size={18} />
          <span>GitHub</span>
        </a>
      </div>

      <form
        className="glass contact__form"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="contact__field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            maxLength={100}
            value={formData.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            required
          />
          {errors.name && (
            <span id="name-error" className="contact__error" role="alert">
              {errors.name}
            </span>
          )}
        </div>

        <div className="contact__field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={254}
            value={formData.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            required
          />
          {errors.email && (
            <span id="email-error" className="contact__error" role="alert">
              {errors.email}
            </span>
          )}
        </div>

        <div className="contact__field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            maxLength={5000}
            value={formData.message}
            onChange={handleChange}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error' : undefined}
            required
          />
          {errors.message && (
            <span id="message-error" className="contact__error" role="alert">
              {errors.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="btn btn--primary contact__submit"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? (
            <>
              Sending...
              <Send size={16} />
            </>
          ) : (
            <>
              Send Message
              <Send size={16} />
            </>
          )}
        </button>

        {status === 'success' && (
          <p className="contact__status contact__status--success" role="status">
            <CheckCircle size={18} />
            Your message has been submitted successfully. Thank you for reaching out!
          </p>
        )}

        {status === 'error' && (
          <p className="contact__status contact__status--error" role="alert">
            <AlertCircle size={18} />
            We couldn't send your message. Please try again or contact me directly by email.
          </p>
        )}
      </form>
    </div>
  </Reveal>
</section>
```

);
}

export default Contact;
