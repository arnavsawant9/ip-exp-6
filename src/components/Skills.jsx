import React from 'react';

const Skills = () => {
  const programmingLanguages = ["C", "Java", "C++", "Python", "SQL"];
  const devOpsTools = ["Kubernetes", "Docker", "Jenkins", "AWS"];

  return (
    <div className="py-10 bg-blue-550"> {/* Solid blue background */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-white mb-6">Skills</h2> {/* White text for contrast */}
        
        {/* Programming Languages Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-white mb-4">Programming Languages</h3> {/* White text for contrast */}
          <ul className="flex flex-wrap justify-center space-x-6">
            {programmingLanguages.map((language, index) => (
              <li key={index} className="bg-blue-200 text-blue-800 px-4 py-2 rounded-md shadow hover:bg-blue-300 transition duration-200">
                {language}
              </li>
            ))}
          </ul>
        </div>

        {/* DevOps Tools Section */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">DevOps Tools</h3> {/* White text for contrast */}
          <ul className="flex flex-wrap justify-center space-x-6">
            {devOpsTools.map((tool, index) => (
              <li key={index} className="bg-blue-200 text-blue-800 px-4 py-2 rounded-md shadow hover:bg-blue-300 transition duration-200">
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
