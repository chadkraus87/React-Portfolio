import React from 'react';

const ProjectList = ({ projects }) => {
  return (
    <div>
      {projects.map((project) => (
        <project
          key={project.id}
          title={project.title}
          imageSrc={project.image}
          deployLink={project.projectLink}
          githubLink={project.repoLink}
          description={project.description}            
        />
      ))}
    </div>
  );
};

export default ProjectList;
