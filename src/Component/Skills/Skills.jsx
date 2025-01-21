import React from 'react'
import "./Skills.css"

const Skills = () => {
  return (
    <div className='skills' id="skills">
        <div className="skill-head">
        <h1>MY SKILLS</h1>
        </div>
        <p><i className="fa-brands fa-html5"></i>HTML</p>
        <progress value="70" max="100"></progress>
        <p><i className="fa-brands fa-css3-alt"></i>CSS</p>
        <progress value="70" max="100"></progress>
        <p> <i className="fa-brands fa-css3-alt"></i>Tailwind CSS</p>
        <progress value="70" max="100"></progress>
        <p><i className="fa-brands fa-js"></i>Javascript</p>
        <progress value="70" max="100"></progress>
        <p><i className="fa-brands fa-react"></i>React js</p>
        <progress value="70" max="100"></progress>
      
    </div>
  )
}

export default Skills
