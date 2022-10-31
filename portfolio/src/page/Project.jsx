import React from 'react';
import HeaderBackground from '../components/headerBackground/headerBackground';

import AboutImage from '../asset/Project1.jpeg';
import Portfolio from '../components/Portfolio/Portfolio';

const Project = () => {
  return (
    <>
      <HeaderBackground title={'My Projects'} background={AboutImage} />
      <div className="container">
        <Portfolio />
      </div>
    </>
  );
};

export default Project;
