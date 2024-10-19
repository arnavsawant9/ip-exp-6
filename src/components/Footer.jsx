import React from "react";
import { socialLinks } from './socialLinks';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold mb-2">Connect with me</p>
        
        <div className="flex justify-center space-x-6 mb-2">
          {/* Twitter */}
          <a
            href={socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M24 4.557a9.831 9.831 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.86 9.86 0 01-3.127 1.195 4.918 4.918 0 00-8.384 4.482A13.939 13.939 0 011.671 3.149a4.919 4.919 0 001.523 6.574A4.902 4.902 0 01.96 9.45v.061a4.92 4.92 0 003.946 4.827 4.902 4.902 0 01-2.224.085 4.918 4.918 0 004.59 3.417A9.87 9.87 0 010 21.543a13.904 13.904 0 007.548 2.212c9.056 0 14.01-7.506 14.01-14.01 0-.213-.004-.425-.014-.637A9.936 9.936 0 0024 4.557z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.057 2.417.272 3.517 1.373 1.1 1.1 1.315 2.311 1.373 3.517.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.057 1.206-.272 2.417-1.373 3.517-1.1 1.1-2.311 1.315-3.517 1.373-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.057-2.417-.272-3.517-1.373-1.1-1.1-1.315-2.311-1.373-3.517C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.057-1.206.272-2.417 1.373-3.517 1.1-1.1 2.311-1.315 3.517-1.373 1.266-.058 1.646-.07 4.85-.07M12 0C8.741 0 8.332.015 7.052.072 5.72.13 4.577.352 3.49.88 2.407 1.405 1.552 2.26 1.027 3.344.5 4.43.277 5.572.219 6.905.162 8.185.147 8.594.147 12s.015 3.815.072 5.095c.058 1.333.281 2.475.808 3.56.526 1.084 1.381 1.939 2.464 2.464 1.084.526 2.226.748 3.56.808 1.28.057 1.689.072 5.048.072s3.769-.015 5.048-.072c1.333-.058 2.475-.281 3.56-.808 1.084-.526 1.939-1.381 2.464-2.464.526-1.084.748-2.226.808-3.56.057-1.28.072-1.689.072-5.048s-.015-3.769-.072-5.048c-.058-1.333-.281-2.475-.808-3.56-.526-1.084-1.381-1.939-2.464-2.464-1.084-.526-2.226-.748-3.56-.808C15.815.015 15.406 0 12 0zM12 5.838A6.162 6.162 0 105.838 12 6.162 6.162 0 0012 5.838zm0 10.162A4 4 0 1116 12a4 4 0 01-4 4zm6.406-10.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
            </svg>
          </a>

          {/* LeetCode */}
          <a
            href={socialLinks.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M20.548 8.93a.862.862 0 0 0-.422-.573L14.95 5.715a.87.87 0 0 0-.826 0l-5.175 2.64a.871.871 0 0 0 0 1.545l4.754 2.425a.874.874 0 0 0 1.045-.224l4.754-6.046a.875.875 0 0 0-.146-1.225L14.87 2.64a.862.862 0 0 0-1.045.224l-4.754 6.046a.874.874 0 0 0 .146 1.225l4.755 2.426a.875.875 0 0 0 1.045-.225l5.175-6.048a.871.871 0 0 0-.421-1.1" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm4 8h-8v2h8v-2zm-1.292-4.707a1 1 0 00-1.415 0l-3.586 3.586a1 1 0 001.414 1.415l3.586-3.586a1 1 0 000-1.415z" />
            </svg>
          </a>
        </div>

        <p className="text-sm text-gray-400">© 2024 Arnav Sawant. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
