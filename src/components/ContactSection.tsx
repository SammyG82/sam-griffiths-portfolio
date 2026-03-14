import { useRef } from 'react'
import SectionHeader from './SectionHeader'

interface ContactSectionProps {
  sectionNum?: string
  showSep?: boolean
  minimal?: boolean
}

export default function ContactSection({ sectionNum = '04', showSep = false, minimal = false }: ContactSectionProps) {
  const firstRef = useRef<HTMLInputElement>(null)
  const lastRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)

  function handleSubmit() {
    const first = firstRef.current?.value.trim() ?? ''
    const last = lastRef.current?.value.trim() ?? ''
    const email = emailRef.current?.value.trim() ?? ''
    const message = messageRef.current?.value.trim() ?? ''
    if (!first || !email || !message) {
      alert('Please fill in your first name, email, and message.')
      return
    }
    const subject = encodeURIComponent('Portfolio Contact from ' + first + ' ' + last)
    const body = encodeURIComponent('From: ' + first + ' ' + last + '\nEmail: ' + email + '\n\n' + message)
    window.location.href = 'mailto:sgriffiths@ucsd.edu?subject=' + subject + '&body=' + body
  }

  return (
    <div className="section">
      {showSep && <><div className="section-sep reveal"></div><br /><br /></>}
      <SectionHeader num={sectionNum} title="Contact" jpSubtitle="連絡先" minimal={minimal} />
      <div className="contact-grid">
        <div className="contact-form reveal">
          <h3>Let's Connect</h3>
          <div className="form-row">
            <div className="form-field">
              <label>First Name</label>
              <input type="text" placeholder="First" ref={firstRef} />
            </div>
            <div className="form-field">
              <label>Last Name</label>
              <input type="text" placeholder="Last" ref={lastRef} />
            </div>
          </div>
          <div className="form-field">
            <label>Email</label>
            <input type="email" placeholder="your@email.com" ref={emailRef} />
          </div>
          <div className="form-field">
            <label>Message</label>
            <textarea rows={5} placeholder="What's on your mind?" ref={messageRef}></textarea>
          </div>
          <button className="form-submit" onClick={handleSubmit}>
            Send Message →
          </button>
        </div>
        <div className="contact-socials reveal">
          <h3>Socials</h3>
          <a href="mailto:sgriffiths@ucsd.edu" className="social-link">
            <span className="social-icon">✉</span>
            <span className="social-label">Email</span>
            <span className="social-sub">sgriffiths@ucsd.edu</span>
          </a>
          <a href="https://github.com/SammyG82" target="_blank" rel="noreferrer" className="social-link">
            <span className="social-icon">⌥</span>
            <span className="social-label">GitHub</span>
            <span className="social-sub">SammyG82</span>
          </a>
          <a href="https://linkedin.com/in/sam-b-griffiths" target="_blank" rel="noreferrer" className="social-link">
            <span className="social-icon">in</span>
            <span className="social-label">LinkedIn</span>
            <span className="social-sub">sam-b-griffiths</span>
          </a>
          <a href="https://drive.google.com/file/d/1zZn3F1_POlVNxyEZJiMzVzOy7O4lHa3B/view" target="_blank" rel="noreferrer" className="social-link">
            <span className="social-icon">↓</span>
            <span className="social-label">Resume</span>
            <span className="social-sub">View PDF</span>
          </a>
        </div>
      </div>
    </div>
  )
}
