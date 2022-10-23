import React from 'react';
import { Link } from 'react-router-dom';

import { GrGithub, GrInstagram, GrLinkedin } from 'react-icons/gr';
import HeaderImg from '../../asset/intro.jpeg';
import './GeneralHome.scss';
const GeneralHome = () => {
  return (
    <div className="home">
      <div className="social">
        <a
          href="https://www.instagram.com/janastyaa/"
          className="instagram"
          target="_blank"
          rel="noreferrer">
          <GrInstagram size={20} style={{ color: '#4db5ff' }} />
        </a>
        <a
          href="https://www.instagram.com/janastyaa/"
          className="github"
          target="_blank"
          rel="noreferrer">
          <GrGithub size={20} style={{ color: '#4db5ff' }} />
        </a>
        <a
          href="https://www.instagram.com/janastyaa/"
          className="linkedin"
          target="_blank"
          rel="noreferrer">
          <GrLinkedin size={20} style={{ color: '#4db5ff' }} />
        </a>
      </div>
      <div className="mean__section">
        <div className="mean__inner">
          <h1 className="tittle">Dmytro Kurinnyi</h1>
          <h3 className="tittle-litll">Full Stack web developer</h3>
          <div className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolorem itaque qui unde ratione consectetur quas.
          </div>
        </div>
        <Link to='/contact'className="btn btn-primery btn-home">
          Lets tollck</Link>
      </div>
      <div className="portfolio__photo">
        <img src={HeaderImg} alt="" />
      </div>
    </div>
  );
};

export default GeneralHome;