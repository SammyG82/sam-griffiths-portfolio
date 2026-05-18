export interface Project {
  id: number
  title: string
  stack: string
  desc: string
  github: string
  website: string
  featured: boolean
  year: number
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Restaurant Industry Analytics',
    stack: 'Python · Pandas · NumPy · Matplotlib · HTML',
    desc: 'An end-to-end ETL pipeline ingesting and merging 4 restaurant datasets (400+ records) to uncover growth patterns, city food scenes, and the relationship between price and prestige.',
    github: 'https://github.com/SammyG82/restaurant-analytics',
    website: 'https://sammyg82.github.io/restaurant-analytics/',
    featured: true,
    year: 2026,
  },
  {
    id: 2,
    title: 'SEN Conference Website',
    stack: 'Stripe · Next.js · TypeScript · Tailwind CSS · Vercel',
    desc: 'Production conference website for the Student Entrepreneurs Network Blueprint Summit 2026 — featuring a live countdown timer, speaker sections, and Stripe-powered ticketing.',
    github: 'https://github.com/ucsdds3/sen-conference',
    website: 'https://sen-conference.vercel.app/',
    featured: true,
    year: 2026,
  },
  {
    id: 3,
    title: 'PantryPal',
    stack: 'React · TypeScript · FastAPI · PyTorch · Vercel',
    desc: "ML recipe recommendation app powered by a fine-tuned CLIP model (94% accuracy) — upload a photo or type your ingredients and get recipes ranked by match quality and health score. 🏆 1st Place at DS3's Fall Projects Cohort.",
    github: 'https://github.com/SammyG82/PantryPal',
    website: 'https://pantry-pal-kohl.vercel.app/',
    featured: true,
    year: 2025,
  },
  {
    id: 4,
    title: 'DS3 Club Website',
    stack: 'React · TypeScript · Framer Motion · Tailwind CSS · Vite',
    desc: 'Official website for the Data Science Student Society (DS3) at UC San Diego — serving 1000+ members. Features club info, officer profiles, event listings, and project showcases.',
    github: 'https://github.com/ucsdds3/main-site',
    website: 'https://www.ds3atucsd.com/',
    featured: false,
    year: 2026,
  },
  {
    id: 5,
    title: 'Personal Portfolio',
    stack: 'React · TypeScript · React Router · Vite · CSS',
    desc: "You're looking at it! Built from scratch with a custom dark theme, hand-crafted animations, and multi-page routing. A living project I'm genuinely proud of — and one that'll keep growing as I do.",
    github: 'https://github.com/SammyG82/sam-griffiths-portfolio',
    website: 'https://sammyg82.github.io/sam-griffiths-portfolio/',
    featured: false,
    year: 2026,
  },
]
