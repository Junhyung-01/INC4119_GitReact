import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <h1>나만의 포트폴리오</h1>
    <nav>
      <Link to="/">홈</Link>
      <Link to="/about">소개</Link>
      <Link to="/projects">프로젝트</Link>
      <Link to="/contact">연락처</Link>
      <Link to="/calculate">계산기</Link>
    </nav>
  </header>
);

export default Header;
