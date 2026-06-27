import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../assets/data/projectsData';
import '../css/Project.css';
import useEmblaCarousel from 'embla-carousel-react';

// --- LIGHTBOX IMPORTS ---
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/counter.css";

// --- SUB-COMPONENT: Isolates the Carousel & Lightbox Logic ---
const ProjectCarousel = ({ galleryData, projectId }) => {
  // 1. Embla State (Reads memory SYNCHRONOUSLY on mount)
  const [initialIndex] = useState(() => {
    return parseInt(sessionStorage.getItem(`carousel-${projectId}`)) || 0;
  });
  
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);
  
  // 2. Lightbox State
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  // 3. Embla Initialization
  const [mainViewportRef, emblaMainApi] = useEmblaCarousel({ 
    loop: false, 
    startIndex: initialIndex 
  });
  
  const [thumbViewportRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
    startIndex: initialIndex
  });

  // Navigation Handlers
  const scrollPrev = useCallback(() => {
    if (emblaMainApi) emblaMainApi.scrollPrev();
  }, [emblaMainApi]);

  const scrollNext = useCallback(() => {
    if (emblaMainApi) emblaMainApi.scrollNext();
  }, [emblaMainApi]);

  // Keyboard Navigation for Embla
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Prevent Embla from stealing arrow keys when Lightbox is open
      if (lightboxIndex >= 0) return; 
      
      if (e.key === 'ArrowLeft') scrollPrev();
      if (e.key === 'ArrowRight') scrollNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [scrollPrev, scrollNext, lightboxIndex]);

  const onThumbClick = useCallback((index) => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    emblaMainApi.scrollTo(index);
  }, [emblaMainApi, emblaThumbsApi]);

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    
    const current = emblaMainApi.selectedScrollSnap();
    setSelectedIndex(current);
    emblaThumbsApi.scrollTo(current);
    
    // Save progress instantly on swipe/click
    sessionStorage.setItem(`carousel-${projectId}`, current.toString());
  }, [emblaMainApi, emblaThumbsApi, projectId]);

  // The Embla Listener
  useEffect(() => {
    if (!emblaMainApi) return;
    
    emblaMainApi.on('select', onSelect);
    
    return () => {
      emblaMainApi.off('select', onSelect);
    };
  }, [emblaMainApi, onSelect]);

  return (
    <div className="presentation-gallery">
      <h3>Project Gallery</h3>

      {/* --- 1. MAIN CAROUSEL --- */}
      <div className="embla-main">
        <div className="embla__viewport" ref={mainViewportRef}>
          <div className="embla__container">
            {galleryData.map((screenshot, idx) => (
              <div className="embla__slide" key={idx}>
                <div className="embla__slide__inner">
                  <img 
                    src={screenshot.imagePath} 
                    alt={screenshot.caption} 
                    onClick={() => setLightboxIndex(idx)}
                    style={{ cursor: 'zoom-in' }}
                  />
                </div>
                <div className="embla__caption">{screenshot.caption}</div>
              </div>
            ))}
          </div>
        </div>

        <button className="embla__button embla__button--prev" onClick={scrollPrev}>
          &#8592;
        </button>
        <button className="embla__button embla__button--next" onClick={scrollNext}>
          &#8594;
        </button>
      </div>

      {/* --- 2. THUMBNAIL TRACK --- */}
      <div className="embla-thumbs">
        <div className="embla-thumbs__viewport" ref={thumbViewportRef}>
          <div className="embla-thumbs__container">
            {galleryData.map((screenshot, idx) => (
              <div
                key={idx}
                className={`embla-thumbs__slide ${idx === selectedIndex ? 'is-selected' : ''}`}
              >
                <button
                  onClick={() => onThumbClick(idx)}
                  className="embla-thumbs__slide__button"
                  type="button"
                >
                  <img src={screenshot.imagePath} alt={`Thumbnail ${idx + 1}`} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- 3. THE FULL-SCREEN LIGHTBOX --- */}
      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={galleryData.map((item) => ({
          src: item.imagePath,
          description: item.caption,
        }))}
        // ADD ZOOM HERE
        plugins={[Captions, Counter, Zoom]} 
        
        controller={{ 
          closeOnPullDown: true, 
          closeOnPullUp: true 
        }}
      />
    </div>
  );
};


// --- MAIN PAGE COMPONENT ---
const Project = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const projectIndex = projects.findIndex(project => project.id === id);
  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];

  if (!project) return <h1>Project not found</h1>;

  return (
    <div className="project-detail-container">
      <div className="project-header">
        <button className="navigation-button" onClick={() => navigate('/projects')}>
          ← Projects
        </button>
        <h1 className="project-title">{project.title}</h1>
      </div>

      <img src={project.image} alt={project.title} className="project-detail-image" />
      
      <p><strong>Type:</strong> {project.type}</p>
      <p><strong>Tech Stack:</strong> {project.tech.join(", ")}</p>

      {project.details && <p className="project-detail-text"><strong>Description: </strong>{project.details}</p>}
      {project.notes && <p><strong>Notes: </strong>{project.notes}</p>}

      {project.live && (
        <p><a href={project.live} target="_blank" rel="noreferrer">Live Demo</a></p>
      )}

      {project.github && (
        <p><a href={project.github} target="_blank" rel="noreferrer">View on GitHub</a></p>
      )}

      {project.report && (
        <p><a href={project.report} target="_blank" rel="noreferrer">Report</a></p>
      )}

      {/* Renders the isolated Carousel/Lightbox component */}
      {project.galleryData && project.galleryData.length !== 0 && (
        <ProjectCarousel 
          key={project.id} 
          galleryData={project.galleryData} 
          projectId={project.id} 
        />
      )}

      {/* --- NAVIGATION BUTTONS --- */}
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
  );
};

export default Project;