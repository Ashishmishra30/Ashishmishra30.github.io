import React from "react";
import "./Header.css";
import me from "../../assets/me.JPG";
import HeaderSocials from "./HeaderSocials";
import Ashish_Mishra_Resume from "../../assets/Ashish_Mishra_Resume.pdf";

export const Header = () => {
  return (
    <header>
      <div id="home" className="container header_container">
        <h5>Hello I'm</h5>
        <h1 id="user-detail-name">Ashish Mishra</h1>
        <h5 className="text-light" id="user-detail-intro">
          Full Stack Web Developer
        </h5>
        {/* <CTA/> */}
        <div className="cta">
          <a
            id="resume-link-2"
            href={Ashish_Mishra_Resume}
            download="Ashish_Mishra_Resume.pdf"
            className="btn btn-primary"
          >
            Resume
          </a>
          {/* <a href="#contact"  className="btn btn-primary">
            Let's Talk
          </a> */}
        </div>

        <HeaderSocials />
        <div className="me">
          <img src={me} alt="me" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};
