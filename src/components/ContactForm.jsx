import React from 'react';

function ContactForm() {
  return (
    <form>
      <input type="text" placeholder="Name" required />
      <input type="email" placeholder="Email" required />
      <textarea placeholder="Message" required></textarea>
      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;