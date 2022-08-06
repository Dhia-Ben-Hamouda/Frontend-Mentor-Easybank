import React from "react";
import logo from "../images/footer_logo.png";
import fb from "../images/icon-facebook.svg";
import instagram from "../images/icon-instagram.svg";
import twitter from "../images/icon-twitter.svg";
import youtube from "../images/icon-youtube.svg";
import pinterest from "../images/icon-pinterest.svg"; 

const Footer = ()=>{
  return(
    <>
      <footer>
        <div className="container">
          <div className="logo">
            <img src={logo} alt="" />
            <div>
              <img src={fb} alt="" />
              <img src={youtube} alt="" />
              <img src={twitter} alt="" />
              <img src={pinterest} alt="" />
              <img src={instagram} alt="" />
            </div>
          </div>
          <div className="list1">
            <a href="#">About us</a>
            <a href="#">Contact</a>
            <a href="#">Blog</a>
          </div>
          <div className="list2">
          <a href="#">Careers</a>
            <a href="#">Support</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
        <div className="right">
          <button>Request invite</button>
          <h6>&copy; Easybank . All rights reserved</h6>
        </div>
      </footer>
    </>
  )
}

export default Footer;