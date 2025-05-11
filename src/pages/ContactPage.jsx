import React from 'react';

const ContactPage = () => (
  <main className="contact">
    <h2>연락처</h2>
    <p>이메일: 2020112128@dgu.ac.kr</p>
    <p>전화번호: 010-5530-7865</p>
    <form>
      <input type="text" placeholder="이름: " />
      <input type="text" placeholder="연락처: " />
      <textarea placeholder="메시지: "></textarea>
      <button type="submit">보내기</button>
    </form>
  </main>
);

export default ContactPage;
