import React, { useEffect } from 'react';
import { projectsData } from '../Works/Data';
import Works from '../Works/Works';
import './Portfolio.scss';

function Portfolio() {
  const [categoriId, setCategoriId] = React.useState(0);
  const [projects, setProjects] = React.useState([]);
  const categories = ['all', 'web', 'app', 'fullstack'];

  useEffect(() => {
    if (categories[categoriId] === 'all') {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category === categories[categoriId];
      });
      setProjects(newProjects)
    }
  },[categoriId]);

  const onChangeCategory = (i) => setCategoriId(i);
  console.log(categories[categoriId]);
  return (
    <div className="portfolio">
      <h2 className="portfolio__tittle">Projects</h2>
      <div className="portfolio__nav">
        <ul>
          {categories.map((CategorieName, i) => (
            <li
              key={i}
              onClick={() => onChangeCategory(i)}
              className={categoriId === i ? 'active' : ''}>
              {' '}
              {CategorieName}{' '}
            </li>
          ))}
        </ul>
      </div>
      <div className="projects">
        {projects.map((item) => (
          <Works item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
