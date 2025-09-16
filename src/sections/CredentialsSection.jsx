import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { profile } from '../data/profile';

const CredentialsSection = () => (
  <section className="section" id="credentials">
    <SectionHeader
      eyebrow="Credentials"
      title="Certifications, hackathons, and ongoing exploration"
      description="Signals of permanent beta - investing in learning sprints, community building, and collaborative experiments."
    />
    <div className="split" style={{ marginTop: '2.5rem' }}>
      <motion.div
        className="card"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="card__title">Certifications</h3>
        <ul className="card__list">
          {profile.certifications.map((certification) => (
            <li key={certification}>{certification}</li>
          ))}
        </ul>
      </motion.div>
      <motion.div
        className="card"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="card__title">Hackathons & Camps</h3>
        <ul className="card__list">
          {profile.hackathons.map((event) => (
            <li key={event}>{event}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

export default CredentialsSection;

