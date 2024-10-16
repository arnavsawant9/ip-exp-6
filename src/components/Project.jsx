import React from 'react';
import '../styles/project.css'; 
import photo from '../assets/photo.jpeg'

const Project = () => {
    return (
      <div className="project-card">
        <img src="path_to_your_image.jpg" alt="Project Title" className="project-image" />
        <div className="project-info">
          <h3 className="project-title">Your Project Title</h3>
          <p className="project-description">A brief description of your project goes here.</p>
          <p className="project-demo">Live Demo: https://yourdemo.com</p>
          <p className="project-code">View Code: https://github.com/yourusername/yourproject</p>
        </div>
      </div>
    );
  };
  
  export default Project;
