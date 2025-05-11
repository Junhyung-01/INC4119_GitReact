import React from 'react';
import CalculatorImage from '../assets/CalculatorImage.png';
const ProjectsPage = () => (
  <main className="projects">
    <h2>프로젝트</h2>
    <div className="project-list">
        <img src={CalculatorImage} alt="계산기 앱" className="project-image" />
        <h3>계산기 앱</h3>
        
    </div>
  </main>
);

export default ProjectsPage;
