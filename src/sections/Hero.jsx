import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
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
    <div className="hero__content">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="hero__eyebrow">AI Engineer | Tech Futurist</p>
        <h1 className="hero__title">{profile.name}</h1>
        <p className="hero__description">{profile.summary}</p>
        <div className="hero__links">
          <a className="button" href="#contact">
            <FiMail /> Initiate Contact
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
        className="card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <SectionHeader
          eyebrow="Coordinates"
          title="Operating from Milan and shaping the future of AI experiences"
          description={[profile.location, profile.phone, profile.email].join(' | ')}
        />
        <div className="badge-group" style={{ marginTop: '1.2rem' }}>
          {profile.languages.map((language) => (
            <span key={language.name} className="chip">
              {language.name} - {language.level}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="grid"
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
            className="card"
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

