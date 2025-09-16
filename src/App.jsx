import NavBar from './components/NavBar.jsx';
import MatrixBackground from './components/MatrixBackground.jsx';
import Hero from './sections/Hero.jsx';
import EducationSection from './sections/EducationSection.jsx';
import ExperienceSection from './sections/ExperienceSection.jsx';
import ProjectsSection from './sections/ProjectsSection.jsx';
import ServicesSection from './sections/ServicesSection.jsx';
import SkillsSection from './sections/SkillsSection.jsx';
import CredentialsSection from './sections/CredentialsSection.jsx';
import ContactSection from './sections/ContactSection.jsx';
import Footer from './components/Footer.jsx';

const App = () => (
  <>
    <MatrixBackground />
    <NavBar />
    <main>
      <Hero />
      <ServicesSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <CredentialsSection />
      <ContactSection />
    </main>
    <Footer />
  </>
);

export default App;



