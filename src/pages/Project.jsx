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
  const projectIndex = projects.findIndex(project => project.id === id);
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];

  
  if (!project) {
    return <h1>Project not found</h1>
  }

  const closeModal = () => {setSelectedImage(null); setSelectedCaption('');}
  const openModal = (screenshot) => {
    setSelectedImage(screenshot.imagePath);
    setSelectedCaption(screenshot.caption);
    console.log(screenshot.imagePath, screenshot.caption);
  }

  return (
<div className="project-detail-container">
      <div className="project-header">
        <button className="navigation-button" onClick={() => navigate('/projects')}>
          ← Projects
        </button>
        <h1 className="project-title">{project.title}</h1>
      </div>
      <img src={ project.image } alt={project.title} className="project-detail-image" />
      <p><strong>Type:</strong> {project.type}</p>
      <p><strong>Tech Stack:</strong> {project.tech.join(", ")}</p>
      {/* <p className="project-detail-text">{project.details}</p> */}
      { project.details  && <><p className="project-detail-text"><strong>Description: </strong>{project.details}</p></> }
      { project.notes  && <><p ><strong>Notes: </strong>{project.notes}</p></> }

      {project.live && (
          <p>
          <a href={project.live} target="_blank" rel="noreferrer">Live Demo</a>
        </p>
      )}
      
            {project.github && (
              <p>
                <a href={project.github} target="_blank" rel="noreferrer">View on GitHub</a>
              </p>
            )}

      {project.report && (
        <p>
          <a href={project.report} target="_blank" rel="noreferrer">Report</a>
        </p>
      )}

      { project.galleryData.length !== 0 && ( <>
      <div className="project-screenshots">
      <h3>Gallery</h3> 
      <div className="screenshot-gallery">
        {project.galleryData.map((screenshot, index) => (
          <figure key={index} onClick={() => openModal(screenshot)}>
            <img src={screenshot.imagePath} alt={screenshot.caption}/>
            <figcaption>{screenshot.caption}</figcaption>
          </figure>))}
      </div>
      </div>
      </>)
        }
      {selectedImage && (
  <div className="modal-overlay">
    <div className="modal-content">
      <button className="modal-close" onClick={closeModal}>×</button>
      <img src={selectedImage} alt={selectedImage.caption} />
      <figcaption className="modal-caption">{ selectedCaption }</figcaption>
    </div>
  </div>
)}


    <div className="navigation-buttons">
      {prevProject && (
        <button
          className="navigation-button"
          onClick={() => navigate(`/projects/${prevProject.id}`)}
        >
          ← Previous
        </button>
      )}

      {nextProject && (
        <button
          className="navigation-button"
          onClick={() => navigate(`/projects/${nextProject.id}`)}
        >
          Next →
        </button>
      )}
    </div>
    </div>
  )
}

export default Project
