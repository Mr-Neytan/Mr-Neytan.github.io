import React from 'react'
import "./project.css"
const Project = (props) => {
  return (
    <><div className='project_box'>
        <div className='preview_image_container'>
          <img className='preview_image' src={props.project["picture"]}></img>
        </div>
        <div className='details'>
        <h1 className='project_title'>{props.project["name"]}</h1>
        <p className='project_title'>{props.project["description"]}</p>
        <div className='buttons'>
        <a href={props.project["src"]} target='blank'><button><h3 className='button_text'>Source Code</h3></button></a>
        <a href={props.project["site"]} target="blank"><button className='button_text'><h3>View Live</h3></button></a>
        </div>
        </div>
        
        
    </div>
    </>
    
  )
}

export default Project