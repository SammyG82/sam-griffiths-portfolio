export interface Experience {
  id: number
  title: string
  company: string
  period: string
  bullets: string[]
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: 'Workshops Director (prev. Full Stack Engineer)',
    company: 'Data Science Student Society (DS3)',
    period: 'Oct 2025 - Present',
    bullets: [
      'Lead a 3-person team hosting 3 workshops per quarter on industry tools (Docker, AWS, Databricks) and domains (sports, bioinformatics, finance), averaging 40 students.',
      'Run weekly LeetCode sessions, averaging 20 students.',
      'Built and maintained the DS3 website serving 1,500+ members using React, Tailwind CSS, and Supabase.',
      'Developed websites for partner UCSD organizations including Student Entrepreneurs Network and Chiba Lab, leading client meetings and handling design and deployment.',
    ],
  },
  {
    id: 2,
    title: 'Instructional Assistant',
    company: 'Halıcıoğlu Data Science Institute, UC San Diego',
    period: 'Jun 2026 - Present',
    bullets: [
      "Support 500+ students in DSC 10, UCSD's largest Data Science lower-division course, through weekly discussion sections, office hours, and grading, teaching Python, pandas, and tabular data analysis.",
      'Maintain and update the official course website, writing course content, building labs and homework assignments, and improving site functionality.',
    ],
  },
  {
    id: 3,
    title: 'Full Stack Engineer Intern',
    company: 'Data Science Alliance (DSA)',
    period: 'Jun 2026 - Sep 2026',
    bullets: [
      'Built a route-optimization tool for non-profit Feeding San Diego to replace manual spreadsheet planning, using Google OR-Tools (capacitated VRP with time windows), FastAPI, and Next.js.',
      'Implemented an async job API and cached Google Maps calls to avoid gateway timeouts and reduce API costs.',
      'Set up a GitHub Actions CI pipeline and wrote 2,400+ tests (95% backend coverage) using pytest and Vitest.',
      'Built educational games in React/TypeScript and the Supabase backend for DSA\'s website.',
    ],
  },
  {
    id: 4,
    title: 'Research Consultant',
    company: 'UCSD Center for Energy Research (CER)',
    period: 'Apr 2026 - Jun 2026',
    bullets: [
      'Built an interactive dashboard analyzing EV adoption and oil dependency across 50+ countries, with 5 D3.js visualizations, using Next.js, TypeScript, and Tailwind CSS.',
      'Presented findings to CER faculty on how EV growth could reduce national oil imports.',
    ],
  },
  {
    id: 5,
    title: 'Intern',
    company: 'High Temp Metals, Inc.',
    period: 'Jun 2025 - Sep 2025',
    bullets: [
      'Assembled and configured custom computer systems, performing hardware diagnostics and component-level troubleshooting for client orders.',
      'Supported daily operations, including inventory management and logistics coordination under the mentorship of VP John Vulchev.',
    ],
  },
  {
    id: 6,
    title: 'Teaching Assistant',
    company: 'Arroyo Vista Elementary School',
    period: 'Aug 2024 - Jun 2025',
    bullets: [
      'Mentored 25+ students, promoting academic growth and serving as a positive role model.',
      'Led innovative, bi-monthly lessons designed to engage students and spark enthusiasm for learning.',
      'Provided one-on-one support to struggling students, offering personalized feedback to strengthen understanding.',
    ],
  },
  {
    id: 7,
    title: 'Head Tutor',
    company: 'Veritas Tutoring',
    period: 'Sep 2023 - Jun 2025',
    bullets: [
      'Tutored 8+ students daily, specializing in computer science, math, English, and history.',
      'Provided personalized feedback on assignments and projects, encouraging academic growth and developing stronger study habits.',
      'Designed engaging, student-centered teaching strategies to build confidence and conceptual understanding.',
    ],
  },
  {
    id: 8,
    title: 'Group Leader',
    company: 'Badminton Club',
    period: 'Sep 2022 - Jun 2025',
    bullets: [
      'Set up and cleaned up bi-weekly recreational badminton practices and matches.',
      'Led beginner groups (3-5 players), teaching fundamental techniques, footwork, and strategy.',
    ],
  },
  {
    id: 9,
    title: 'Thai/Laotian Ambassador',
    company: 'Cultural Foods Club',
    period: 'Sep 2022 - Jun 2025',
    bullets: [
      'Delivered short presentations on cultural cuisines, highlighting historical and traditional significance to promote cultural awareness.',
      'Organized food events by sourcing ingredients, preparing tastings, and coordinating logistics.',
      'Collaborated with other clubs to host joint events that educated peers on global traditions.',
    ],
  },
]
