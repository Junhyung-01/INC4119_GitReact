import React from 'react';
import choonsik from '../assets/choonsik.jpg';

function ProfileCard() {
  return (
    <div>
      <img src={choonsik} alt="Profile" />
      <h2>최준형</h2>
      <p>2020112128</p>
    </div>
  );
}

export default ProfileCard;