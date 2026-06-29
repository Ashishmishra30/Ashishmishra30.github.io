import React from "react";
import "./About.css";
import me from "../../assets/me.JPG";
import { FaAward } from "react-icons/fa";
import { VscNewFolder } from "react-icons/vsc";

export const About = () => {
  return (
    <div id="about" className="about section">
      <section id="about1">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div  className="container about_container">
          <div  className="about_me">
            <div  className="about_me-image">
              <img className="home-img" src={me} alt="about image" />
            </div>
          </div>

          <div  className="about_content">
            <div  className="about_cards">
              <article  className="about_card">
                <FaAward  className="about_icon" />
                <h5>Experience</h5>
                <small>4+ years</small>
              </article>

              <article  className="about_card">
                <VscNewFolder  className="about_icon" />
                <h5>Projects</h5>
                <small>15+</small>
              </article>
            </div>
            <div id="user-detail-intro">
              <p>
                Results-driven Software Engineer (Frontend-Focused) with 4 years
                of experience developing and maintaining scalable,
                high-performance web applications using React.js, Next.js, and
                TypeScript. Skilled in building responsive UI components,
                integrating APIs, and improving product performance and
                usability. Adept at working in Agile environments and
                collaborating with cross-functional teams to deliver seamless
                user experiences and robust digital products. Passionate about
                modern web technologies, clean code, and scalable design
                systems.
              </p>
            </div>
            <a href="#contact"  className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
