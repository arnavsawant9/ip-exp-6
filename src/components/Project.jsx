// src/components/Project.js
import React from 'react';
import '../styles/project.css';
// import {projects} from './projects'

const Project = ({ title, description, image, liveDemo, codeRepo }) => {
    return (
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">{title}</h3>
                <p className="text-gray-700 mb-4">{description}</p>
                <div className="mt-4">
                    <a
                        href={liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline mr-2"
                    >
                        Live Demo
                    </a>
                    <span className="text-gray-400">|</span>
                    <a
                        href={codeRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline ml-2"
                    >
                        View Code
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Project;
