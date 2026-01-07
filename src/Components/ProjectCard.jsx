import React, { useState } from 'react'
const ProjectCard = ({ project }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="ProjectCard">
      <div className="ProjectHeader">
        <h3>{project.title}</h3>
        <button onClick={() => setOpen(!open)}>{open ? 'Hide Details' : 'View Details'}</button>
      </div>

      <p className="ProjectDescription">{project.description}</p>

      <div className="TechStack">
        {project.tech.map((tech, index) => (
          <span key={index} className="TechBadge">
            {tech}
          </span>
        ))}
      </div>

      {open && (
        <ul className="FeatureList">
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      )}

      {/* GitHub link */}
      <a href={project.github} target="_blank" rel="noopener noreferrer" className="GitHubButton">
        View on GitHub
      </a>
    </div>
  )
}

export default ProjectCard
