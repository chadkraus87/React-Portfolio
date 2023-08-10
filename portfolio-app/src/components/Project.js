import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ title, imageSrc, deployLink, githubLink }) => {
  return (
    <div className="project mb-4">
      <img src={imageSrc} alt={`${title} Screenshot`} className="project-image" />
      <h3 className="mt-3">{title}</h3>
      <div className="project-links">
        <Link to={deployLink}>View App</Link>
        <Link to={githubLink}>GitHub Repo</Link>
      </div>
    </div>
  );
};

export default Project;
