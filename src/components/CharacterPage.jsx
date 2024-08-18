import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader'; // Import your Loader component

// Import images
import back1 from '../assets/back1.jpg';
import back2 from '../assets/back2.jpg';
import back3 from '../assets/back3.jpg';
import back4 from '../assets/back4.jpg';
import img1 from '../assets/IMG-20240613-WA0012.jpg';
import back6 from '../assets/back6.jpg';
import img2 from '../assets/IMG-20240613-WA0021.jpg';
import img3 from '../assets/IMG-20240613-WA0012.jpg';
import img4 from '../assets/IMG-20240613-WA0009.jpg';

const characters = [
  {
    name: 'John Doe',
    role: 'Protagonist',
    image: back1,
    bio: 'John is the hero of our story, facing challenges with bravery and wit.',
  },
  {
    name: 'John Doe',
    role: 'Protagonist',
    image: back2,
    bio: 'John is the hero of our story, facing challenges with bravery and wit.',
  },
  {
    name: 'John Doe',
    role: 'Protagonist',
    image: back3,
    bio: 'John is the hero of our story, facing challenges with bravery and wit.',
  },
  {
    name: 'John Doe',
    role: 'Protagonist',
    image: back4,
    bio: 'John is the hero of our story, facing challenges with bravery and wit.',
  },
  {
    name: 'John Doe',
    role: 'Protagonist',
    image: img1,
    bio: 'John is the hero of our story, facing challenges with bravery and wit.',
  },
  {
    name: 'John Doe',
    role: 'Protagonist',
    image: back6,
    bio: 'John is the hero of our story, facing challenges with bravery and wit.',
  },
  {
    name: 'John Doe',
    role: 'Protagonist',
    image: img2,
    bio: 'John is the hero of our story, facing challenges with bravery and wit.',
  },
  {
    name: 'John Doe',
    role: 'Protagonist',
    image: img3,
    bio: 'John is the hero of our story, facing challenges with bravery and wit.',
  },
  {
    name: 'Jane Smith',
    role: 'Antagonist',
    image: img4,
    bio: 'Jane is the main antagonist, bringing conflict and depth to the plot.',
  },
  // Other characters...
];

const transforms = [
  // 'scale-110 -rotate-6',
  // 'scale-75 rotate-6 translate-x-2 translate-y-15',
  // 'scale-150 translate-y-11',
  // 'translate-y-24',
  // 'translate-x-20 translate-y-4',
];

const filters = [
  'sepia',
  'saturate-200',
  'grayscale',
];

const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

const CharactersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []); 

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // Add loading state

  const handleBack = () => {
    setLoading(true); // Start loading
    setTimeout(() => {
      navigate(-1); 
    }, 2000); // Simulate a delay of 2 seconds
  };

  if (loading) {
    return <Loader />; // Show loader if loading
  }
  

  return (
    <div className="min-h-screen bg-gray-100 py-10 relative">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Meet the Characters</h1>
        
        <section className="bg-white p-8 rounded-lg shadow-lg mb-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Plot Summary</h2>
          <p className="text-lg text-gray-700">
            In a world filled with intrigue and adventure, our protagonist John faces formidable challenges. Alongside friends and foes, John embarks on a journey that will test his courage, intelligence, and resolve. Meanwhile, Jane, the antagonist, introduces conflict and complexity, making the story a riveting tale of good versus evil.
          </p>
        </section>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {characters.map((character, index) => {
            const transform = getRandomElement(transforms);
            const filter = getRandomElement(filters);
            
            return (
              <div 
                key={index} 
                className={`bg-white p-6 rounded-lg shadow-lg transform transition duration-300 ${transform} hover:scale-105`}
              >
                <div className={`filter transition duration-300 ${filter} hover:filter-none`}>
                  <div className="flex items-center justify-center h-64 overflow-hidden rounded-lg mb-4">
                    <img src={character.image} alt={character.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">{character.name}</h3>
                  <h4 className="text-xl text-gray-600 mb-2">{character.role}</h4>
                  <p className="text-gray-700">{character.bio}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-10">
        <button
          onClick={handleBack} 
          className="flex items-center gap-x-2 sm:gap-x-4 py-2 px-3 sm:px-4 text-white font-medium bg-green-800 duration-150 hover:bg-green-700 active:bg-green-900 rounded-lg"
        >
          Back
          
        </button>
        </div>

        {/* <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={handleBack} 
            className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
          >
            Back
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default CharactersPage;
