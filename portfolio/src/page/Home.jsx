import React from 'react';
import GeneralHome from '../components/General/GeneralHome';
import ProjectHome from '../components/ProjectHome/ProjectHome';

function Home() {
  return (
    <div className="container">
      <GeneralHome />
      <ProjectHome/>
    </div>
  );
}

export default Home;
