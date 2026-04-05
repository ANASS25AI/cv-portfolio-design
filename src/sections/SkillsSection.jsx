import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { profile } from '../data/profile';

const SkillsSection = () => (
  <section className="section" id="skills">
    <SectionHeader
      eyebrow="Skills"
      title="Technical Expertise"
      description="A comprehensive stack for building AI-powered solutions, from research to production deployment."
    />
    <div className="skills-grid" style={{ marginTop: '2.5rem' }}>
      {profile.skills.map((group, index) => (
        <motion.article
          key={group.label}
          className="card skill-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
        >
          <h3 className="card__title skill-label">{group.label}</h3>
          <div className="badge-group skill-badges">
            {group.items.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);

export default SkillsSection;

