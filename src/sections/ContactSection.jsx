import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiSend, FiMapPin, FiPhone, FiLinkedin, FiGithub } from 'react-icons/fi';
import SectionHeader from '../components/SectionHeader';
import { profile } from '../data/profile';

const FORM_ENDPOINT = `https://formsubmit.co/ajax/${encodeURIComponent(profile.email)}`;

const ContactSection = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');

  const mailHref = `mailto:${profile.email}`;
  const phoneHref = `tel:${profile.phone.replace(/[^+\d]/g, '')}`;
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(profile.location)}`;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, message } = formState;
    if (!name || !email || !message) {
      setFeedback('Please fill in all fields before sending.');
      setStatus('error');
      return;
    }

    setStatus('sending');
    setFeedback('Sending your message...');

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `Portfolio contact from ${name}`,
          _replyto: email,
        }),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok || data.success === 'false' || data.success === false) {
        const messageText = data.message || 'Form service returned an unexpected response.';
        throw new Error(messageText);
      }

      setStatus('success');
      setFeedback('Message sent successfully! I\'ll get back to you soon.');
      setFormState({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('error');
      setFeedback(`Failed to send. Please email me directly at ${profile.email}`);
    }
  };

  const statusClass = status === 'error' 
    ? 'contact-feedback contact-feedback--error' 
    : status === 'success' 
    ? 'contact-feedback contact-feedback--success'
    : 'contact-feedback';

  return (
    <section className="section" id="contact">
      <SectionHeader
        eyebrow="Contact"
        title="Let's Work Together"
        description="Interested in collaboration, consulting, or just want to say hello? I'd love to hear from you."
      />
      <div className="split contact-split" style={{ marginTop: '2.5rem' }}>
        <motion.div
          className="card contact-info-card"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="card__title">Get in Touch</h3>
          <p className="contact-intro">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <ul className="card__list contact-list">
            <li>
              <FiMail aria-hidden="true" />
              <a href={mailHref}>{profile.email}</a>
            </li>
            <li>
              <FiPhone aria-hidden="true" />
              <a href={phoneHref}>{profile.phone}</a>
            </li>
            <li>
              <FiMapPin aria-hidden="true" />
              <a href={mapsHref} target="_blank" rel="noreferrer">
                {profile.location}
              </a>
            </li>
          </ul>
          <div className="contact-social">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-social-link" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="contact-social-link" aria-label="GitHub">
              <FiGithub />
            </a>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="card contact-form"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="card__title">Send a Message</h3>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              value={formState.name}
              onChange={handleChange}
              autoComplete="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              value={formState.email}
              onChange={handleChange}
              autoComplete="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell me about your project or idea..."
              value={formState.message}
              onChange={handleChange}
              rows="5"
            />
          </div>
          <button className="button button--primary button--full" type="submit" disabled={status === 'sending'}>
            <FiSend /> {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          {feedback && <p className={statusClass}>{feedback}</p>}
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
