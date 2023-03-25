import React from 'react';
import "./Projects.css";
import rento from "../../assets/rento.PNG";
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
          <article class="project-card" className='portfolio__item'>
            <div className="portfolio_item-image">
              <img src={rento} alt="" />
            </div>
            <h2 class="project-title">Bright Furniture</h2>
            <h3>This website is clone of RentoMojo. Which provides furnitures on rent</h3>
            <h4 >Tech Stack :</h4>
            <div class="project-tech-stack">
                        <div><img src={html} alt="html"/></div>
                        <div><img src={css} alt="css"/></div>
                        <div><img src={javascript} alt="js"/></div>
                       
                    </div>
            <div className="portfolio__item-cta">
            <a class="project-github-link" href="https://github.com/Ashishmishra30/joyful-pet-260" className='btn' target="_blank">Github</a>
            <a class="project-deployed-link" href="https://rococo-cuchufli-ac3e40.netlify.app/" className='btn btn-primary' target="_blank">Live Demo</a>
            </div>
          </article>
          <article class="project-card" className='portfolio__item'>
            <div className="portfolio_item-image">
              <img src={rento} alt="" />
            </div>
            <h2 class="project-title">Bright Furniture</h2>
            <h3>This website is clone of RentoMojo. Which provides furnitures on rent</h3>
            <h4 >Tech Stack :</h4>
            <div class="project-tech-stack">
                        <div><img src={html} alt="html"/></div>
                        <div><img src={css} alt="css"/></div>
                        <div><img src={javascript} alt="js"/></div>
                       
                    </div>
            <div className="portfolio__item-cta">
            <a class="project-github-link" href="https://github.com/Ashishmishra30/joyful-pet-260" className='btn' target="_blank">Github</a>
            <a class="project-deployed-link" href="https://rococo-cuchufli-ac3e40.netlify.app/" className='btn btn-primary' target="_blank">Live Demo</a>
            </div>
          </article>
          <article class="project-card" className='portfolio__item'>
            <div className="portfolio_item-image">
              <img src={rento} alt="" />
            </div>
            <h2 class="project-title">Auto Mads</h2>
            <h3>This website is clone of RentoMojo. Which provides furnitures on rent</h3>
            <h4 >Tech Stack :</h4>
            <div class="project-tech-stack">
                        <div><img src={html} alt="html"/></div>
                        <div><img src={css} alt="css"/></div>
                        <div><img src={javascript} alt="js"/></div>
                        <div><img src={react} alt="react"/></div>
                       
                    </div>
            <div className="portfolio__item-cta">
            <a class="project-github-link" href="https://github.com/Ashishmishra30/joyful-pet-260" className='btn' target="_blank">Github</a>
            <a class="project-deployed-link" href="https://rococo-cuchufli-ac3e40.netlify.app/" className='btn btn-primary' target="_blank">Live Demo</a>
            </div>
          </article>
          <article class="project-card" className='portfolio__item'>
            <div className="portfolio_item-image">
              <img src={rento} alt="" />
            </div>
            <h2 class="project-title">Time Rocket</h2>
            <h3>This website is clone of RentoMojo. Which provides furnitures on rent</h3>
            <h4 >Tech Stack :</h4>
            <div class="project-tech-stack">
                        <div><img src={html} alt="html"/></div>
                        <div><img src={css} alt="css"/></div>
                        <div><img src={javascript} alt="js"/></div>
                    </div>
            <div className="portfolio__item-cta">
            <a class="project-github-link" href="https://github.com/Ashishmishra30/joyful-pet-260" className='btn' target="_blank">Github</a>
            <a class="project-deployed-link" href="https://rococo-cuchufli-ac3e40.netlify.app/" className='btn btn-primary' target="_blank">Live Demo</a>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}
