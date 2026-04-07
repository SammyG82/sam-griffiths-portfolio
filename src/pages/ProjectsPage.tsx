import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionHeader from '../components/ui/SectionHeader'
import ProjectCard from '../components/ui/ProjectCard'
import { projects } from '../data/projects'

export default function ProjectsPage() {
  useScrollReveal()

  const years = [...new Set(projects.map((p) => p.year))].sort((a, b) => b - a)

  return (
    <div className="page-wrapper">
      <div className="section">
        <SectionHeader num="01" title="Projects" jpSubtitle="プロジェクト" minimal />

        {(() => {
          let counter = 0
          return years.map((year) => (
            <div key={year} style={{ marginBottom: '72px' }}>
              <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '36px' }}>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', letterSpacing: '0.4em', color: 'rgba(200,140,40,0.6)', flexShrink: 0 }}>
                  {year}
                </span>
                <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(200,140,40,0.25), transparent)' }}></div>
              </div>
              <div className="projects-grid">
                {projects
                  .filter((p) => p.year === year)
                  .map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      num={String(++counter).padStart(2, '0')}
                    />
                  ))}
              </div>
            </div>
          ))
        })()}

        <div className="reveal" style={{ borderTop: '1px solid rgba(200,140,40,0.1)', paddingTop: '60px', textAlign: 'center' }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', letterSpacing: '0.4em', color: 'rgba(200,140,40,0.45)', textTransform: 'uppercase', marginBottom: '16px' }}>
            More on the way
          </div>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '17px', fontWeight: 300, fontStyle: 'italic', color: 'rgba(220,190,140,0.55)', lineHeight: 1.8, maxWidth: '500px', margin: '0 auto 40px' }}>
            Additional projects will be added here as the portfolio grows!
          </p>
          <Link to="/" className="btn-link">Back to Home →</Link>
        </div>
      </div>
    </div>
  )
}
