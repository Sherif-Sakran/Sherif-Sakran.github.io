import React from 'react'
import '../css/Resume.css'
import CoolButton from './CoolButton'

const SectionBlock = ( position ) => {
  const { title, date, points } = position
  // const hideOn = "GPA";
  return (
    <ul className="resume-list">
    <li>
        <strong>{ title.bold }</strong>
        { title.regular && <><br />
        { title.regular } ({ date.start } – { date.end })<br />
        </>}
        <ul className="resume-sublist">
        {points.map((point, index) => (
          // point.includes(hideOn) ?
          // <li key={index}><CoolButton buttonText={hideOn} point={point}/></li> : 
          <li key={index}>{point}</li>
        ))}
        </ul>
    </li>
    </ul>
  )
}

export default SectionBlock
