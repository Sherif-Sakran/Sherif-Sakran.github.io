import React from 'react'
import '../css/Resume.css'

const SectionBlock = ( position ) => {
  const { title, date, points } = position
  return (
    <ul className="resume-list">
    <li>
        <strong>{ title.bold }</strong><br />
        { title.regular } ({ date.start } – { date.end })<br />
        <ul className="resume-sublist">
        {points.map((point, index) => (
            <li key={index}>{point}</li>
        ))}
        </ul>
    </li>
    </ul>
  )
}

export default SectionBlock
