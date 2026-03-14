import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionHeader from '../components/SectionHeader'
import ProjectCard from '../components/ProjectCard'
import ContactSection from '../components/ContactSection'
import ExperienceCarousel from '../components/ExperienceCarousel'
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
        <div className="main-name">
          <span className="name-first">Sam</span>
          <span className="name-last">Griffiths</span>
          <span className="jp-sub">グリフィス · サム</span>
        </div>
        <div className="divider">
          <div className="div-line"></div>
          <div className="div-kanji">創 · 構 · 式</div>
          <div className="div-line r"></div>
        </div>
        <div className="tagline">Full Stack Developer &nbsp;·&nbsp; Data Scientist &nbsp;·&nbsp; UC San Diego</div>
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
          <SectionHeader num="01" title="Experiences" jpSubtitle="経験" />
          <div className="reveal" style={{ paddingBottom: '48px' }}>
            <ExperienceCarousel />
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="section">
          <SectionHeader num="02" title="Projects" jpSubtitle="プロジェクト" />
          <div className="projects-grid">
            {projects.filter((p) => p.featured).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="section">
          <SectionHeader num="03" title="About" jpSubtitle="自己紹介" />
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
                Outside of academics, I love keeping up with sports — mainly{' '}
                <span>football and basketball</span> — and I'm always down for a good movie, TV show, or anime.
              </p>
            </div>
            <div className="about-details reveal">
              <div className="detail-block">
                <div className="detail-label">Education</div>
                <div className="detail-value">
                  B.S. Probability &amp; Statistics
                  <br />
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
                  Full Stack Engineer
                  <br />
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
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <ContactSection sectionNum="04" />
      </section>
    </>
  )
}
