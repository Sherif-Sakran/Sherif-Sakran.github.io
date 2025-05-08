import React from 'react'
import '../css/About.css'

const About = () => {
  return (
<div className="about-container">
      <h1 className="about-title">Sherif Sakran — MSc. CS Student</h1>
      <p className="about-subtitle">
        <em>Software engineer by title, human-AI translator by passion.</em>
      </p>
      <p className="about-bio">
      {/* Hi! I'm Sherif, and I am currently an MSc student in Computing Science at The University of Glasgow where I am delving into machine learning. I build systems that help machines listen better and people speak smarter. With a focus on <strong>Natural Language Processing</strong> and <strong>Human-Computer Interaction</strong>, I explore how code can deepen understanding between humans and intelligent, interactive systems.  */}
      Hi! I'm Sherif, and I am currently pursuing an MSc in Computing Science at The University of Glasgow where I am delving into machine learning, natural language processing, and human-computer interaction. I’m passionate about applying machine learning to real-world challenges, especially where it can empower people and improve how we make evidence-based decisions. 
      </p>

      <h2 className="section-heading">Special Interests</h2>
      <ul className="interests">
        <li>🧠 Natural Language Processing</li>
        <li>🧑‍💻 Human-Computer Interaction</li>
        {/* <li>💬 Conversational Interfaces</li> */}
      </ul>

      <h2 className="section-heading">More About Me</h2>
      <p className="fun-facts">
      {/* My curiosity doesn’t stop at how systems work — I want to know how they feel to the people using them. Whether I'm evaluating an NLP model’s performance or analyzing user feedback, I'm always looking for ways to improve clarity, usability, and trust.  */}
      My background blends software engineering with an interest in social impact. I enjoy working in collaborative, interdisciplinary teams and have hands-on experience using machine and deep learning tools to analyze, model, and visualize data-driven insights. Whether building models to help machines understand speech or creating dashboards for actionable communication, I’m driven by using machine learning to make a difference. 
      {/* When I need to focus, I head to the library — it’s where ideas get sharper, code gets cleaner, and distractions disappear.  */}
      </p>

      <div className="contact-section">
        <h2 className="section-heading">Get in Touch</h2>
        <p>Connect on <a href="https://www.linkedin.com/in/sherif-sakran/" target="_blank" rel="noreferrer">LinkedIn</a></p>
        {/* <p>Contact me via <a href="mailto:sherifsakraan@gmail.com">Email</a></p> */}
        <p>Contact me via <a href="mailto:3011251S@student.gla.ac.uk">Email</a></p>
      </div>
    </div>
  )
}

export default About
