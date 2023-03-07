import React from 'react';
import "./Navbar.css";

export const Navbar = () => {

  const styles ={
   marginLeft :"500px",
  }
  return (
    <div style={styles}>
       <header >
        <div class="topnav" id="nav-menu">
            <nav class="navbar-container container">
                {/* <a href="#home" class="active"><span>
                        <span>
                    </span></span>Ashish Mishra<span></span></a> */}
                <ul class="nav_inner">
                    <li><a href="#home" class="nav-link home">Home</a></li>
                    <li><a href="#about" class="nav-link about">About</a></li>
                    <li><a href="#skills" class="nav-link skills">Skills</a></li>
                    <li><a href="#projects" class="nav-link projects">Projects</a></li>
                    <li><a href="#contact" class="nav-link contact">Contact</a></li>
                    <li>
                        <a href="" class="nav-link resume" id="resume-button-1"
                            download><i class="fa fa-download"></i> Resume </a>
                    </li>
                    <i class="fas fa-times" onclick="closemenu()"></i>
                </ul>
                <i class="fas fa-bars" onclick="openmenu()"></i>
            </nav>


        </div>

    </header>
    </div>
  )
}
