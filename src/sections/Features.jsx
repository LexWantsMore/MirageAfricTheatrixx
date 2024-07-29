import React, { useState, useEffect, useRef } from "react";
import FeatureImage from "../assets/IMG-20240613-WA0006.jpg";
import FeatureVideo from "../assets/DSC_9112.MOV (2).mp4";

const Features = () => {
  const features = [
    {
      name: "Trusted",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Experienced",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M1 4.75C1 3.784 1.784 3 2.75 3h14.5c.966 0 1.75.784 1.75 1.75v10.515a1.75 1.75 0 01-1.75 1.75h-1.5c-.062 0-.123-.004-.183-.013L10 18.725 4.433 16.002a1.735 1.735 0 01-.183.013h-1.5A1.75 1.75 0 011 15.265V4.75zm9 2a.75.75 0 00-.75.75v2.904l-1.035-1.035a.75.75 0 10-1.06 1.06l2.25 2.25a.75.75 0 001.28-.53V7.5A.75.75 0 0010 6.75z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Reliable",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M9.401 1.82c.347-.434.99-.434 1.336 0l1.832 4.401 4.752.382c.833.067 1.171 1.106.536 1.65l-3.62 3.102 1.106 4.637c.19.797-.675 1.42-1.404 1.02L10 15.307l-4.04 2.705c-.73.4-1.594-.223-1.404-1.02l1.106-4.637-3.62-3.102c-.635-.544-.297-1.584.536-1.65l4.752-.382 1.831-4.401z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  const [isVideoPoppedUp, setVideoPopUp] = useState(false);

  return (
    <section className="features-container">
      <div className="max-w-screen-xl mx-auto px-4 py-28 gap-6 text-gray-600 md:px-8 xl:flex items-center">
        <div className="space-y-5 max-w-2xl mx-auto text-center xl:text-left features-text justify-items-center">
          <div className="flex flex-wrap items-center justify-center gap-6 xl:justify-between">
            {/* Map over features array to render items */}
            {features.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-x-2 text-gray-500 text-sm "
              >
                {item.icon}
                {item.name}
              </div>
            ))}
          </div>
          <div className="container mx-auto text-center py-12">
            <h1 className="features-text text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
              Watch talented actors develop cutting edge skills
            </h1>
            <p className="mt-6 mb-6 text-gray-800 text-1xl md:text-2xl">
              Sed ut perspiciatis unde omnis iste natus voluptatem accusantium
              doloremque laudantium, totam rem aperiam, eaque ipsa quae.
            </p>
          </div>

          <div className="flex items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0 xl:justify-center">
  <a
    href="javascript:void(0)"
    className="flex items-center gap-x-2 sm:gap-x-4 py-2 px-3 sm:px-4 text-white font-medium bg-green-800 duration-150 hover:bg-green-700 active:bg-green-900 rounded-lg"
  >
    Browse Photos
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
  </a>
</div>

        </div>
        <div className="flex-1 max-w-xl mx-auto mt-14 xl:mt-0 features-img">
          <div className="relative">
            <img
              src={FeatureImage}
              className="rounded-lg"
              alt=""
            />
            <button
              className=" justify-center  absolute w-16 h-16 rounded-full inset-0 m-auto duration-150 bg-green-500 hover:bg-green-600 ring-offset-2 focus:ring text-white"
              onClick={() => setVideoPopUp(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-6 h-6 m-auto"
              >
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isVideoPoppedUp && (
        <div className="fixed inset-0 w-full h-full flex items-center justify-center">
          <div
            className="absolute inset-0 w-full h-full bg-black/50"
            onClick={() => setVideoPopUp(false)}
          ></div>
          <div className="px-4 relative">
            <button
              className="w-12 h-12 mb-5 rounded-full duration-150 bg-gray-800 hover:bg-gray-700 text-white"
              onClick={() => setVideoPopUp(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 m-auto"
              >
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </button>
            <video
              className="rounded-lg w-full max-w-2xl"
              controls
              autoPlay={true}
            >
              <source src={FeatureVideo} 
              type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default Features;
