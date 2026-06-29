import React from "react";
import "./calender.css";

const Calander = () => {
  return (
    <div>
      <section id="stats">
        <h2 class="sub-title" id="statistics">
          My Statistics
        </h2>
        <div id="statisticsdiv">
          <div class="github-streak-stats-div">
            <div>
              <img
                id="github-streak-stats"
                src="https://github-readme-streak-stats.herokuapp.com?user=Ashishmishra30&theme=transparent"
                alt="github-readme-streak-stats"
              />
            </div>
            <div>
              <img
                id="github-stats-card"
                src="https://github-readme-stats.vercel.app/api?username=Ashishmishra30&show_icons=true&theme=transparent"
                alt=""
              />
            </div>
          </div>
          <div class="github-lang-div">
            <img
              id="github-top-langs"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=Ashishmishra30&layout=compact&theme=transparent"
              alt=""
            />
          </div>
        </div>

        <h2 class="sub-title" id="calender">
          Github Calender
        </h2>

        <div id="calenderdiv" class="react-activity-calendar">
          <div
            class="calendar"
            id="cal"
            style={{ marginTop: "30px", color: "white" }}
          >
            {/* Image-based contribution graph — no JS dependency, never breaks the app */}
            <img
              id="github-contribution-graph"
              src="https://ghchart.rshah.org/4db5ff/Ashishmishra30"
              alt="Ashish Mishra's GitHub contribution graph"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calander;
