import React from 'react';

const ProjectCard = ({ title, imageUrl, description }) => (
  <div className="project-card">
    {imageUrl && <img src={imageUrl} alt={title} />}
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
);

export default ProjectCard;
