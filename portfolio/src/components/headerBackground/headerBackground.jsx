import React from 'react';

import './headerBackground.scss';

function HeaderBackground({ title, background }) {
  return (
    <div className="header__background" style={{ backgroundImage: `url(${background})` }}>
      <h1 className="title">{title}</h1>
      
    </div>
  );
}

export default HeaderBackground;
