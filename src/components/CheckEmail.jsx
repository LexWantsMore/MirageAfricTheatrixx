import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckEmail = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000); // Redirect after 5 seconds
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Check Your Email</h1>
        <p className="text-lg text-center text-gray-700 mb-8">Please check your email for the ticket information and directions to the show.</p>
        <img src="/src/assets/google.png" alt="Email Icon" className="w-24 mx-auto mb-8" />
        <button onClick={() => navigate('/')} className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition-colors duration-300">Go Back to Home</button>
      </div>
    </div>
  );
};

export default CheckEmail;
