import React, { useState } from 'react';
import './carousel.css';
import Card from '../card/card';

const workExp = [
  {
    title: { text: 'Notification Assistant', link: 'https://example.com/another-project' },
    header: 'Monitors web and notifies user when specific metrics are met',
    year: '2024-Present',
    description: 'Initially designed to get free Chick-fil-A this bot has been scaled to notify me based on lambda monitors.'
  },
  {
    title: { text: 'Personal Portfolio', link: 'https://example.com/another-project' },
    header: 'My Really cool website',
    year: '2020-Present',
    description: 'Conceptualized and continually updated to represent my skills and experience as a software engineer.'
  },
];

const Carousel = () => {
  const [selected, setSelected] = useState('projects'); 
  const handleClick = (section) => {
    setSelected(section);
  };

  const renderContent = () => {
    switch (selected) {
      case 'previousprojects':
        return <p>Previous Projects Content</p>;  
      case 'projects':
        return (
          <div className="card-wrapper">
            {workExp.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                header={card.header}
                description={card.description}
                year={card.year}
              />
            ))}
          </div>
        );
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
          className={`button ${selected === 'projects' ? 'active' : ''}`}
          onClick={() => handleClick('projects')}
        >
          Ongoing Projects
        </button>
        <button
          className={`button ${selected === 'previousprojects' ? 'active' : ''}`}
          onClick={() => handleClick('previousprojects')}
        >
          Previous Projects
        </button>
        <button
          className={`button ${selected === 'awards' ? 'active' : ''}`}
          onClick={() => handleClick('awards')}
        >
          Awards
        </button>
      </div>
      <div>
        {renderContent()}
      </div>
    </div>
  );
};

export default Carousel;
