import React from 'react'
import { Link } from 'react-router-dom'

import Img1 from '../../asset/Project1.jpeg'

import './ProjectHome.scss'

function ProjectHome() {
  return (
    <div className="project__section">
        <h2 className="title">Projects</h2>
        <div className="projects">
            <div className="project">
                <img src={Img1} alt="" />
                <div className="project__deckription">Lorem ipsum dolor sit amet consectetur.</div>
                <div className="projects__btn">
                    <a href="#" className="btn btn-project">Github</a>
                    <a href="#" className="btn btn-primery btn-project ">Live Demo</a>
                </div>
            </div>
            <div className="project">
                <img src={Img1} alt="" />
                <div className="project__deckription">Lorem ipsum dolor sit amet consectetur.</div>
                <div className="projects__btn">
                    <a href="#" className="btn btn-project">Github</a>
                    <a href="" className="btn btn-primery btn-project">Live Demo</a>
                </div>
            </div>
            <div className="project">
                <img src={Img1} alt="" />
                <div className="project__deckription">Lorem ipsum dolor sit amet consectetur.</div>
                <div className="projects__btn">
                    <a href="#" className="btn btn-project">Github</a>
                    <a href="" className="btn btn-primery btn-project">Live Demo</a>
                </div>
            </div>
        </div>
        <Link to='/project' href="" className="btn btn-primery">See more...</Link>
    </div>
  )
}

export default ProjectHome