import React from 'react'
import "./Project.css"
const Project = ({name,discription,imgurl,url}) => {
  

  return (
    <div className='project' id="project">
      <div className="project-imgc">
        <img className="project-img"src={imgurl}/>
      </div>
      <div className="project-info">
        <p className='p-name'>{name}</p>
        <p className="discription">{discription}</p>
      </div>
      <div className="viewbtn">
        <a href={url}>
        <button className='v-btn'>View project</button>
        </a>
      </div>

      
    </div>
  )
}

export default Project
