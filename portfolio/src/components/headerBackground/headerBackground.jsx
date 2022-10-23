import React from 'react';

import './headerBackground.scss';

function HeaderBackground({ title, title_litle, background }) {
  return (
    <div className="header__background" style={{ backgroundImage: `url(${background})` }}>
      <h1 className="title">{title}</h1>
      <h3 className="title__litl">{title_litle}</h3>
    </div>
  );
}

export default HeaderBackground;
