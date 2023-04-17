import React from "react";
import "./Projects.css";
import rento from "../../assets/rento.PNG";
import ChaloGhume from "../../assets/ChaloGhume.PNG";
import Automads from "../../assets/Automads.PNG";
import Time from "../../assets/time-management.PNG";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import react from "../../assets/react.png";

export const Projects = () => {
  return (
    <div>
      <section id="projects">
        <h5>My Projects</h5>
        <h2>Projects</h2>
        <div className="container portfolio__container">
          <div class="project-card">
            <article className="portfolio__item">
              <div className="portfolio_item-image">
                <img src={rento} alt="" />
              </div>
              <h2 class="project-title">Bright Furniture</h2>
              <h3 class="project-description">
                This website is clone of RentoMojo. Which provides furnitures on
                rent
              </h3>
              <h4>Tech Stack :</h4>
              <div class="project-tech-stack">
                <div>
                  <img src={html} alt="html" />
                </div>
                <div>
                  <img src={css} alt="css" />
                </div>
                <div>
                  <img src={javascript} alt="js" />
                </div>
              </div>
              <div className="portfolio__item-cta">
                <a
                  className="project-github-link"
                  href="https://github.com/Ashishmishra30/joyful-pet-260"
                  target="_blank"
                >
                  Github
                </a>
                <a
                  class="project-deployed-link"
                  href="https://rococo-cuchufli-ac3e40.netlify.app/"
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          </div>

          <div class="project-card">
            <article className="portfolio__item">
              <div className="portfolio_item-image">
                <img src={ChaloGhume} alt="" />
              </div>
              <h2 class="project-title">Chalo Ghume</h2>
              <h3 class="project-description">
                This website is clone of Expedia. Which helps in travelling.
              </h3>
              <h4>Tech Stack :</h4>
              <div class="project-tech-stack">
                <div>
                  <img src={html} alt="html" />
                </div>
                <div>
                  <img src={css} alt="css" />
                </div>
                <div>
                  <img src={javascript} alt="js" />
                </div>
                <div>
                  <img src={react} alt="react" />
                </div>
              </div>
              <div className="portfolio__item-cta">
                <a
                  className="project-github-link"
                  href="https://github.com/kumkumdutta/interesting-stretch-8935"
                  target="_blank"
                >
                  Github
                </a>
                <a
                  class="project-deployed-link"
                  href="https://interesting-stretch-8935.vercel.app/"
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          </div>

          <div class="project-card">
            <article className="portfolio__item">
              <div className="portfolio_item-image">
                <img src={Automads} alt="" />
              </div>
              <h2 class="project-title">Auto Mads</h2>
              <h3 class="project-description">
                This website is clone of Advance Auto parts. From there user can
                purchase auto parts and accessories.
              </h3>
              <h4>Tech Stack :</h4>
              <div class="project-tech-stack">
                <div>
                  <img src={html} alt="html" />
                </div>
                <div>
                  <img src={css} alt="css" />
                </div>
                <div>
                  <img src={javascript} alt="js" />
                </div>
                <div>
                  <img src={react} alt="react" />
                </div>
              </div>
              <div className="portfolio__item-cta">
                <a
                  className="project-github-link"
                  href="https://github.com/Ashishmishra30/snotty-wash-4238-/tree/main/advance-auto-parts"
            
                  target="_blank"
                >
                  Github
                </a>
                <a
                  class="project-deployed-link"
                  href="https://visionary-dango-75f9a0.netlify.app/"
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          </div>

          <div class="project-card">
            <article className="portfolio__item">
              <div className="portfolio_item-image">
                <img src={Time} alt="" />
              </div>
              <h2 class="project-title">Time Rocket</h2>
              <h3 class="project-description">
                This website is clone of DeskTime. Which helps to manage your
                time accordingly your work
              </h3>
              <h4>Tech Stack :</h4>
              <div class="project-tech-stack">
                <div>
                  <img src={html} alt="html" />
                </div>
                <div>
                  <img src={css} alt="css" />
                </div>
                <div>
                  <img src={javascript} alt="js" />
                </div>
              </div>
              <div className="portfolio__item-cta">
                <a
                  className="project-github-link"
                  href="https://github.com/nitishmandal01/pointless-books-8646"
                  target="_blank"
                >
                  Github
                </a>
                <a
                  class="project-deployed-link"
                  href="https://time-rocket.netlify.app/index.html"
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};
