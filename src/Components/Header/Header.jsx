import React from 'react';
import CTA from './CTA';
import "./Header.css"
import me from "../../assets/me.JPG"
import HeaderSocials from './HeaderSocials';
import Ashish_Mishra_Resume from "../../assets/Ashish_Mishra_Resume.pdf";

export const resumeLink =" https://drive.google.com/file/d/1TIIo45RBDZH0vmRDmeTqCpsOcLgu5sIz/view?usp=share_link"

export const Header = () => {

  const handleResume=()=>{
    window.open(resumeLink)
  }
  return (
      <header  >
        <div id="home" className="container header_container">
          <h5>Hello I'm</h5>
          <h1  id="user-detail-name">Ashish Mishra</h1>
          <h5 className="text-light"  id="user-detail-intro">Full Stack Web Developer</h5>
         {/* <CTA/> */}
         <button  id="resume-button-2" onClick={handleResume}        >
                <a
                  id="resume-link-2"
                  href={Ashish_Mishra_Resume}
                  download="Ashish_Mishra_Resume"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </button>
         <HeaderSocials/>
        <div className="me">
          <img src={me} alt="me" />
        </div>
        <a href="#contact" className='scroll_down'>Scroll Down</a>
        </div>
      </header>
  )
}
