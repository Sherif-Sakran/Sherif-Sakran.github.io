import React from 'react'
import { useParams } from 'react-router-dom'

const Project = () => {
  const { id } = useParams()
  return (
    <div>
        <h1>Project</h1>
        <h1> { id } </h1>
    </div>
  )
}

export default Project
