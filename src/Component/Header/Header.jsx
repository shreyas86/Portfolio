import React from 'react'
import "./Header.css"
const Header = () => {
  return (
    <div className='header' id="header">
      <div className="head">

      <div className="header-content">
      <p>Welcome</p>  
      <h1>I'M SHREYAS HEGDE</h1>
      <button>Web Developer</button>
      </div>
      
      <div className="my-img">
        <img src="/myimg.jpg" alt="" />
      </div>
      </div>
    </div>
  )
}

export default Header
