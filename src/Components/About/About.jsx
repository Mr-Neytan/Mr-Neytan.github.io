import React from 'react'
import "./about.css"
const About = () => {
    const pic = "/pic_3.png"
  return (
    
    <>
    <div className="banner">

<div className='profile_pic'>
    <img src={pic}></img>
</div>
<div className="welcome_text">
<h1>More About Me</h1>
<p>
I am a Computer Engineering student at the University of the Philippines. I recently began joining hackathons and realized how fun and productive competing and collaborating with others could be. When I am neither studying nor programming, I enjoy playing video games and watching tv series.


</p>
<div className='contact_info'>
    <h3>Contact Me:</h3>
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

export default About