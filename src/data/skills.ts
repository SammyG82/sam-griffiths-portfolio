export interface SkillGroup {
  group: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    group: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    group: 'Frameworks & Libraries',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Streamlit', 'PyTorch', 'TensorFlow', 'Pandas', 'NumPy'],
  },
  {
    group: 'Developer Tools',
    items: ['Git', 'GitHub', 'Vite', 'Bun', 'Stripe', 'Figma', 'VS Code', 'Jupyter', 'LaTeX', 'Excel'],
  },
]
