import React from 'react';
import './project.css';

function Project() {
  const projects = [
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
    <div className="project">
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card" style={{ backgroundImage: `url(${project.image})` }}>
            <div className="project-overlay">
              <div className="project-details">
                <p className="project-description">{project.description}</p>
                <p className="project-technologies">{project.technologies}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <button>{project.buttonText}</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
