import { motion } from 'framer-motion';
import { FiChevronRight } from 'react-icons/fi';
import SectionHeader from '../components/SectionHeader';
import { profile } from '../data/profile';

const ExperienceSection = () => (
  <section className="section" id="experience">
    <SectionHeader
      eyebrow="Experience"
      title="Professional Journey"
      description="Building intelligent systems from concept to production across AI, software engineering, and human-centric design."
    />
    <div className="experience-grid" style={{ marginTop: '2.5rem' }}>
      {profile.experience.map((experience, index) => (
        <motion.article
          key={experience.company}
          className="card experience-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: index * 0.1 }}
        >
          <div className="experience-header">
            <div className="card__meta">
              <span className="experience-period">{experience.period}</span>
              <span className="experience-location">{experience.location}</span>
            </div>
            <h3 className="card__title">{experience.role}</h3>
            <p className="experience-company">{experience.company}</p>
          </div>
          <ul className="card__list experience-list">
            {experience.achievements.map((achievement) => (
              <li key={achievement}>
                <FiChevronRight aria-hidden="true" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  </section>
);

export default ExperienceSection;

