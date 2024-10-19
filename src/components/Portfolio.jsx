import React from 'react';
import Project from './Project';
import '../styles/portfolio.css'; // Import the CSS file for the portfolio
import projects from './projects';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h2 className="text-center text-2xl font-bold mb-6">My Projects</h2>
      <div className="projects-container flex justify-center flex-wrap"> 
        <div className="p-4 flex justify-around"> 
          {projects.map((project, index) => (
              <div className="mx-2"> {/* Add margin to create space between cards */}
                <Project
                    key={index}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    liveDemo={project.liveDemo}
                    codeRepo={project.codeRepo}
                />
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
