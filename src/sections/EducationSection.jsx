import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin } from 'react-icons/fi';
import SectionHeader from '../components/SectionHeader';
import { profile } from '../data/profile';

const EducationSection = () => (
  <section className="section" id="education">
    <SectionHeader
      eyebrow="Education"
      title="Academic Background"
      description="Formal training in AI, data science, and intelligent systems."
    />
    <div className="timeline education-timeline" style={{ marginTop: '2.5rem' }}>
      {profile.education.map((entry, index) => (
        <motion.div
          key={entry.degree}
          className="timeline__item education-item"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <div className="education-period">
            <FiCalendar aria-hidden="true" />
            <span>{entry.period}</span>
          </div>
          <h3 className="card__title education-degree">{entry.degree}</h3>
          <p className="education-school">
            <FiMapPin aria-hidden="true" />
            <span>{entry.school}</span>
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default EducationSection;

