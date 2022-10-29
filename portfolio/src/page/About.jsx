import React from 'react';
import HeaderBackground from '../components/headerBackground/headerBackground';

import AboutImage from '../asset/Project1.jpeg';
import AboutMe from '../components/About me/AboutMe';
import Skills from '../components/Skills/Skills';

const About = () => {
  return (
    <>
      <HeaderBackground title={'About Me'} background={AboutImage} />
      <div className="container">
        <AboutMe />
        <Skills/>
      </div>
    </>
  );
};

export default About;
