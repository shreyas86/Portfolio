import React from 'react'
import "./About.css"
const About = () => {
  
  return (
    <div className='about' id='about'>
      <h2>Shreyas Hegde</h2>
      <ul>
      <li><span>From: </span>Karnataka, India</li>
      <li><span>Education: </span>Computer science Engineering in diploma</li>
      <li><span>Studying At: </span> S N M Polytechnic</li>
      <li><span>Age: </span>20</li>
      <li><span>Gender: </span> Male</li>
      </ul>
      <div className="buttons">
      <a href="https://github.com/shreyas86" >
        <button className="btn">Visit My Github</button></a>
        <a href='/shreyashgdresume.pdf' download="shreyashgdresume.pdf">
        <button  className="btn">Download Resume</button></a>
      </div>
      <hr/>
    </div>
  )
}
export default About
