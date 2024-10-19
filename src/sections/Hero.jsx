import React, { useRef, useEffect } from "react";
import Typed from "typed.js";
import heroBg from "../assets/pixelcut-export.jpeg"; // Update the path as needed

const Hero = () => {
  const typedJSRef = useRef(null);

  useEffect(() => {  
    if (typedJSRef.current) {
      const typedJS = new Typed(typedJSRef.current, {
        strings: ["Act", "Dream", "Inspire"],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 200,
        startDelay: 500,
        loop: true,
      });

      return () => {
        typedJS.destroy();
      };
    }
  }, []);

  const scrollToTicket = () => {
    document.querySelector(".tickets").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="hero reveal bg-center lg:bg-cover bg-no-repeat bg-fixed xl:rounded-bl-290px"
      style={{
        backgroundImage: `url(${heroBg})`,
        height: '100vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        marginTop: '90px', /* Adjust based on your header height */
      }}
    >
      <div className="container mx-auto h-full flex items-center justify-center xl:justify-start">
        <div className="hero__text flex flex-col items-center text-center xl:text-left lg:items-start">
          <h1 className="text-4xl mb-8 font-extrabold md:text-5xl">
            Mirage Afric Theatrixx
            <br />
            <span ref={typedJSRef} className="typed-text"></span>
          </h1>

          <button className="cta-button mt-6 mb-8" onClick={scrollToTicket}>
            Get Your Tickets{" "}
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
    </section>
  );
};

export default Hero;
