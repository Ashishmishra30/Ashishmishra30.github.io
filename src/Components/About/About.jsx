import React from "react";
import "./About.css";
import me from "../../assets/me.JPG";
import { FaAward } from "react-icons/fa";
import { VscNewFolder } from "react-icons/vsc";

export const About = () => {
  return (
    <div id="about" class="about section">
      <section id="about1">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="container about_container">
          <div className="about_me">
            <div className="about_me-image">
              <img class="home-img" src={me} alt="about image" />
            </div>
            </div>

            <div className="about_content">
              <div className="about_cards">
                <article className="about_card">
                  <FaAward className="about_icon" />
                  <h5>Experience</h5>
                  <small>1200+ Hrs Coding</small>
                </article>

                <article className="about_card">
                  <VscNewFolder className="about_icon" />
                  <h5>Projects</h5>
                  <small>5+</small>
                </article>
              </div>
              <p id="user-detail-intro">
              An enthusiastic Full Stack Web Developer, a lifelong learner,
              skilled in React.js Front-End Development. Knowledge of
              JavaScript, HTML, CSS, React.js, Chakra UI and Redux. High
              adaptability to learn new technologies quickly and paying
              attention to details. Aims to leverage knowledge and build
              world-class Web Applications while facilitating organization in
              achieving function goals.
            </p>

            <a href="#contact" className="btn btn-primary">Let's Talk</a>
         
            </div>
            
        </div>
      </section>
    </div>
  );
};
