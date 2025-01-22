import React from 'react'
import "./Projectdisplay.css"
import Project from '../project/Project'

const Projectdisplay = () => {
    const projectitem=[
        {
          id:1,
          name:"Quiz",
          imgurl:"/Quiz.jpg",
          url:" https://shreyas86.github.io/quiz/",
          discription:"Quiz is a fun website with basic general knowledge questions across various topics. built with simple HTML ,CSS and Java Script."
        },
        {
          id:2,
          name:"Weathercast",
          imgurl:"/weather.jpg",
          url:"https://shreyas86.github.io/weather-app/",
          discription:"WeatherCast offers accurate,real-time weather updates for any location.Stay informed with detailed information on temperature,windspeed, and more."
        },
        {
          id:3,
          name:"Tomato",
          imgurl:"/Tomato.jpg",
          url:"https://tomato-sable.vercel.app/",
          discription:"Tomato is a user-friendly food ordering website built with React, offering seamless navigation and quick access to your favorite meals. "
        },
        {
          id:4,
          name:"Spotify",
          imgurl:"/spotify.jpg",
          url:"https://shreyas86.github.io/spotify/",
          discription:"A simple Spotify clone built with JavaScript that mimics the basic layout and functionality of the popular music streaming platform. "
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
