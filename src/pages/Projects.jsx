import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Projects.css'
import { projects } from '../assets/data/projectsData'

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-grid">
        {projects.map(project => (
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
        ))}
      </div>
    </div>
  )
}

export default Projects
