import React from 'react';

import { IoDocumentText, IoFolder, IoPeople, IoRibbonSharp } from 'react-icons/io5';
import CV from '../../asset/2.pdf';
import HeaderImg from '../../asset/intro.jpeg';
import './AboutMe.scss';

function AboutMe() {
  return (
    <div className="about_me">
      <h2>My introduction</h2>
      <div className="about_me__inner">
        <div className="about_me__img">
          <img src={HeaderImg} alt="" />
        </div>
        <div className="about_me__content">
          <div className="experiance-block">
            <div className="experience">
              <div className="icon-ab">
                <IoRibbonSharp size={20} style={{ color: '#4db5ff' }} />
              </div>
              <div className="tittle-ab">experience</div>
              <div className="description-ab">1 year worck</div>
            </div>
            <div className="experience">
              <div className="icon-ab">
                <IoPeople size={20} style={{ color: '#4db5ff' }} />
              </div>
              <div className="tittle-ab">clients</div>
              <div className="description-ab">30+ worldwide</div>
            </div>
            <div className="experience">
              <div className="icon-ab">
                <IoFolder size={20} style={{ color: '#4db5ff' }} />
              </div>
              <div className="tittle-ab">projects</div>
              <div className="description-ab">10+ completed</div>
            </div>
          </div>
          <div className="about_me__text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptates alias
            distinctio tempora fugiat ullam provident quia minima asperiores doloribus officiis,
            fuga earum perferendis dolores, quam quibusdam, nostrum aspernatur eveniet eum labore
            cumque. Nostrum.
          </div>
          <a download="" href={CV} className="btn btn-primery btn-home">
            Download CV
            <IoDocumentText size={25} className="donload-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
