import React from 'react'
import "./Skills.css";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import react from "../../assets/react.png";
import redux from "../../assets/redux.png";
import node from "../../assets/node.png";
import next from "../../assets/nextjs.png";
import github from "../../assets/github.png";
import typescript from "../../assets/typescript.png";
import mongo from "../../assets/mongo.png";
import tailwind from "../../assets/tailwind.png";
import chakra from "../../assets/chakra.jpg";

export const Skills = () => {
  return (
    <div >
      <section id='skills'>
        <h5>What Skills I Have</h5>
        <h2>Skills</h2>
        <div className="container experience_container">
        <div id="grid">
            <div class="skills-card">
                <img class="skills-card-img" src={html} alt="html"/>
                <p class="skills-card-name">HTML</p>
            </div>
            <div class="skills-card">
                <img class="skills-card-img" src={css} alt="css"/>
                <p class="skills-card-name">CSS</p>
            </div>
            <div class="skills-card">
                <img class="skills-card-img" src={javascript} alt="JavaScript"/>
                <p class="skills-card-name">JavaScript</p>
            </div>
            <div class="skills-card">
                <img class="skills-card-img" src={react} alt="react"/>
                <p class="skills-card-name">React</p>
            </div>
            <div class="skills-card">
                <img class="skills-card-img" src={redux} alt="Redux"/>
                <p class="skills-card-name">Redux</p>
            </div>
            <div class="skills-card">
                <img class="skills-card-img" src={node} alt="MongoDB"/>
                <p class="skills-card-name">Node.js</p>
            </div>
            <div class="skills-card">
                <img class="skills-card-img" src={next} alt="sql"/>
                <p class="skills-card-name">Next.js</p>
            </div>
            <div class="skills-card">
                <img class="skills-card-img" src={typescript} alt="TypeScript"/>
                <p class="skills-card-name">TypeScript</p>
            </div>
            <div class="skills-card">
                <img class="skills-card-img" src={chakra} alt="Chakra"/>
                <p class="skills-card-name">Chakra UI</p>
            </div>
            <div class="skills-card">
                <img class="skills-card-img" src={mongo} alt="mongo"/>
                <p class="skills-card-name">MongoDB</p>
            </div>
            <div class="skills-card">
                <img class="skills-card-img" src={github} alt="github"/>
                <p class="skills-card-name">Github</p>
            </div>
            <div class="skills-card">
                <img class="skills-card-img" src={tailwind} alt="tailwind"/>
                <p class="skills-card-name">Tailwind</p>
            </div>
        </div>
        </div>

      </section>
    </div>
  )
}
