import React from 'react';
import { useNavigate } from 'react-router-dom';

const characters = [
  {
    name: 'John Doe',
    role: 'Protagonist',
    image: 'src/assets/back1.jpg',
    bio: 'John is the hero of our story, facing challenges with bravery and wit.',
  },
  {
    name: 'John Doe',
    role: 'Protagonist',
    image: 'src/assets/back2.jpg',
    bio: 'John is the hero of our story, facing challenges with bravery and wit.',
  },
  {
    name: 'John Doe',
    role: 'Protagonist',
    image: 'src/assets/back3.jpg',
    bio: 'John is the hero of our story, facing challenges with bravery and wit.',
  },
  {
    name: 'John Doe',
    role: 'Protagonist',
    image: 'src/assets/back4.jpg',
    bio: 'John is the hero of our story, facing challenges with bravery and wit.',
  },
  {
    name: 'John Doe',
    role: 'Protagonist',
    image: 'src/assets/IMG-20240613-WA0012.jpg',
    bio: 'John is the hero of our story, facing challenges with bravery and wit.',
  },
  {
    name: 'John Doe',
    role: 'Protagonist',
    image: 'src/assets/back6.jpg',
    bio: 'John is the hero of our story, facing challenges with bravery and wit.',
  },
  {
    name: 'John Doe',
    role: 'Protagonist',
    image: 'src/assets/IMG-20240613-WA0021.jpg',
    bio: 'John is the hero of our story, facing challenges with bravery and wit.',
  },
  {
    name: 'John Doe',
    role: 'Protagonist',
    image: 'src/assets/IMG-20240613-WA0012.jpg',
    bio: 'John is the hero of our story, facing challenges with bravery and wit.',
  },
  {
    name: 'Jane Smith',
    role: 'Antagonist',
    image: 'src/assets/IMG-20240613-WA0009.jpg',
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
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
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

        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={handleBack} 
            className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharactersPage;
