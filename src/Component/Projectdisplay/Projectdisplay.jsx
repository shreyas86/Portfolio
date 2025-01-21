import React from 'react'
import "./Projectdisplay.css"
import Project from '../project/Project'
const Projectdisplay = () => {
    const projectitem=[
        {
          id:1,
          name:"Quiz",
          imgurl:"src/assets/Quiz.jpg",
          url:" https://shreyas86.github.io/quiz/",
          discription:"Quiz is a fun website with basic general knowledge questions across various topics. built with simple HTML ,CSS and Java Script."
        },
        {
          id:2,
          name:"Weathercast",
          imgurl:"src/assets/weather.jpg",
          url:"https://shreyas86.github.io/weather-app/",
          discription:"WeatherCast offers accurate,real-time weather updates for any location.Stay informed with detailed information on temperature,windspeed, and more."
        },
        {
          id:2,
          name:"Tomato",
          imgurl:"src/assets/tomato.jpg",
          url:"https://shreyas86.github.io/weather-app/",
          discription:"Tomato is a user-friendly food ordering website built with React, offering seamless navigation and quick access to your favorite meals. "
        }
      ]
  return (
    <div className='projectdisplay' id="projectdisplay">
        <h1>My Project</h1>
        <div className="project-list">
            {projectitem.map((item,id)=>{
                return <Project key={id} name={item.name}url={item.url} imgurl={item.imgurl}discription={item.discription}/>
            })

            }
        </div>
        <hr/>      
    </div>
  )
}

export default Projectdisplay
