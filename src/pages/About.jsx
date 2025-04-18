import React from 'react'
import '../css/About.css'

const About = () => {
  return (
<div className="about-container">
      <h1 className="about-title">Sherif Sakran — Software Engineer</h1>
      <p className="about-subtitle">
        <em>Software engineer by title, human-AI translator by passion.</em>
      </p>
      <p className="about-bio">
      Hi! I'm Sherif, and I am currently an MSc student in Computing Science at UofG. I build systems that help machines listen better and people speak smarter. With a focus on <strong>Natural Language Processing</strong> and <strong>Human-Computer Interaction</strong>, I explore how code can deepen understanding between humans and intelligent systems. 
      </p>

      <h2 className="section-heading">Special Interests</h2>
      <ul className="interests">
        <li>🧠 Natural Language Processing</li>
        <li>🧑‍💻 Human-Computer Interaction</li>
        {/* <li>💬 Conversational Interfaces</li> */}
      </ul>

      <h2 className="section-heading">More About Me</h2>
      <p className="fun-facts">
      My curiosity doesn’t stop at how systems work — I want to know how they feel to the people using them. Whether I'm evaluating an NLP model’s performance or analyzing user feedback, I'm always looking for ways to improve clarity, usability, and trust. 
      {/* When I need to focus, I head to the library — it’s where ideas get sharper, code gets cleaner, and distractions disappear.  */}
      </p>

      <div className="contact-section">
        <h2 className="section-heading">Get in Touch</h2>
        <p>Connect on <a href="https://www.linkedin.com/in/sherif-sakran/" target="_blank" rel="noreferrer">LinkedIn</a></p>
        <p>Contact me via <a href="mailto:sherifsakraan@gmail.com">Email</a></p>
      </div>
    </div>
  )
}

export default About
