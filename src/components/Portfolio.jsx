import React from 'react';
import Project from './Project';
import '../styles/portfolio.css'; // Import the CSS file for the portfolio

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h2>My Projects</h2>
      <div className="projects-container">
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
};

export default Portfolio;
