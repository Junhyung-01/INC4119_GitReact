import React from 'react';
import dora from '../assets/dora.jpg';

function ProfileCard() {
  return (
    <div>
      <img src={dora} alt="Profile" />
      <h2>Your Name</h2>
      <p>Frontend Developer</p>
    </div>
  );
}

export default ProfileCard;