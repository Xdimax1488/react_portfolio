import React from 'react';


function Works({item}) {
  return (
    
    
    <div className="project">
        <img src={item.image} alt="" />
        <div className="project__deckription">{item.title}.</div>
        <div className="projects__btn">
            <a href={item.git} target="_blank" rel="noreferrer" className="btn btn-project">Github</a>
            <a href={item.demo} target="_blank" rel="noreferrer" className="btn btn-primery btn-project ">Live Demo</a>
        </div>
    </div>
    
    
    
  )
}

export default Works