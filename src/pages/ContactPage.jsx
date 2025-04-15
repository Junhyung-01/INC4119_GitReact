import React from 'react';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';

function ContactPage() {
  return (
    <section>
      <ContactInfo />
      <ContactForm />
    </section>
  );
}

export default ContactPage;