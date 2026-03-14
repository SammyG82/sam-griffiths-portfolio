import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
  num?: string
}

export default function ProjectCard({ project, num }: ProjectCardProps) {
  return (
    <div className="project-card reveal">
      <div className="card-num">Project {num ?? project.num}</div>
      <div className="card-title">{project.title}</div>
      <div className="card-stack">{project.stack}</div>
      <div className="card-desc">{project.desc}</div>
      <div className="card-footer">
        <a href={project.github} target="_blank" rel="noreferrer" className="card-link">
          GitHub →
        </a>
        <a href={project.website} target="_blank" rel="noreferrer" className="card-link">
          Website →
        </a>
      </div>
    </div>
  )
}
