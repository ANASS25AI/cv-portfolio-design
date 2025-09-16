import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiSend, FiMapPin, FiPhone } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import SectionHeader from '../components/SectionHeader';
import { profile } from '../data/profile';

const ContactSection = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');

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

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setFeedback('Email service is not configured yet. Update your Vite environment variables.');
      setStatus('error');
      return;
    }

    setStatus('sending');
    setFeedback('Routing your message through the neural relay...');

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name,
          reply_to: email,
          message,
          destination: profile.email,
        },
        publicKey,
      );
      setStatus('success');
      setFeedback('Transmission complete - I will get back to you shortly.');
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
              <FiMail /> {profile.email}
            </li>
            <li>
              <FiPhone /> {profile.phone}
            </li>
            <li>
              <FiMapPin /> {profile.location}
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
