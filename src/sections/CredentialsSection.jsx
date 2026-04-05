import { motion } from 'framer-motion';
import { FiAward, FiCode, FiCheck } from 'react-icons/fi';
import SectionHeader from '../components/SectionHeader';
import { profile } from '../data/profile';

const CredentialsSection = () => (
  <section className="section" id="credentials">
    <SectionHeader
      eyebrow="Credentials"
      title="Certifications & Achievements"
      description="Continuous learning through courses, hackathons, and community engagement."
    />
    <div className="split credentials-split" style={{ marginTop: '2.5rem' }}>
      <motion.div
        className="card credentials-card"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="credentials-header">
          <FiAward className="credentials-icon" />
          <h3 className="card__title">Certifications</h3>
        </div>
        <ul className="card__list credentials-list">
          {profile.certifications.map((certification) => (
            <li key={certification}>
              <FiCheck aria-hidden="true" />
              <span>{certification}</span>
            </li>
          ))}
        </ul>
      </motion.div>
      <motion.div
        className="card credentials-card"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="credentials-header">
          <FiCode className="credentials-icon" />
          <h3 className="card__title">Hackathons & Camps</h3>
        </div>
        <ul className="card__list credentials-list">
          {profile.hackathons.map((event) => (
            <li key={event}>
              <FiCheck aria-hidden="true" />
              <span>{event}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

export default CredentialsSection;

