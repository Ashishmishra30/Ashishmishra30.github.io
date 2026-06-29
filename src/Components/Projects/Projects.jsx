import React from "react";
import "./Projects.css";
import {
  FiCode,
  FiPackage,
  FiDatabase,
  FiMessageSquare,
  FiUsers,
  FiCalendar,
} from "react-icons/fi";

export const Projects = () => {
  return (
    <div>
      <section id="projects">
        <h5>Professional Experience</h5>
        <h2>Work at HKS</h2>
        <div className="container experience__container">
          {/* LePrince Project */}
          <div className="project-card experience-card">
            <div className="experience-header">
              <div className="experience-icon">
                <FiPackage />
              </div>
              <div>
                <h2 className="project-title">LePrince</h2>
                <p className="company-name">Movie Management System</p>
              </div>
            </div>

            <h3 className="project-description">
              Enterprise platform for cinema movie makers and sales agents.
              Handles movie rights trading, with custom real-time chat for
              negotiation and secure upload/download of movies up to 500GB.
            </h3>

            <div className="experience-highlights">
              <div className="highlight-item">
                <FiDatabase className="highlight-icon" />
                <span>500GB file handling</span>
              </div>
              <div className="highlight-item">
                <FiMessageSquare className="highlight-icon" />
                <span>Real-time negotiation chat</span>
              </div>
              <div className="highlight-item">
                <FiUsers className="highlight-icon" />
                <span>Multi-role access control</span>
              </div>
            </div>

            <h4>Key Features:</h4>
            <ul className="feature-list">
              <li>Secure movie upload/download infrastructure</li>
              <li>Custom chat system for rights negotiation</li>
              <li>Dynamic forms for trade management</li>
              <li>Cinema & sales agent portal</li>
            </ul>
          </div>

          {/* Hop.Wellness Project */}
          <div className="project-card experience-card">
            <div className="experience-header">
              <div className="experience-icon hop-icon">
                <FiCalendar />
              </div>
              <div>
                <h2 className="project-title">Hop.Wellness</h2>
                <p className="company-name">Booking & Appointment SaaS</p>
              </div>
            </div>

            <h3 className="project-description">
              Comprehensive SaaS solution for diagnostic centers to manage
              bookings, staff appointments, and inventory purchases. Includes
              admin dashboard and mobile apps for customers and staff.
            </h3>

            <div className="experience-highlights">
              <div className="highlight-item">
                <FiCalendar className="highlight-icon" />
                <span>Appointment scheduling</span>
              </div>
              <div className="highlight-item">
                <FiUsers className="highlight-icon" />
                <span>Staff management</span>
              </div>
              <div className="highlight-item">
                <FiCode className="highlight-icon" />
                <span>Multi-platform solution</span>
              </div>
            </div>

            <h4>Key Features:</h4>
            <ul className="feature-list">
              <li>Booking & appointment management system</li>
              <li>Staff scheduling and tracking dashboard</li>
              <li>Purchase & inventory management</li>
              <li>Mobile apps for customers and staff</li>
            </ul>
          </div>
        </div>

        {/* Old Projects - Commented */}
        {/*
        <div  className="container portfolio__container">
        <divclassName="project-card">
            <article  className="portfolio__item">
              <div  className="portfolio_item-image">
                <img src={ChaloGhume} alt="" />
              </div>
              <h2className="project-title">Chalo Ghume</h2>
              <h3className="project-description">
                This website is clone of Expedia. Which helps in travelling.
              </h3>
            </article>
          </div>

          <divclassName="project-card">
            <article  className="portfolio__item">
              <div  className="portfolio_item-image">
                <img src={Automads} alt="" />
              </div>
              <h2className="project-title">Auto Mads</h2>
              <h3className="project-description">
                This website is clone of Advance Auto parts.
              </h3>
            </article>
          </div>

          <divclassName="project-card">
            <article  className="portfolio__item">
              <div  className="portfolio_item-image">
                <img src={Time} alt="" />
              </div>
              <h2className="project-title">Time Rocket</h2>
              <h3className="project-description">
                This website is clone of DeskTime.
              </h3>
            </article>
          </div>
        </div>
        */}
      </section>
    </div>
  );
};
