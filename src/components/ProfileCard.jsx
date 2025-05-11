import React from 'react';
import choonsikImg from '../assets/choonsik.jpg';

const ProfileCard = () => (
  <div style={{ textAlign: 'center' }}>
    <img src={choonsikImg} alt="프로필" width="200" />
    <h2>이름</h2>
    <p>안녕하세요! 저는 React에 흥미를 가진 개발자입니다.</p>
  </div>
);

export default ProfileCard;
