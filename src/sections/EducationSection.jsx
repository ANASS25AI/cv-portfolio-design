import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { profile } from '../data/profile';

const EducationSection = () => (
  <section className="section" id="education">
    <SectionHeader
      eyebrow="Knowledge Base"
      title="Formal training across AI, data, and intelligent systems"
    />
    <div className="timeline" style={{ marginTop: '2.5rem' }}>
      {profile.education.map((entry) => (
        <motion.div
          key={entry.degree}
          className="timeline__item"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <p className="card__meta" style={{ marginBottom: '0.5rem' }}>
            <span>{entry.period}</span>
          </p>
          <h3 className="card__title">{entry.degree}</h3>
          <p className="status-text">{entry.school}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default EducationSection;

