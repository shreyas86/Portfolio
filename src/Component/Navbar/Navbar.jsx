import React, { useRef, useState } from 'react'
import "./Navbar.css";
const Navbar = () => {
  const[menu,sertmenu]=useState("home")

 const buttonref=useRef()

 const bchange=()=>{
  let element = document.getElementById("burger");

  if (element.classList.contains("fa-bars")) {
    element.classList.add("fa-x");
    element.classList.remove("fa-bars");
  } else {
    element.classList.add("fa-bars");
    element.classList.remove("fa-x");
  }
};


 const handleClick = () => {
   buttonref.current.classList.toggle('opened');
};
const btn=()=>{
  handleClick()
  bchange()
}


  return (
    <div className='navbar' id='navbar'>
        <div className="logo">
            Portfolio
      </div>
        <div className="menu">
          {/* <div  className="close"><i className="fa-solid fa-x"></i></div> */}
               <a href="#home"><li onClick={()=>sertmenu("home")} className={menu==="home"?"active":""}>Home</li></a>
                <a href="#about"><li onClick={()=>sertmenu("about")} className={menu==="about"?"active":""}>About</li></a>
                <a href="#skills"><li onClick={()=>sertmenu("skills")} className={menu==="skills"?"active":""}>Skills</li></a>
                <a href="#project"><li onClick={()=>sertmenu("project")}className={menu==="project"?"active":""}>Project</li></a>
                <a href="#contact"><li onClick={()=>sertmenu("contact")}className={menu==="contact"?"active":""}>Contact</li></a>
        </div>
        <div onClick={btn} className="open"><i  id='burger' className={"fa-solid fa-bars"}></i></div>
        <div ref={buttonref} className="drop-down ">
        <a href="#home"><li onClick={()=>sertmenu("home")} className={menu==="home"?"active":""}>Home</li></a>
                <a href="#about"><li onClick={()=>sertmenu("about")} className={menu==="about"?"active":""}>About</li></a>
                <a href="#skills"><li onClick={()=>sertmenu("skills")} className={menu==="skills"?"active":""}>Skills</li></a>
                <a href="#project"><li onClick={()=>sertmenu("project")}className={menu==="project"?"active":""}>Project</li></a>
                <a href="#contact"><li onClick={()=>sertmenu("contact")}className={menu==="contact"?"active":""}>Contact</li></a>

        </div>
        
    </div>
  )
}

export default Navbar
