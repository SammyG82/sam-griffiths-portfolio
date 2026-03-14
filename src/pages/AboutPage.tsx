import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionHeader from '../components/SectionHeader'
import { skills } from '../data/skills'

export default function AboutPage() {
  useScrollReveal()

  return (
    <div style={{ paddingTop: '60px', position: 'relative', zIndex: 10, minHeight: '100vh' }}>
      <div className="section">

        {/* Header */}
        <SectionHeader num="02" title="About" jpSubtitle="自己紹介" minimal />

        {/* Bio + Details */}
        <div className="about-grid">
          <div className="about-text reveal">
            <p>
              Hello! My name is <span>Sam Griffiths</span> and I'm a first-year Probability and Statistics student at
              the <span>University of California, San Diego</span>.
            </p>
            <p>
              I'm passionate about the intersection of <span>data science and software engineering</span> — building
              systems that not only look great but extract meaningful insight from real-world data. From ETL pipelines
              and machine learning models to full-stack production web apps, I love working across the stack and
              shipping things that actually get used.
            </p>
            <p>
              At <span>DS3 (Data Science Student Society)</span>, I serve as a Full Stack Engineer on the software
              team — building and maintaining production web applications used by the club and its events.
            </p>
            <p>
              Outside of academics, I love keeping up with sports — mainly <span>football and basketball</span> — and
              I'm always down for a good movie, TV show, or anime.
            </p>
          </div>

          <div className="about-details reveal">
            <div className="detail-block">
              <div className="detail-label">Education</div>
              <div className="detail-value">
                B.S. Probability &amp; Statistics<br />
                UC San Diego · Class of 2029
              </div>
            </div>
            <div className="detail-block">
              <div className="detail-label">GPA</div>
              <div className="detail-value">3.9 / 4.0</div>
            </div>
            <div className="detail-block">
              <div className="detail-label">Current Role</div>
              <div className="detail-value">
                Full Stack Engineer<br />
                Data Science Student Society (DS3)
              </div>
            </div>
            <div className="detail-block">
              <div className="detail-label">Location</div>
              <div className="detail-value">San Diego, CA</div>
            </div>
            <div className="detail-block">
              <div className="detail-label">Relevant Coursework</div>
              <div className="detail-value">DSC 10 · Math 20B</div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="section-sep reveal" style={{ marginTop: '80px' }}></div>
        <br /><br />
        <SectionHeader num="03" title="Skills" jpSubtitle="技術スタック" minimal />
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
          <Link
            to="/projects"
            style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', letterSpacing: '0.4em', color: 'rgba(200,140,40,0.7)', textTransform: 'uppercase', border: '1px solid rgba(200,140,40,0.35)', padding: '16px 32px', background: 'rgba(200,140,40,0.06)', textDecoration: 'none' }}
          >
            View Projects →
          </Link>
          <Link
            to="/#contact"
            style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', letterSpacing: '0.4em', color: 'rgba(200,140,40,0.45)', textTransform: 'uppercase', border: '1px solid rgba(200,140,40,0.2)', padding: '16px 32px', textDecoration: 'none' }}
          >
            Contact →
          </Link>
        </div>

      </div>
    </div>
  )
}
