import React from 'react'
import '../css/Projects.css'
import { projects } from '../assets/data/projectsData'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-title">Selected Projects</h1>
      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
