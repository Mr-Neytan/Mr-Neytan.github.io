import React from 'react'
import "./welcome.css"

const Welcome = () => {
    const pic = "/pic_2.png"
  return (
    <>
    <div className="banner">

    <div className='profile_pic'>
        <img src={pic}></img>
    </div>
    <div className="welcome_text">
    <h1>Hello, I am <span className='emphasis'>Nathan</span>!</h1>
    <h2><span>— A </span> <span className="emphasis">Web Developer</span>.</h2>
    <p>I have a passion for designing and developing functional, efficient and attractive web apps. I am constantly searching for ways to integrate other technologies into web development such as AI. I hope to be part of the next big thing in technology.</p>
    <div className='contact_info'>
        <h3>Let's Connect:</h3>
        <ul className='contact_list'>
            <a href="https://www.facebook.com/SuperN0517" target='blank'><li className='contact_link'><img src='/fb_logo.png'></img></li></a>
            <a href="https://www.linkedin.com/in/nathaniel-mercado-35a013242/" target='blank'><li className='contact_link'><img src="/linkedin_logo.png"></img></li></a>
            <a href="mailto:nathan.mercado0517@gmail.com" target='blank'><li className='contact_link'><img src="/gmail_logo.png"></img></li></a>
            <a href="https://github.com/Mr-Neytan" target='blank'><li className='contact_link'><img src="/github_logo.png"></img></li></a>
            <a href="/Resume_Mercado_Nathaniel.pdf" target='blank'><li className='contact_link'><img src="/resume.png"></img></li></a>
        </ul>
    </div>
    
    </div>
    </div>
    </>
  )
}

export default Welcome