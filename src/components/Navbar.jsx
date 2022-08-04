import React from "react";
import logo from "./images/logo.svg"

const Navbar = ()=>{
  return(
    <>
      <nav>
        <img src={logo} alt="" />
        <ul>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
        </ul>
        <button>Request invite</button>
      </nav>
    </>
  )
}

export default Navbar;