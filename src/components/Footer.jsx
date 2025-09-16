import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { profile } from '../data/profile';

const Footer = () => (
  <footer>
    <p>
      Crafted with curiosity by {profile.name}. Reach out via{' '}
      <a href={'mailto:' + profile.email}>email</a> or connect on{' '}
      <a href={profile.linkedin} target="_blank" rel="noreferrer">
        LinkedIn
      </a>{' '}
      and{' '}
      <a href={profile.github} target="_blank" rel="noreferrer">
        GitHub
      </a>
      .
    </p>
    <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
      <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <FiLinkedin size={20} />
      </a>
      <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
        <FiGithub size={20} />
      </a>
    </div>
  </footer>
);

export default Footer;
