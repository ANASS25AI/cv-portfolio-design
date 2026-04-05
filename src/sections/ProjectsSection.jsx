import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import SectionHeader from '../components/SectionHeader';

const projects = [
  {
    name: 'LLM and RAG Assistant',
    description: 'Full-stack conversational AI using LangChain, Ollama, and vector-based retrieval for document-aware question answering with a React chat interface.',
    tags: ['LangChain', 'RAG', 'Ollama', 'React', 'FastAPI'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop',
    link: null,
  },
  {
    name: 'Lemon Defect Detection',
    description: 'Computer vision system using fine-tuned MobileNetV2 and custom CNN with Grad-CAM visualizations for explainable defect detection.',
    tags: ['TensorFlow', 'CNN', 'Computer Vision', 'Grad-CAM'],
    image: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=400&h=250&fit=crop',
    link: null,
  },
  {
    name: 'Human Activity Recognition',
    description: 'Deep learning models including CNN, LSTM, and hybrid architectures for smart home and ambient intelligence applications.',
    tags: ['Deep Learning', 'LSTM', 'CNN', 'PyTorch'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop',
    link: null,
  },
  {
    name: 'Digit Recognition System',
    description: 'Convolutional neural network for handwritten digit classification on MNIST with preprocessing and evaluation pipelines.',
    tags: ['TensorFlow', 'CNN', 'MNIST', 'Python'],
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop',
    link: null,
  },
  {
    name: 'Multimodal Biometric Systems',
    description: 'Affective computing and brain-computer interaction using EEG, GSR, and 3D camera data for emotion and gesture recognition.',
    tags: ['EEG', 'Signal Processing', 'BCI', 'Python'],
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=250&fit=crop',
    link: null,
  },
];

const categories = ['All', 'AI/ML', 'Computer Vision', 'Deep Learning'];

const ProjectsSection = () => (
  <section className="section" id="projects">
    <SectionHeader
      eyebrow="Selected Work"
      title="Projects that blend AI intelligence with great UX"
      description="From RAG systems to computer vision — building intelligent applications that solve real problems."
    />
    
    <motion.div
      className="projects-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      <div className="projects-grid-new">
        {projects.map((project) => (
          <motion.article
            key={project.name}
            className="project-card-new"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="project-image-wrapper">
              <img 
                src={project.image} 
                alt={project.name}
                className="project-image"
                loading="lazy"
              />
              <div className="project-image-overlay" />
            </div>
            
            <div className="project-content">
              <h3 className="project-title-new">{project.name}</h3>
              <p className="project-desc">{project.description}</p>
              
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
              
              {project.link && (
                <a href={project.link} className="project-link" target="_blank" rel="noreferrer">
                  View details <FiExternalLink />
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  </section>
);

export default ProjectsSection;

