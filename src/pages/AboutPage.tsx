import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionHeader from '../components/ui/SectionHeader'
import AboutContent from '../components/ui/AboutContent'
import { skills } from '../data/skills'

export default function AboutPage() {
  useScrollReveal()

  return (
    <div className="page-wrapper">
      <div className="section">

        {/* Header */}
        <SectionHeader num="02" title="About" jpSubtitle="自己紹介" minimal />

        {/* Bio + Details */}
        <AboutContent />

        {/* Skills */}
        <div className="section-sep reveal" style={{ marginTop: '80px' }}></div>
        <div style={{ marginTop: '48px' }}>
          <SectionHeader num="03" title="Skills" jpSubtitle="技術スタック" minimal />
        </div>
        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.group} className="skill-group reveal">
              <div className="skill-group-title">{group.group}</div>
              <div className="skill-list">
                {group.items.map((item) => (
                  <span key={item} className="skill-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer nav */}
        <div className="reveal" style={{ marginTop: '80px', borderTop: '1px solid rgba(200,140,40,0.1)', paddingTop: '60px', display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <Link to="/projects" className="btn-link">View Projects →</Link>
          <Link to="/#contact" className="btn-link--dim">Contact →</Link>
        </div>

      </div>
    </div>
  )
}
