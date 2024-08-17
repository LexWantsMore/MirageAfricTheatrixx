// src/components/Loader.jsx
import React from 'react';
import logo from "../assets/avatar-thinking-1-svgrepo-com.svg"; // Adjust path as necessary

const Loader = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white z-50">
      <div className="relative flex justify-center items-center">
        <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-green-500"></div>
        <img
          src={logo}
          alt="Loading"
          className="rounded-full h-28 w-28"
        />
      </div>
    </div>
  );
};

export default Loader;
