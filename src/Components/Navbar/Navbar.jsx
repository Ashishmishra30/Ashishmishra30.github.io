import React, { useState } from "react";
import "./Navbar.css";
import Ashish_Mishra_Resume from "../../assets/Ashish_Mishra_Resume.pdf";
import {
  AiFillHome,
  AiFillProject,
  AiOutlineDownload,
  AiFillContacts,
} from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { BsFillBookFill } from "react-icons/bs";
import { resumeLink } from "../Header/Header";

export const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");

  const handleResume=()=>{
    window.open(resumeLink)
  }
  return (
    <div id="nav-menu">
      <nav className="navbar">
        <a
          href="#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
          class="nav-link home"
        >
          {" "}
          <span>
            <AiFillHome />
          </span>{" "}
          Home
        </a>
        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
          class="nav-link about"
        >
          {" "}
          <span>
            <FaUserAlt />
          </span>{" "}
          About
        </a>
        <a
          href="#skills"
          onClick={() => setActiveNav("#skills")}
          className={activeNav === "#skills" ? "active" : ""}
          class="nav-link skills"
        >
          {" "}
          <span>
            <BsFillBookFill />
          </span>{" "}
          Skills
        </a>
        <a
          href="#projects"
          onClick={() => setActiveNav("#projects")}
          className={activeNav === "#projects" ? "active" : ""}
          class="nav-link projects"
        >
          {" "}
          <span>
            <AiFillProject />
          </span>{" "}
          Project
        </a>
        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
          class="nav-link contact"
        >
          {" "}
          <span>
            <AiFillContacts />
          </span>{" "}
          Contact
        </a>
        <button className='btn' id="resume-button-1" onClick={handleResume}        >
                <a
                  id="resume-link-1"
                  href={Ashish_Mishra_Resume}
                  download="Ashish_Mishra_Resume"
                  target="_blank"
                 className= "nav-link resume"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </button>
      </nav>
    </div>
  );
};
