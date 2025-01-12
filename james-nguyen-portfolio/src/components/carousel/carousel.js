import React, { useState } from 'react';
import './carousel.css';
import Project from '../project/project.js';
import Card from '../card/card';

const cardData = [
  {
    title: { text: 'Project', link: 'https://example.com/another-project' },
    header: 'Blank Header Text CJKLDANSKLDCNASDKLNDCLKDNASKL;',
    description: 'Blank DESCRIPTION Text CJKLDANSKLDCNASDKLNDCLKDNASKL;'
  },
  {
    title: { text: 'Project', link: 'https://example.com/another-project' },
    header: 'Blank Header Text CJKLDANSKLDCNASDKLNDCLKDNASKL;',
    description: 'Blank DESCRIPTION Text CJKLDANSKLDCNASDKLNDCLKDNASKL;'
  },
];

const Carousel = () => {
  const [selected, setSelected] = useState('projects'); 
  const handleClick = (section) => {
    setSelected(section);
  };

  const renderContent = () => {
    switch (selected) {
      case 'work':
        return (
          <div>
            {cardData.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                header={card.header}
                description={card.description}
              />
            ))}
          </div>
        );
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
