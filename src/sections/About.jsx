import React from "react";
import { useNavigate } from "react-router-dom";

// Import images
import aboutImg from "../assets/IMG-20240613-WA0006.jpg";

const About = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    document.querySelector(".contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="about mt-80px xl:mt-200px relative z-20 flex ">
      <div className="container mx-auto py-12 xl:px-0">
        <div className="flex flex-col xl:flex-row text-center xl:text-left justify-center items-center gap-12 xl:gap-12px">
          <div className="about__text flex-1 order-2 xl:order-none max-w-xl xl:max-w-410px flex flex-col items-center xl:items-start gap-8 ">
            <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl sm:mx-auto">
              We Bring Art To The Stage: Thespian Style
            </h2>
            <p className=" mb-2 text-gray-800 text-xl md:text-2xl">
              "I don't want realism. I want magic! Yes, yes, magic. I try to
              give that to people. I do misrepresent things. I don't tell the
              truth, I tell what ought to be truth. And if that is sinful, then
              let me be damned for it! — Don't turn the light on! I won't be
              looked at in this merciless glare! Now I see, I see what happened.
              You're a natural gentleman, one of the few that are left in the
              world. But you're not clean enough to bring in the house with my
              mother."
            </p>
            <div className="flex items-center justify-center xl:justify-center gap-4 ">
              <div className="bg-accent/15 w-93px h-93px rounded-full xl:justify-center flex justify-center items-center">
                {/* Uncomment and replace the below SVG with an actual image if needed */}
                {/* <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="45.000000pt"
                  height="50.000000pt"
                  viewBox="0 0 96.000000 96.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {" "}
                  <g
                    transform="translate(0.000000,96.000000) scale(0.100000,-0.100000)"
                    fill="#28b40cda"
                    stroke="none"
                  >
                    {" "}
                    <path d="M196 809 c-109 -86 -62 -253 139 -497 19 -24 130 -109 164 -126 134 -69 291 -59 322 21 19 52 -20 127 -92 175 -53 36 -71 35 -131 -3 -33 -22 -55 -29 -71 -25 -37 9 -113 82 -137 131 -22 45 -33 54 -45 35 -17 -27 80 -146 147 -181 50 -26 65 -24 118 11 25 16 53 30 62 30 23 0 95 -65 114 -103 33 -63 -15 -110 -111 -108 -141 1 -283 101 -412 288 -92 134 -116 236 -70 304 37 55 68 51 133 -14 68 -68 70 -93 14 -149 -45 -45 -50 -61 -18 -56 25 4 88 90 88 121 0 36 -48 104 -97 136 -55 36 -81 39 -117 10z" />{" "}
                  </g>{" "}
                </svg> */}
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className="flex items-center gap-x-2 sm:gap-x-4 py-2 px-3 sm:px-4 text-white font-medium bg-green-800 duration-150 hover:bg-green-700 active:bg-green-900 rounded-lg"
                onClick={scrollToContact}
              >
                Get Us Here
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
          <div className="about__img w-full max-w-md flex items-center justify-center">
            <img
              src={aboutImg}
              alt="Our History Image"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
