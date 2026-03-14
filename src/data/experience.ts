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
    title: 'Software Engineer',
    company: 'Data Science Student Society (DS3)',
    period: 'Oct 2025 - Present',
    bullets: [
      'Build and maintain the DS3 club website for 750+ members using React, Tailwind CSS, and Git.',
      'Develop websites and conference pages for partner UCSD clubs, handling UI design, responsive layout, and deployment.',
      'Lead client meetings to gather requirements and deliver sites aligned with each club\'s design and goals.',
    ],
  },
  {
    id: 2,
    title: 'Intern',
    company: 'High Temp Metals, Inc.',
    period: 'Jun 2025 - Sep 2025',
    bullets: [
      'Assembled and configured custom computer systems, performing hardware diagnostics and component-level troubleshooting for client orders.',
      'Supported daily operations, including inventory management and logistics coordination under the mentorship of VP John Vulchev.',
    ],
  },
  {
    id: 3,
    title: 'Teaching Assistant',
    company: 'Arroyo Vista Elementary School',
    period: 'Aug 2024 - Jun 2025',
    bullets: [
      'Mentored 25+ students, promoting academic growth and serving as a positive role model.',
      'Led innovative, bi-monthly lessons designed to engage students and spark enthusiasm for learning.',
      'Provided one-on-one support to struggling students, helping them improve classwork understanding and offering personalized feedback on assignments.',
    ],
  },
  {
    id: 4,
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
    id: 5,
    title: 'Group Leader',
    company: 'Badminton Club',
    period: 'Sep 2022 - Jun 2025',
    bullets: [
      'Set up and cleaned up bi-weekly recreational badminton practices and matches.',
      'Led beginner groups (3-5 players), teaching fundamental techniques, footwork, and strategy.',
    ],
  },
  {
    id: 6,
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
