import React from "react";
import Spots from "../assets/images/SpotsLP.png";
import PWA from "../assets/images/PWALP.png";
import SocialNetwork from "../assets/images/SocialNetworkAPI.png";
import MVC from "../assets/images/MVCTechBlogLP.png";
import WorkDayScheduler from "../assets/images/WorkDaySchedulerLP.png";
import EmployeeTracker from "../assets/images/EmployeeTracker.png";

const projects = [
  {
    id: 1,
    title: "Spots",
    description:
      "An authentication based application that allows users to save their favorite spots with options to save photos, auto-populates addresses, and offers a redirect to the Google Maps address.",
    image: Spots,
    projectLink: "https://spots-1fbfc8155a67.herokuapp.com/",
    repoLink: "https://github.com/chadkraus87/FullStackGroup2",
  },
  {
    id: 2,
    title: "PWA - Text Editor",
    description:
      "PWA Text Editor is a progressive web application that enables users to create and manage code snippets even without an internet connection.",
    image: PWA,
    projectLink: "https://pwa-clk-a94fb349d9da.herokuapp.com/",
    repoLink: "https://github.com/chadkraus87/PWA-Text-Editor",
  },
  {
    id: 3,
    title: "Social Network API",
    description:
      "A backend API for a social network platform that allows users to share their thoughts, reactions, and connect with other users. The application follows the Model-View-Controller (MVC) architecture and uses Node.js, Express.js, MongoDB, and Mongoose for data management.",
    image: SocialNetwork,
    projectLink:
      "https://drive.google.com/file/d/1fEC96BaMTbx14i5lkYy8cDr9wpkvwJzT/view",
    repoLink: "https://github.com/chadkraus87/SocialNetworkAPI",
  },
  {
    id: 4,
    title: "MVC Tech Blog",
    description:
      "A CMS-style blog site that allows developers to publish articles, blog posts, and share their thoughts and opinions. The application follows the Model-View-Controller (MVC) paradigm and utilizes various technologies such as Express.js, MySQL2, Sequelize, Handlebars.js, bcrypt, express-session, and connect-session-sequelize.",
    image: MVC,
    projectLink: "https://mvcblogchadkraus-2e5422b33d85.herokuapp.com/",
    repoLink: "https://github.com/chadkraus87/MVCBlog",
  },
  {
    id: 5,
    title: "Work Day Scheduler",
    description:
      "A calendar application that allows users to save events, presents the current time/day, and shares inspirational quotes in the footer.",
    image: WorkDayScheduler,
    projectLink: "https://chadkraus87.github.io/Work-Day-Scheduler/",
    repoLink: "https://github.com/chadkraus87/Work-Day-Scheduler",
  },
  {
    id: 6,
    title: "Employee Tracker",
    description:
      "An application for tracking employees and departments within a company.",
    image: EmployeeTracker,
    projectLink:
      "https://drive.google.com/file/d/1R3MvpUrgGGZx_RJXHq8LRBjfvBBzXhYN/view",
    repoLink: "https://github.com/chadkraus87/EmployeeTracker",
  },
];
  {
    id: 7,
    title: "Employee Tracker",
    description:
      "An application for tracking employees and departments within a company.",
    image: EmployeeTracker,
    projectLink:
      "https://drive.google.com/file/d/1R3MvpUrgGGZx_RJXHq8LRBjfvBBzXhYN/view",
    repoLink: "https://github.com/chadkraus87/EmployeeTracker",
  },
];
  {
    id: 9,
    title: "Note Taking Application",
    description:
      "An for keeping up to date with daily tasks",
    image: NoteTaker,
    projectLink:
      "https://drive.google.com/file/d/1R3MvpUrgGGZx_RJXHq8LRBjfvBBzXhYN/view",
    repoLink: "https://github.com/chadkraus87/EmployeeTracker",
  },
];
  {
    id: 10,
    title: "Web API Quz",
    description:
      "A timed application quiz to help users brust up on their Javascript knowledge.",
    image: WebAPIQiz,
    projectLink:
      "https://drive.google.com/file/d/1R3MvpUrgGGZx_RJXHq8LRBjfvBBzXhYN/view",
    repoLink: "https://github.com/chadkraus87/EmployeeTracker",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Portfolio</h2>
        <div className="row">
          {projects.map((project) => (
            <div key={project.id} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    View Project
                  </a>
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary ml-2"
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
