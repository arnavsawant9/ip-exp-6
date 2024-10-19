import React from 'react';
import photo from '../assets/photo.jpeg'; // Keep this for profile picture if needed

function About() {
  return (
    <div className="relative flex items-center justify-center h-screen text-white">
      {/* Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 1440 320">
          <path fill="#1e3a8a" fillOpacity="1" d="M0,128L30,101.3C60,75,120,21,180,10.7C240,0,300,32,360,74.7C420,117,480,171,540,202.7C600,235,660,245,720,245C780,245,840,235,900,218.7C960,203,1020,181,1080,165.3C1140,149,1200,139,1260,144C1320,149,1380,171,1410,182.7L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320H0Z">
          </path>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 p-8 max-w-lg text-center rounded-lg bg-gray-800 bg-opacity-80 shadow-lg">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg">
          Arnav Sawant is the junior tech head at IEEE VESIT, where he actively engages in various technological initiatives and leadership activities. Passionate about coding and problem-solving, he is focused on mastering Data Structures and Algorithms (DSA) using Java to strengthen his programming skills. With aspirations of becoming a Software Development Engineer (SDE), Arnav is dedicated to continuous learning and innovation, eager to tackle challenging projects and contribute meaningfully to the tech community.
        </p>
      </div>
    </div>
  );
}

export default About;
