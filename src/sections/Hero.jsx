import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import SectionHeader from '../components/SectionHeader';
import { profile } from '../data/profile';

const heroCards = [
  {
    title: 'AI Systems',
    detail: 'Multi-agent orchestration, RAG pipelines, LLM tooling.',
  },
  {
    title: 'Software Craft',
    detail: 'Full-stack engineering with React, Django, and cloud APIs.',
  },
  {
    title: 'Human + Machine',
    detail: 'Interfaces that bring explainable intelligence to teams.',
  },
];

const Hero = () => (
  <section className="section hero" id="about">
    <div className="hero__intro">
      <motion.div
        className="hero__image-wrapper"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img 
          src="/anass.png" 
          alt={`${profile.name} - AI Engineer`} 
          className="hero__image"
        />
        <div className="hero__image-glow" />
      </motion.div>
      
      <motion.div
        className="hero__content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="hero__eyebrow">AI Engineer | Tech Futurist</p>
        <h1 className="hero__title">{profile.name}</h1>
        <p className="hero__description">{profile.summary}</p>
        <div className="hero__links">
          <a className="button button--primary" href="#contact">
            <FiMail /> Get in Touch
          </a>
          <a className="button" href={profile.linkedin} target="_blank" rel="noreferrer">
            <FiLinkedin /> LinkedIn
          </a>
          <a className="button" href={profile.github} target="_blank" rel="noreferrer">
            <FiGithub /> GitHub
          </a>
        </div>
      </motion.div>
    </div>

    <div className="hero__grid">
      <motion.div
        className="card card--highlight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <SectionHeader
          eyebrow="Location"
          title="Based in Milan, Italy"
          description="Available for remote and hybrid opportunities worldwide"
        />
        <div className="hero__contact-info">
          <a href={`mailto:${profile.email}`} className="hero__contact-item">
            <FiMail /> {profile.email}
          </a>
          <a href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`} className="hero__contact-item">
            {profile.phone}
          </a>
        </div>
        <div className="badge-group" style={{ marginTop: '1.2rem' }}>
          {profile.languages.map((language) => (
            <span key={language.name} className="chip">
              {language.name} · {language.level}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="grid hero__cards-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
      >
        {heroCards.map((card) => (
          <motion.div
            key={card.title}
            className="card card--compact"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h3 className="card__title">{card.title}</h3>
            <p className="status-text">{card.detail}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Hero;

