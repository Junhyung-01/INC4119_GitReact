import React from 'react';

const ContactForm = () => (
  <form>
    <input type="text" placeholder="이름: " />
    <input type="text" placeholder="연락처: " />
    <textarea placeholder="메시지: " />
    <button type="submit">보내기</button>
  </form>
);

export default ContactForm;
