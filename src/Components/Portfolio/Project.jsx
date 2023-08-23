import React from 'react'
import "./project.css"
const Project = (props) => {
  return (
    <><div className='project_box'>
        <div className='preview_image_container'>
          <img className='preview_image' src={props.project["picture"]}></img>
        </div>
        <div className='details'>
        <h1>{props.project["name"]}</h1>
        <p>{props.project["description"]}</p>
        </div>
        
    </div></>
    
  )
}

export default Project