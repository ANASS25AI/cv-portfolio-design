import { motion } from 'framer-motion';
import { FiCalendar } from 'react-icons/fi';
import SectionHeader from '../components/SectionHeader';
import { profile } from '../data/profile';

const EducationSection = () => (
  <section className="section" id="education">
    <SectionHeader
      eyebrow="Education"
      title="Academic Background"
      description="Formal training in AI, data science, and intelligent systems."
    />
    <div className="education-grid" style={{ marginTop: '2.5rem' }}>
      {profile.education.map((entry, index) => (
        <motion.div
          key={entry.degree}
          className="card education-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          {entry.logos && entry.logos.length > 0 && (
            <div className="education-logos">
              {entry.logos.map((logo, i) => (
                <div key={i} className="education-logo-wrapper">
                  <img src={logo} alt="" className="education-logo" />
                </div>
              ))}
            </div>
          )}
          <div className="education-content">
            <div className="education-period">
              <FiCalendar aria-hidden="true" />
              <span>{entry.period}</span>
            </div>
            <h3 className="card__title education-degree">{entry.degree}</h3>
            <p className="education-school">{entry.school}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default EducationSection;

