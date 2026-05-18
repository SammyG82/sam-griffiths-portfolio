import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionHeader from '../components/ui/SectionHeader'
import ProjectCard from '../components/ui/ProjectCard'
import { projects } from '../data/projects'

export default function ProjectsPage() {
  useScrollReveal()

  const years = [...new Set(projects.map((p) => p.year))].sort((a, b) => b - a)
  const numberedProjects = [...projects]
    .sort((a, b) => b.year - a.year || a.id - b.id)
    .map((p, i) => ({ ...p, displayNum: String(i + 1).padStart(2, '0') }))

  return (
    <div className="page-wrapper">
      <div className="section">
        <SectionHeader num="01" title="Projects" jpSubtitle="プロジェクト" minimal headingLevel={1} />

        {years.map((year) => (
          <div key={year} className="projects-year-group">
            <div className="projects-year-header reveal">
              <span className="projects-year-label">{year}</span>
              <div className="projects-year-line"></div>
            </div>
            <div className="projects-grid">
              {numberedProjects
                .filter((p) => p.year === year)
                .map((project) => (
                  <ProjectCard key={project.id} project={project} num={project.displayNum} />
                ))}
            </div>
          </div>
        ))}

        <div className="projects-more reveal">
          <div className="projects-more-label">More on the way</div>
          <p className="projects-more-text">
            Additional projects will be added here as the portfolio grows!
          </p>
          <Link to="/" className="btn-link">Back to Home →</Link>
        </div>
      </div>
    </div>
  )
}
