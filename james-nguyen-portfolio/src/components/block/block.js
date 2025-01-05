import React from 'react';
import './block.css';

function Block() {
  const blocks = [
    {
      id: "schedule_bot_9000",
      title: "Discord User Schedule Bot",
      description: "Discord.Py bot that stores all user data and outputs it on command",
      technologies: "Python, Amazon Web Services, Matplotlib, Discord.py, CSV",
      link: "https://github.com/captnw/DiscordUserScheduleBot",
      buttonText: "View Git",
      image: "./boxDiscordBot.jpg",
      alt: "Discord Bot",
    },
    {
      id: "portfolio",
      title: "Personal Portfolio Website",
      description: "Personal Website that chronicles my work as an aspiring fullstack developer",
      technologies: "React, Github Pages, HTML, CSS, JS",
      link: "https://github.com/Jamess-Nguyen/portfolioJames",
      buttonText: "View Git",
      image: "./personalWebsiteBox.jpg",
      alt: "Personal Website",
    },
    {
      id: "schedule_bot_9000",
      title: "Discord User Schedule Bot",
      description: "Discord.Py bot that stores all user data and outputs it on command",
      technologies: "Python, Amazon Web Services, Matplotlib, Discord.py, CSV",
      link: "https://github.com/captnw/DiscordUserScheduleBot",
      buttonText: "View Git",
      image: "./boxDiscordBot.jpg",
      alt: "Discord Bot",
    },
    {
      id: "portfolio",
      title: "Personal Portfolio Website",
      description: "Personal Website that chronicles my work as an aspiring fullstack developer",
      technologies: "React, Github Pages, HTML, CSS, JS",
      link: "https://github.com/Jamess-Nguyen/portfolioJames",
      buttonText: "View Git",
      image: "./personalWebsiteBox.jpg",
      alt: "Personal Website",
    },
  ];

  return (
    <div className="block">
      <div className="block-grid">
        {blocks.map((block) => (
          <div key={block.id} className="block-card" style={{ backgroundImage: `url(${block.image})` }}>
            <div className="block-overlay">
              <div className="block-details">
                <p className="block-description">{block.description}</p>
                <p className="block-technologies">{block.technologies}</p>
                <a href={block.link} target="_blank" rel="noopener noreferrer">
                  <button>{block.buttonText}</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Block;
