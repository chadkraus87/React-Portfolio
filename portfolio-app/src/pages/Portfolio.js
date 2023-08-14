import React from 'react';
import Project from './Project';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Brief description of project 1',
    image: 'path-to-project-1-image.jpg',
    projectLink: 'project-1-link',
    repoLink: 'github-repo-1-link',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Brief description of project 2',
    image: 'path-to-project-2-image.jpg',
    projectLink: 'project-2-link',
    repoLink: 'github-repo-2-link',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Brief description of project 3',
    image: 'path-to-project-3-image.jpg',
    projectLink: 'project-3-link',
    repoLink: 'github-repo-3-link',
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'Brief description of project 4',
    image: 'path-to-project-4-image.jpg',
    projectLink: 'project-4-link',
    repoLink: 'github-repo-4-link',
  },
  {
    id: 5,
    title: 'Project 5',
    description: 'Brief description of project 5',
    image: 'path-to-project-1-image.jpg',
    projectLink: 'project-1-link',
    repoLink: 'github-repo-1-link',
  },
  {
    id: 5,
    title: 'Project 6',
    description: 'Brief description of project 6',
    image: 'path-to-project-6-image.jpg',
    projectLink: 'project-6-link',
    repoLink: 'github-repo-6-link',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Portfolio</h2>
        <div className="row">
          {projects.map(project => (
            <div key={project.id} className="col-md-4 mb-4">
              <div className="card">
                <img src={project.image} alt={project.title} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href={project.projectLink} className="btn btn-primary">View Project</a>
                  <a href={project.repoLink} className="btn btn-secondary ml-2">GitHub Repo</a>
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
