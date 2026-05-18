import { useRef, type FormEvent } from 'react'
import { EMAIL } from '../../data/contact'
import { FaGithub } from 'react-icons/fa'
import SectionHeader from './SectionHeader'

interface ContactSectionProps {
  sectionNum?: string
  minimal?: boolean
  headingLevel?: 1 | 2
}

export default function ContactSection({ sectionNum = '04', minimal = false, headingLevel = 2 }: ContactSectionProps) {
  const firstRef = useRef<HTMLInputElement>(null)
  const lastRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)

  const SubHeading: 'h2' | 'h3' = headingLevel === 1 ? 'h2' : 'h3'

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const first = firstRef.current?.value.trim() ?? ''
    const last = lastRef.current?.value.trim() ?? ''
    const email = emailRef.current?.value.trim() ?? ''
    const message = messageRef.current?.value.trim() ?? ''
    if (!first || !email || !message) {
      alert('Please fill in your first name, email, and message.')
      return
    }
    const name = [first, last].filter(Boolean).join(' ')
    const subject = encodeURIComponent('Portfolio Contact from ' + name)
    const body = encodeURIComponent('From: ' + name + '\nEmail: ' + email + '\n\n' + message)
    window.location.href = `mailto:${EMAIL}?subject=` + subject + '&body=' + body
  }

  return (
    <div className="section">
      <SectionHeader num={sectionNum} title="Contact" jpSubtitle="連絡先" minimal={minimal} headingLevel={headingLevel} />
      <div className="contact-grid">
        <form className="contact-form reveal" onSubmit={handleSubmit}>
          <SubHeading>Let's Connect</SubHeading>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="contact-first">First Name</label>
              <input id="contact-first" type="text" placeholder="First" ref={firstRef} autoComplete="given-name" required />
            </div>
            <div className="form-field">
              <label htmlFor="contact-last">Last Name</label>
              <input id="contact-last" type="text" placeholder="Last" ref={lastRef} autoComplete="family-name" />
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="contact-email">Email</label>
            <input id="contact-email" type="email" placeholder="your@email.com" ref={emailRef} autoComplete="email" required />
          </div>
          <div className="form-field">
            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" rows={5} placeholder="What's on your mind?" ref={messageRef} required></textarea>
          </div>
          <button type="submit" className="form-submit">
            Send Message →
          </button>
        </form>
        <div className="contact-socials reveal">
          <SubHeading>Socials</SubHeading>
          <a href={`mailto:${EMAIL}`} className="social-link">
            <span className="social-icon">✉</span>
            <span className="social-label">Email</span>
            <span className="social-sub">{EMAIL}</span>
          </a>
          <a href="https://github.com/SammyG82" target="_blank" rel="noreferrer" className="social-link">
            <span className="social-icon"><FaGithub /></span>
            <span className="social-label">GitHub</span>
            <span className="social-sub">SammyG82</span>
          </a>
          <a href="https://linkedin.com/in/sam-b-griffiths" target="_blank" rel="noreferrer" className="social-link">
            <span className="social-icon">in</span>
            <span className="social-label">LinkedIn</span>
            <span className="social-sub">sam-b-griffiths</span>
          </a>
          <a href="https://drive.google.com/file/d/1pwZ7wRYcrItLzdQV-x2_W1iRP9rbaPsm/view" target="_blank" rel="noreferrer" className="social-link">
            <span className="social-icon">↓</span>
            <span className="social-label">Resume</span>
            <span className="social-sub">View PDF</span>
          </a>
        </div>
      </div>
    </div>
  )
}
