import React from 'react';
import Herosection from '../components/Herosection'
import './Contact.css';
import ContactInfo from '../components/ContactInfo';

const Contact = () => {
  return (
    <div className="contact-page">
      
      {/* SIRF HERO SECTION */}
      <Herosection />
      <ContactInfo />

    </div>
  );
};

export default Contact;