import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionHeader from '../components/ui/SectionHeader'
import ProjectCard from '../components/ui/ProjectCard'
import ContactSection from '../components/ui/ContactSection'
import ExperienceCarousel from '../components/ui/ExperienceCarousel'
import AboutContent from '../components/ui/AboutContent'
import { projects } from '../data/projects'

export default function HomePage() {
  useScrollReveal()

  return (
    <>
      {/* HERO */}
      <section id="hero">
        <div className="ornament-top">
          <div className="orn-line"></div>
          <div className="orn-diamond"></div>
          <div className="orn-text">Portfolio</div>
          <div className="orn-diamond"></div>
          <div className="orn-line r"></div>
        </div>
        <h1 className="main-name">
          <span className="name-first">Sam</span>
          <span className="name-last">Griffiths</span>
          <span className="jp-sub">グリフィス · サム</span>
        </h1>
        <div className="divider">
          <div className="div-line"></div>
          <div className="div-kanji">創 · 構 · 式</div>
          <div className="div-line r"></div>
        </div>
        <div className="tagline">Full-Stack Engineer &nbsp;·&nbsp; Data Scientist &nbsp;·&nbsp; UC San Diego</div>
        <div className="breathing-style">
          <div className="bs-line"></div>
          <div className="bs-dot"></div>
          <div className="bs-text">San Diego, CA</div>
          <div className="bs-dot"></div>
          <div className="bs-line"></div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section id="experiences">
        <div className="section">
          <SectionHeader num="01" title="Experience" jpSubtitle="経験" minimal />
          <div className="reveal" style={{ paddingBottom: '48px' }}>
            <ExperienceCarousel />
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="section">
          <SectionHeader num="02" title="Projects" jpSubtitle="プロジェクト" minimal />
          <div className="projects-grid">
            {projects.filter((p) => p.featured).map((project, i) => (
              <ProjectCard key={project.id} project={project} num={String(i + 1).padStart(2, '0')} />
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="section">
          <SectionHeader num="03" title="About" jpSubtitle="自己紹介" minimal />
          <AboutContent />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <ContactSection sectionNum="04" minimal />
      </section>
    </>
  )
}
