import React from 'react';
import choonsikImg from '../assets/choonsik.jpg';

const AboutPage = () => (
  <main className="about">
    <img src={choonsikImg} alt="프로필" />
    <h2>이름</h2>
    <p>안녕하세요! 저는 React에 흥미를 가진 개발자입니다.</p>
    <h3>보유 기술</h3>
    <ul>
      <li>HTML/CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
    </ul>
  </main>
);

export default AboutPage;
