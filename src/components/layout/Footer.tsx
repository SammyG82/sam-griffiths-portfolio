import { MdEmail } from 'react-icons/md'
import { EMAIL } from '../../data/contact'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-left">Sam Griffiths</div>
      <div className="footer-icons">
        <a href={`mailto:${EMAIL}`} className="footer-icon-link" aria-label="Email">
          <MdEmail />
        </a>
        <a href="https://github.com/SammyG82" target="_blank" rel="noreferrer" className="footer-icon-link" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/sam-b-griffiths" target="_blank" rel="noreferrer" className="footer-icon-link" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  )
}
