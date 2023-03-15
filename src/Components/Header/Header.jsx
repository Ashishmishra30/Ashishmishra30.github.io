import React from 'react';
import CTA from './CTA';
import "./Header.css"
import me from "../../assets/me.JPG"
import HeaderSocials from './HeaderSocials';

export const Header = () => {

  return (
      <header  >
        <div id="home" className="container header_container">
          <h5>Hello I'm</h5>
          <h1  id="user-detail-name">Ashish Mishra</h1>
          <h5 className="text-light"  id="user-detail-intro">Full Stack Web Developer</h5>
         <CTA/>
         <HeaderSocials/>
        <div className="me">
          <img src={me} alt="me" />
        </div>
        <a href="#contact" className='scroll_down'>Scroll Down</a>
        </div>
      </header>
  )
}
