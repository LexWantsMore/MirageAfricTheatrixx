import React, { useState }  from 'react';
import { useNavigate } from 'react-router-dom';
import EmblaCarousel from '../components/EmblaCarousel';
import Loader from '../components/Loader'; // Import your Loader component

// Import images
import img1 from '../assets/IMG-20240613-WA0004.jpg';
import img2 from '../assets/IMG-20240613-WA0010.jpg';
import img3 from '../assets/IMG-20240613-WA0005.jpg';
import img4 from '../assets/IMG-20240613-WA0044.jpg';

const MeetTheCharacters = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // Add loading state

  const characters = [
    {
      imageSrc: img1,
      quote: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero cum incidunt quis similique veniam minus amet eaque illum minima eos.",
      name: "John Doe",
      title: "Main Character",
    },
    {
      imageSrc: img2,
      quote: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero cum incidunt quis similique veniam minus amet eaque illum minima eos.",
      name: "John Doe",
      title: "Main Character",
    },
    {
      imageSrc: img3,
      quote: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero cum incidunt quis similique veniam minus amet eaque illum minima eos.",
      name: "John Doe",
      title: "Supporting Character",
    },
    {
      imageSrc: img4,
      quote: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero cum incidunt quis similique veniam minus amet eaque illum minima eos.",
      name: "John Doe",
      title: "Supporting Character",
    },
    // Add more characters as needed
  ];

  const handleViewAllCharacters = () => {
    setLoading(true); // Start loading
    setTimeout(() => {
      navigate('/characters'); // Navigate after loading
    }, 2000); // Simulate a delay of 2 seconds
  };

  if (loading) {
    return <Loader />; // Show loader if loading
  }

  const slides = characters.map((character, index) => (
    <div key={index} className="meet-the-characters-slide flex flex-col items-center px-6 mx-auto max-w-7xl xl:flex-row xl:items-stretch gap-x-8 gap-y-10 sm:gap-y-8 lg:px-8">
      <div className="w-full max-w-2xl mx-auto -mt-8 xl:-mb-8 xl:w-96 xl:flex-none rounded-lg">
        <div className="relative aspect-w-1 aspect-h-1 xl:aspect-w-1 xl:aspect-h-1 h-full w-full object-cover rounded-lg shadow-xl md:-mx-8 xl:mx-0">
          <img
            src={character.imageSrc}
            alt={character.name}
            className="absolute inset-0 object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>
      <div className="w-full max-w-2xl xl:max-h-none xl:flex-auto xl:px-16 xl:py-24">
        <div className="relative pt-6 text-gray-900 isolate sm:pt-12 sm:text-2xl sm:leading-9">
          <svg
            viewBox="0 0 162 128"
            fill="none"
            aria-hidden="true"
            className="absolute top-0 left-0 h-32 -z-10 stroke-gray-300"
          >
            <path
              id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
              d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
            />
            <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x={86} />
          </svg>
          <blockquote className="text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:left-9">
            <p>{character.quote}</p>
          </blockquote>
          <figcaption className="mt-8 text-base">
            <div className="font-semibold text-gray-900">{character.name}</div>
            <div className="mt-1 text-gray-500">{character.title}</div>
          </figcaption>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="meet-the-characters mt-10 pt-24 pb-16 sm:pb-24 sm:pt-32 xl:pb-32 bg-gray-20">
      <div className="mx-auto text-center ">
      <h2 className="meet-the-characters text-5xl text-gray-800 font-extrabold mx-auto md:text-5xl mb-12">
        Meet The Characters
      </h2>
      <p className="news__subtitle text-gray-800 font-extrabold mx-auto md:text-5xl mb-12">
            Catch up with our actors.
          </p>
      <EmblaCarousel slides={slides} options={{ loop: true, autoplay: true }} />
      <div className="flex justify-center mt-10">
        <button
          onClick={handleViewAllCharacters}
          className="flex items-center gap-x-2 sm:gap-x-4 py-2 px-3 sm:px-4 text-white font-medium bg-green-800 duration-150 hover:bg-green-700 active:bg-green-900 rounded-lg"
        >
          View All Characters
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      </div>
    </div>
  );
};

export default MeetTheCharacters;
