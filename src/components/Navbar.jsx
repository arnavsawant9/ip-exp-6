import React from 'react';

function Navbar() {
  return (
    <nav className="bg-blue-600 shadow-md">
      <div className="container mx-auto px-4 py-4"> {/* Increased vertical padding */}
        <ul className="flex justify-center space-x-12"> {/* Increased space between items */}
          <li className="text-white text-lg hover:text-blue-300 cursor-pointer transition-colors duration-200">Home</li> {/* Increased font size */}
          <li className="text-white text-lg hover:text-blue-300 cursor-pointer transition-colors duration-200">About</li>
          <li className="text-white text-lg hover:text-blue-300 cursor-pointer transition-colors duration-200">Projects</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
