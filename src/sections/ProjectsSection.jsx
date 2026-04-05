import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import SectionHeader from '../components/SectionHeader';
import { profile } from '../data/profile';

const ProjectsSection = () => (
  <section className="section" id="projects">
    <SectionHeader
      eyebrow="Projects"
      title="Selected Work & Research"
      description="Highlights from research, academic projects, and industry collaborations — from RAG systems to edge intelligence."
    />
    <motion.div
      className="projects-grid"
      style={{ marginTop: '2.5rem' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {profile.projects.map((project) => (
        <motion.article
          key={project.name}
          className="card project-card"
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
        >
          <h3 className="card__title project-title">{project.name}</h3>
          <p className="project-description">{project.description}</p>
        </motion.article>
      ))}
    </motion.div>
  </section>
);

export default ProjectsSection;

