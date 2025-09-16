import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { profile } from '../data/profile';

const ProjectsSection = () => (
  <section className="section" id="projects">
    <SectionHeader
      eyebrow="Build Log"
      title="Prototyping the next generation of AI-native products"
      description="From RAG copilots to edge intelligence, here are highlights from research, academia, and industry collaborations."
    />
    <motion.div
      className="grid"
      style={{ marginTop: '2.5rem' }}
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
      {profile.projects.map((project) => (
        <motion.article
          key={project.name}
          className="card"
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h3 className="card__title">{project.name}</h3>
          <p className="status-text">{project.description}</p>
        </motion.article>
      ))}
    </motion.div>
  </section>
);

export default ProjectsSection;

