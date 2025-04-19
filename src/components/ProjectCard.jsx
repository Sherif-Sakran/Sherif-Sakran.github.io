import React from 'react'
import { Link } from 'react-router-dom'
import '../css/ProjectCard.css'

const ProjectCard = ( { project } ) => {
  return (
            <Link to={`/projects/${project.id}`} key={project.id} className="project-card">
            <div className="image-container">
              <img src="../../public/screenshots/Screenshot.png" alt={project.title} className="project-image" />
              <div className="project-type-overlay">{project.type}</div>
            </div>
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tech.map((tech, index) => (
                <span key={index} className="project-tag">{tech}</span>
              ))}
            </div>
          </Link>
  )
}

export default ProjectCard
