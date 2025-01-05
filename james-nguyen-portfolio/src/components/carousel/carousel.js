import React, { useState } from 'react';
import './carousel.css';
import Project from '../project/project.js';

const Carousel = () => {
  const [selected, setSelected] = useState('projects'); 
  const handleClick = (section) => {
    setSelected(section);
  };

  const renderContent = () => {
    switch (selected) {
      case 'work':
        return <p>Work Experience Content</p>; 
      case 'projects':
        return <Project/>
      case 'awards':
        return <p>Awards Content</p>;  
      default:
        return <p>Work Experience Content</p>;
    }
  };

  return (
    <div className="carousel-container">
      <div className="button-container">
        <button
          className={`button ${selected === 'work' ? 'active' : ''}`}
          onClick={() => handleClick('work')}
        >
          Work Experience
        </button>
        <button
          className={`button ${selected === 'projects' ? 'active' : ''}`}
          onClick={() => handleClick('projects')}
        >
          Projects
        </button>
        <button
          className={`button ${selected === 'awards' ? 'active' : ''}`}
          onClick={() => handleClick('awards')}
        >
          Awards
        </button>
      </div>
      <div className="content-container">
        {renderContent()}
      </div>
    </div>
  );
};

export default Carousel;
