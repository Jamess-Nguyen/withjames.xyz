import React, { useState } from 'react';
import './carousel.css';
import Card from '../card/card';

const ongoingProjects = [
  {
    title: { text: 'Notification Assistant', link: 'https://github.com/Jamess-Nguyen' },
    header: 'Monitors web and notifies user when specific metrics are met',
    description: 'Initially designed to get free Chick-fil-A this bot has been scaled to notify me based on lambda monitors.'
  },
  {
    title: { text: 'Digital Swirl Engine', link: 'https://github.com/Jamess-Nguyen/DigitalSwirl-Roblox/' },
    header: 'Game Engine',
    description: 'Sonic the hedgehog physics engine.'
  },
  {
    title: { text: 'Personal Portfolio', link: 'https://example.com/another-project' },
    header: 'My Really cool website',
    description: 'Conceptualized and continually updated to represent my skills and experience as a software engineer.'
  },
];

const previousProjects = [
  {
    title: { text: 'DIYB0xx-Microcontroller', link: 'https://www.youtube.com/watch?v=OekrLlLfaII&ab_channel=JamerGamer'},
    header: 'Video Game Controller (Game Cube)',
    description: 'Designed, built, and documented flat-keyboard version of Game cube controller to help players with hand pain play Super Smash Bros Melee.'
  },
  {
    title: { text: 'Schedule Bot 9000', link: 'https://github.com/captnw/DiscordActivityBot' },
    header: 'Discord Bot!',
    description: 'When discord server, would track the online times of all the server occupants. Users can request to see their own online activity, or check to see the cumulative activity of the whole server.'
  },
  {
    title: { text: 'John Jumper', link: 'https://jangu.itch.io/johnjumper' },
    header: 'Unity Web Video Game',
    description: '2D vertical scroller based on jumping infinitely. Visit the header to play the game!'
  },
  {
    title: { text: 'Quizify', link: 'https://github.com/Jamess-Nguyen/Quizify' },
    header: 'Spotify Based Web Game',
    description: 'Randomly picks a song from players spotify play list and quizzes them.'
  },
];

const awards = [
  {
    title: { text: 'CUNA Diamond Awards', link: 'https://www.cunacouncils.org/content/cuna/councils.html' },
    header: 'Best Production Website Award',
    description: 'Chosen in a pool of over 1400+ companies to have the best website.'
  },
  {
    title: { text: 'Bricksmith', link: 'https://roblox.fandom.com/wiki/Bricksmith_badge' },
    header: 'Roblox Developer Badge',
    description: 'The Bricksmith badge is earned by having a popular personal place in Roblox.'
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
        return (
          <div className="card-wrapper">
            {previousProjects.map((card, index) => (
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
      case 'projects':
        return (
          <div className="card-wrapper">
            {ongoingProjects.map((card, index) => (
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
        return (
          <div className="card-wrapper">
            {awards.map((card, index) => (
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
