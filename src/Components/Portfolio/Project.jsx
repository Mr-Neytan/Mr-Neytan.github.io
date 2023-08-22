import React from 'react'
import "./project.css"
const Project = (props) => {
  return (
    <><div className='project_box'>
        <h1>{props.project["name"]}</h1>
        <p>{props.project["description"]}</p>
        
    </div></>
    
  )
}

export default Project