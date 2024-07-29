import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // This makes sure the count up happens only once when the section comes into view
  });

  return (
    <section
      ref={ref}
      className="stats reveal mt-10 xl:mt-52 relative z-20 w-full max-w-4xl text-center mx-auto p-6"
    >
      <h2 className="text-5xl text-gray-800 font-extrabold mx-auto md:text-5xl mb-8">
        Our Impact
      </h2>
      <div className="grid grid-cols-1 gap-12 xl:grid-cols-3">
        <div className="stats__item flex flex-col items-center bg-white bg-opacity-70 p-6 rounded-xl shadow-md">
          <h3 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
            {inView && <CountUp end={100} duration={6} />}+
          </h3>
          <p className="text-body-sm text-[#000000]/70">Shows performed</p>
        </div>
        <div className="stats__item flex flex-col items-center bg-white bg-opacity-70 p-6 rounded-xl shadow-md">
          <h3 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
            {inView && <CountUp end={5000} duration={6} />}+
          </h3>
          <p className="text-body-sm text-[#000000]/70">Tickets sold</p>
        </div>
        <div className="stats__item flex flex-col items-center bg-white bg-opacity-70 p-6 rounded-xl shadow-md">
          <h3 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
            {inView && <CountUp end={300} duration={6} />}+
          </h3>
          <p className="text-body-sm text-[#000000]/70">Actors trained</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
