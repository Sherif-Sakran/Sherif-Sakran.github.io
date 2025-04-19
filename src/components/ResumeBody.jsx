import React from 'react'
import SectionBlock from './SectionBlock'
import { resumeSections } from '../assets/data/resumeData'
import '../css/Resume.css'

const ResumeBody = () => {
  return (
    <>
      {resumeSections.map((resumeSection) => (
        <div key={resumeSection.sectionName}>
          <h2 className="section-heading">{resumeSection.sectionName}</h2>
          {resumeSection.sectionBlocks.map((sectionBlock, index) => (
            <SectionBlock key={index} title={sectionBlock.title} date={sectionBlock.date} points={sectionBlock.points}/>
          ))}
        </div>
      ))}
    </>
  )
}

export default ResumeBody
