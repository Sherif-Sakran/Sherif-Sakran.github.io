import React from 'react'
import { projects } from '../assets/data/projectsData'
import { useParams } from 'react-router-dom'
import '../css/Project.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Project = () => {
  const navigate = useNavigate()
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCaption, setSelectedCaption] = useState('');
  const { id } = useParams();
  const project = projects.find(project => project.id === id);

  if (!project) {
    return <h1>Project not found</h1>
  }

  return (
<div className="project-detail-container">
      <div className="project-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Projects
        </button>
        <h1 className="project-title">{project.title}</h1>
      </div>
      <img src={ project.image } alt={project.title} className="project-detail-image" />
      <p><strong>Type:</strong> {project.type}</p>
      <p><strong>Tech Stack:</strong> {project.tech.join(", ")}</p>
      <p className="project-detail-text">{project.details}</p>

      <div className="project-screenshots">
      
      <h3>Gallery</h3>
      <div className="screenshot-gallery">
        {project.galleryData.map((screenshot, index) => (
          <figure key={index} onClick={() => {
            setSelectedImage(screenshot.imagePath);
            setSelectedCaption(screenshot.caption);
          }}>
            <img src={screenshot.imagePath} alt={screenshot.caption} />
            <figcaption>{screenshot.caption}</figcaption>
          </figure>))}
      </div>
      </div>

      {selectedImage && (
  <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
    <span className="close-lightbox" onClick={() => setSelectedImage(null)}>Close</span>
    <img src={selectedImage} alt="Expanded" className="lightbox-img" />
    <p className="lightbox-caption">{selectedCaption}</p>
  </div>
)}

                


      {project.github && (
        <p>
          <a href={project.github} target="_blank" rel="noreferrer">View on GitHub</a>
        </p>
      )}

      {project.live && (
        <p>
          <a href={project.live} target="_blank" rel="noreferrer">Live Demo</a>
        </p>
      )}

      {project.report && (
        <p>
          <a href={project.report} target="_blank" rel="noreferrer">Report</a>
        </p>
      )}
    </div>
  )
}

export default Project
