import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { profile } from '../data/profile';

const SkillsSection = () => (
  <section className="section" id="skills">
    <SectionHeader
      eyebrow="Toolchain"
      title="Technologies shaping my approach"
      description="Bridging research and deployment with a stack tuned for experimentation, observability, and sleek delivery."
    />
    <div className="grid" style={{ marginTop: '2.5rem' }}>
      {profile.skills.map((group) => (
        <motion.article
          key={group.label}
          className="card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="card__title">{group.label}</h3>
          <div className="badge-group">
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

