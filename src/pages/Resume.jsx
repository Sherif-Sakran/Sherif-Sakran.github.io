import React from 'react'
import ResumeBody from '../components/ResumeBody'
import '../css/Resume.css'
import { useState } from 'react'
import '../css/CoolButton.css'

const Resume = () => {
  const [showGPA, setShowGPA] = useState(false);
  return (
    <>
      <div className="resume-container">
        <div className="resume-header">
        <h1 className="resume-title">Resume</h1> 
        <div className="text-center">
          <a href="/resume.pdf" download className="resume-download">
            Download PDF
          </a>
          </div>
        </div>
        <p className="resume-subtitle">A quick overview of my education, experience, and achievements.</p>
        
        <ResumeBody />
      </div>
    </>
  )
}

export default Resume
