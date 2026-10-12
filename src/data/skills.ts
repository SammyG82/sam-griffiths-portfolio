export interface SkillGroup {
  group: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    group: 'Languages',
    items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'Bash', 'HTML', 'CSS'],
  },
  {
    group: 'Frameworks & Libraries',
    items: ['React', 'Next.js', 'FastAPI', 'Supabase', 'PyTorch', 'Pandas', 'NumPy', 'Google OR-Tools', 'D3.js'],
  },
  {
    group: 'Developer Tools',
    items: ['Git', 'Docker', 'GitHub Actions (CI/CD)', 'pytest', 'Vitest', 'Jupyter', 'Figma', 'LaTeX'],
  },
  {
    group: 'Concepts',
    items: ['Data Structures & Algorithms', 'OOP', 'REST APIs', 'Testing', 'Optimization', 'Machine Learning'],
  },
]
