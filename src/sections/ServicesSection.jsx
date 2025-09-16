import { motion } from 'framer-motion';
import { FiCpu, FiMessageSquare, FiAperture, FiLayers, FiUsers } from 'react-icons/fi';
import SectionHeader from '../components/SectionHeader';
import { profile } from '../data/profile';

const iconMap = {
  FiCpu,
  FiMessageSquare,
  FiAperture,
  FiLayers,
  FiUsers,
};

const ServicesSection = () => (
  <section className="section" id="services">
    <SectionHeader
      eyebrow="Offerings"
      title="Services engineered for AI-first teams"
      description="From strategic roadmaps to hands-on delivery, I partner with product leaders to ship intelligent, measurable solutions."
    />
    <motion.div
      className="grid services-grid"
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
      {profile.services.map((service) => {
        const Icon = iconMap[service.icon] || FiCpu;
        return (
          <motion.article
            key={service.title}
            className="card card--service"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="service-icon">
              <Icon size={26} />
            </div>
            <h3 className="card__title dot-text">{service.title}</h3>
            <p className="status-text">{service.blurb}</p>
          </motion.article>
        );
      })}
    </motion.div>
  </section>
);

export default ServicesSection;
