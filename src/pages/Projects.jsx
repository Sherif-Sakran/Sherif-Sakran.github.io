import React from 'react'

const Projects = () => {
  
  const projects = [{id: 1, name: 'Project 1', description: 'Description 1'}, {id: 2, name: 'Project 2', description: 'Description 2'}, {id: 3, name: 'Project 3', description: 'Description 3'}, {id: 4, name: 'Project 4', description: 'Description 4'}, ]
  return (
    <div>
      <h1>Projects</h1>
      { projects.map(project => (
        <h2> {project.name}</h2>
      )) }
    </div>
  )
}

export default Projects
