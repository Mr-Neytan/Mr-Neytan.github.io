import React from 'react'
import "./skills.css"
const Skills = () => {
  return (
    <>
    <div className='title'>
        <h1>My Skills</h1>
        <ul className='skill_list'>
            <li><p>Wireframing</p></li>
            <li><p>Designing</p></li>
            <li><p>Prototyping</p></li>
            <li><p>Developing</p></li>
        </ul>
        <h1>My Tools</h1>
        <ul className='language_list'>
            <div className='row'>
            <li><p>Python</p></li>
            <li><p>Django</p></li>
            <li><p>HTML</p></li>
            <li><p>Vite</p></li>
            </div>
            <div className='row'>
            <li><p>CSS</p></li>
            <li><p>JavaScript</p></li>
            <li><p>React</p></li>
            <li><p>React Native</p></li>
            <li><p>Git</p></li>
            </div>
        </ul>
    </div>
    </>
  )
}

export default Skills