import React from 'react'
import { useState } from 'react'
import '../css/CoolButton.css'

const CoolButton = ({ buttonText, point }) => {
  const [showGPA, setShowGPA] = useState(false);
  return (
    <div className="gpa-gate-wrapper">
      <button className="gpa-toggle" onClick={() => setShowGPA(!showGPA)}>
        {showGPA ? `Hide ${buttonText}` : `Show ${buttonText}`}
      </button>

      <div className={`gpa-value ${showGPA ? 'show' : ''}`}>
        <strong>{point}</strong>
      </div>
    </div>
  )
}

export default CoolButton
