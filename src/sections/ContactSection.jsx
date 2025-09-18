import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiSend, FiMapPin, FiPhone } from 'react-icons/fi';
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
      setFeedback('Please complete all fields before transmitting.');
      setStatus('error');
      return;
    }

    setStatus('sending');
    setFeedback('Routing your message through the neural relay...');

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
      setFeedback('Transmission complete - check your inbox for my reply soon.');
      setFormState({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('error');
      setFeedback('Signal lost. Please retry or reach me directly at nassirri115@gmail.com.');
    }
  };

  const statusClass = status === 'error' ? 'contact-status status-text' : 'contact-status';

  return (
    <section className="section" id="contact">
      <SectionHeader
        eyebrow="Signal"
        title="Let's collaborate on the next frontier of AI"
        description="Drop a line for collaborations, research partnerships, or speaking engagements."
      />
      <div className="split" style={{ marginTop: '2.5rem' }}>
        <motion.div
          className="card"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="card__title">Direct Channels</h3>
          <ul className="card__list">
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
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="card"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Neo or Trinity"
              value={formState.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formState.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Let's explore a new AI venture..."
              value={formState.message}
              onChange={handleChange}
            />
          </div>
          <button className="button" type="submit" disabled={status === 'sending'}>
            <FiSend /> {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          {feedback && <p className={statusClass}>{feedback}</p>}
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
