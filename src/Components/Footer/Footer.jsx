import React from "react";
import "./Footer.css";
import {FiInstagram} from "react-icons/fi"
import {BsLinkedin} from "react-icons/bs"
// import {IoLogoTwitter} from "react-icons/io"

export const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Ashish Mishra
      </a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.instagram.com/a.s.h.i.s.h__m.i.s.h.r.a/"><FiInstagram/></a>
        <a href="https://www.linkedin.com/in/ashish-mishra-706165137/"><BsLinkedin/></a>
        {/* <a href=""><IoLogoTwitter/></a> */}
      </div>
    </footer>
  );
};
