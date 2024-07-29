import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router for navigation

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleNavToggle = () => setIsMenuOpen(!isMenuOpen);

  const navigation = [
    { title: "Home", path: "#home" },
    { title: "About", path: "#about" },
    { title: "Buy Tickets", path: "#tickets" },
    { title: "Meet the Characters", path: "#meet-the-characters" },
    { title: "Contacts", path: "#contact" },
  ];
  

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <header className="sticky top-0 h-20 w-full p-4 flex justify-between items-center shadow-xl z-30 bg-white">
      <div className="container mx-auto flex justify-between h-full items-center">
        <a href="#">
          <img
            src="src/assets/Xqun4E01.svg"
            alt="Theatre Group Logo"
            className="h-20 w-20 object-cover"
          />
        </a>
        {!isMenuOpen && (
          <nav className="flex-1 hidden md:flex justify-between items-center">
            {navigation.map((item, idx) => (
              <a key={idx} href={item.path} className="text-gray-600 hover:text-gray-900">
                {item.title}
              </a>
            ))}
          </nav>
        )}
        <div className="flex items-center space-x-4">
          <button
            className="outline-none text-gray-400 md:hidden"
            onClick={handleNavToggle}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
          <button onClick={handleCartClick} className="outline-none">
            <img
              src="src/assets/cart.svg"
              alt="Cart Icon"
              className="h-6 w-6 object-cover"
            />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 flex items-start justify-end bg-opacity-50 z-50 pt-20 pr-4">
          <nav className="bg-white p-8 shadow-lg rounded-lg w-80 sm:text-center flex flex-col items-center space-y-5">
            <div className="flex justify-between items-center w-full mb-4">
              <a href="#" className="flex items-center">
                <img
                  src="src/assets/2.1.png"
                  alt="Theatre Group Logo"
                  className="h-20 w-30 rounded-full object-cover"
                />
                <span className="ml-2 text-xl font-bold text-gray-800">Mirage Afric</span>
              </a>
              <button onClick={handleNavToggle} className="text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col items-center space-y-5 w-full">
              {navigation.map((item, idx) => (
                <a key={idx} href={item.path} className="text-lg text-gray-800 hover:text-green-600">
                  {item.title}
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
