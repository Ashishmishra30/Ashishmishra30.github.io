import React from "react";
import "./calender.css";
import GitHubCalendar from "react-github-calendar";

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
            {/* <!-- Loading stuff --> */}
            {/* Loading the data just for you. */}
            <GitHubCalendar
              username="ashishmishra30"
              blockSize={15}
              blockMargin={5}
              color="#c084f5"
              fontSize={16}
              colorScheme="light"
              m={"auto"}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calander;
