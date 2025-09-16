import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { profile } from '../data/profile';

const ExperienceSection = () => (
  <section className="section" id="experience">
    <SectionHeader
      eyebrow="Mission Log"
      title="Delivering intelligent systems from lab to production"
      description="A journey across AI engineering, human-centric interfaces, and resilient software craftsmanship."
    />
    <div className="grid" style={{ marginTop: '2.5rem' }}>
      {profile.experience.map((experience) => (
        <motion.article
          key={experience.company}
          className="card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="card__meta">
            <span>{experience.period}</span>
            <span>{experience.location}</span>
          </div>
          <h3 className="card__title">
            {experience.role} - {experience.company}
          </h3>
          <ul className="card__list">
            {experience.achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  </section>
);

export default ExperienceSection;

