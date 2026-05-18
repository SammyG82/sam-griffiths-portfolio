import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionHeader from '../components/ui/SectionHeader'
import { experiences } from '../data/experience'

function TimelineCard({
  exp,
  isOpen,
  onToggle,
}: {
  exp: (typeof experiences)[number]
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <button
      className={`timeline-card${isOpen ? ' timeline-card--open' : ''}`}
      onClick={onToggle}
      aria-expanded={isOpen}
    >
      <div className="timeline-title">{exp.title}</div>
      <div className="timeline-company">{exp.company}</div>
      <div className="timeline-period">{exp.period}</div>
      <div className="timeline-dropdown">
        <ul className="timeline-bullets">
          {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
        </ul>
      </div>
      <div className="timeline-toggle">{isOpen ? '↑ collapse' : '↓ expand'}</div>
    </button>
  )
}

export default function ExperiencePage() {
  useScrollReveal()
  const [openId, setOpenId] = useState<number | null>(null)

  function toggle(id: number) {
    setOpenId(prev => prev === id ? null : id)
  }

  return (
    <div className="page-wrapper">
      <div className="section">
        <SectionHeader num="01" title="Experience" jpSubtitle="経験" minimal />
        <div className="timeline">
          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0
            const isOpen = openId === exp.id
            return (
              <div key={exp.id} className="timeline-row reveal">
                <div className="timeline-side timeline-side--left">
                  {isLeft && <TimelineCard exp={exp} isOpen={isOpen} onToggle={() => toggle(exp.id)} />}
                </div>
                <div className="timeline-center">
                  <div className="timeline-dot" />
                </div>
                <div className="timeline-side timeline-side--right">
                  {!isLeft && <TimelineCard exp={exp} isOpen={isOpen} onToggle={() => toggle(exp.id)} />}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
