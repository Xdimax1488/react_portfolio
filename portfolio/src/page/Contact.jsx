import React from 'react';
import HeaderBackground from '../components/headerBackground/headerBackground';

import AboutImage from '../asset/Project1.jpeg';
import ContactForm from '../components/ContacForm/ContactForm';

const Contact = () => {
  return (
    <>
      <HeaderBackground title={'Contact Me'} background={AboutImage} />
      <div className="container">
        <ContactForm/>
      </div>
    </>
  );
};

export default Contact;
