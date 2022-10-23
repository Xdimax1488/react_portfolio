
import React from 'react'
import { Link } from 'react-router-dom'

import { FaInstagramSquare, FaTelegram, FaFacebookSquare } from 'react-icons/fa';
import './Footer.scss'

function Footer() {
  return (
    <footer>
        <div className="title">Dmytro</div>
        <nav>
        <Link to="/about">About</Link>
        <Link to="/project">Project</Link>
        <Link to="/contact">Contact</Link>
        </nav>
        <div className="social__footer">
        <a
          href="https://www.instagram.com/janastyaa/"
          className="instagram"
          target="_blank"
          rel="noreferrer">
          <FaInstagramSquare size={30} style={{ color: '#2c2c6c' }} />
        </a>
        <a
          href="https://www.instagram.com/janastyaa/"
          className="github"
          target="_blank"
          rel="noreferrer">
          <FaTelegram size={30} style={{ color: '#2c2c6c' }} />
        </a>
        <a
          href="https://www.instagram.com/janastyaa/"
          className="linkedin"
          target="_blank"
          rel="noreferrer">
          <FaFacebookSquare size={30} style={{ color: '#2c2c6c' }} />
        </a>
        </div>
        <div className="rights">Lorem ipsum dolor sit amet.</div>
    </footer>
  )
}

export default Footer