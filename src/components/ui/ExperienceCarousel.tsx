import { useState } from 'react'
import { experiences } from '../../data/experience'

const CAROUSEL_ANIM_MS = 250

export default function ExperienceCarousel() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState<'left' | 'right' | null>(null)
  const [animating, setAnimating] = useState(false)

  function doNavigate(dir: 'left' | 'right', getNextIndex: (prev: number) => number) {
    if (animating) return
    setDirection(dir)
    setAnimating(true)
    setTimeout(() => {
      setIndex(getNextIndex)
      setAnimating(false)
      setDirection(null)
    }, CAROUSEL_ANIM_MS)
  }

  function navigate(dir: 'left' | 'right') {
    doNavigate(dir, (prev) =>
      dir === 'right'
        ? (prev + 1) % experiences.length
        : (prev - 1 + experiences.length) % experiences.length
    )
  }

  function navigateTo(target: number) {
    if (target === index) return
    doNavigate(target > index ? 'right' : 'left', () => target)
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
            onClick={() => navigateTo(i)}
            aria-label={`Go to experience ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
