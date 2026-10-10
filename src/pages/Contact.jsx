
import React from 'react';
import Herosection from '../components/Herosection';
import ContactInfo from '../components/ContactInfo';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <Herosection />
      <ContactInfo />
    </div>
  );
};

export default Contact;
