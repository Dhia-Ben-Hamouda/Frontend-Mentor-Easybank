import React from "react";
import logo from "../images/logo.svg"

const Navbar = ()=>{

  function handleClick()
  {
    document.querySelector(".bars").classList.toggle("clicked");
    document.querySelector(".mobile-list").classList.toggle("opened");
  }

  return(
    <>
      <nav>
        <img src={logo} alt="" />
        <ul className="desktop-list">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
        </ul>
        <button>Request invite</button>
        <ul className="mobile-list opened">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
        </ul>
        <div className="bars" onClick={handleClick}>
          <div className="bar"></div>
          <div className="bar mid"></div>
          <div className="bar"></div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;