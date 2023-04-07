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
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#blog">Contact</a>
          <a href="#blog">Blog</a>
          <a href="#blog">Careers</a>
        </ul>
        <button>Request invite</button>
        <ul className="mobile-list opened">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#blog">Contact</a>
          <a href="#blog">Blog</a>
          <a href="#blog">Careers</a>
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