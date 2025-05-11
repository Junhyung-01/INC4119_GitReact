import React from 'react';

const SkillsList = () => {
  const skills = ['HTML/CSS', 'JavaScript', 'React', 'Node.js'];

  return (
    <ul>
      {skills.map((skill, idx) => (
        <li key={idx}>{skill}</li>
      ))}
    </ul>
  );
};

export default SkillsList;
