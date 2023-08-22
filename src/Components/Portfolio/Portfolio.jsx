import React from 'react'
import "./portfolio.css"
import project_details from './project_details'
import Project from './Project'
const Portfolio = () => {
  let details = project_details()
  return (
    <>
    <div className='container'>
       <h2 className="emphasis">PORTFOLIO</h2>
       {details.map(function(project, index) {
        return (
          <Project key={index} project={project} />
        )

       })}
    </div>
    </>
  )
}

export default Portfolio