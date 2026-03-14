import { useState } from 'react'
import { experiences } from '../data/experience'

export default function ExperienceCarousel() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState<'left' | 'right' | null>(null)
  const [animating, setAnimating] = useState(false)

  function navigate(dir: 'left' | 'right') {
    if (animating) return
    setDirection(dir)
    setAnimating(true)
    setTimeout(() => {
      setIndex((prev) =>
        dir === 'right'
          ? (prev + 1) % experiences.length
          : (prev - 1 + experiences.length) % experiences.length
      )
      setAnimating(false)
      setDirection(null)
    }, 250)
  }

  const exp = experiences[index]

  return (
    <div className="carousel">
      <button
        className="carousel-arrow carousel-arrow--left"
        onClick={() => navigate('left')}
        aria-label="Previous"
      >
        ←
      </button>

      <div className={`carousel-card${animating ? ` carousel-card--exit-${direction}` : ''}`}>
        <div className="carousel-counter">
          {String(index + 1).padStart(2, '0')} / {String(experiences.length).padStart(2, '0')}
        </div>
        <div className="carousel-title">{exp.title}</div>
        <div className="carousel-company">{exp.company}</div>
        <div className="carousel-period">{exp.period}</div>
        <ul className="carousel-bullets">
          {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      </div>

      <button
        className="carousel-arrow carousel-arrow--right"
        onClick={() => navigate('right')}
        aria-label="Next"
      >
        →
      </button>

      <div className="carousel-dots">
        {experiences.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot${i === index ? ' carousel-dot--active' : ''}`}
            onClick={() => { setIndex(i); setDirection(null) }}
            aria-label={`Go to experience ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
