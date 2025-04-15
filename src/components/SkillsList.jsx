import React from 'react';

function SkillsList() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React'];
  return (
    <ul>
      {skills.map(skill => <li key={skill}>{skill}</li>)}
    </ul>
  );
}

export default SkillsList;