import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const plans = [
  {
    name: "Regular Ticket",
    price: 100,
    features: [
      "Access to all areas",
      "Complimentary snacks",
      "Souvenir badge",
      "Discount on merchandise",
      "Complimentary snacks",
      "Souvenir badge",
      "Discount on merchandise",
    ],
  },
  {
    name: "VIP Ticket",
    price: 200,
    features: [
      "Priority access",
      "Complimentary snacks and drinks",
      "VIP seating",
      "Exclusive merchandise",
      "Complimentary snacks and drinks",
      "VIP seating",
      "Exclusive merchandise",
    ],
  },
];

const Tickets = () => {
  const [loadingVIP, setLoadingVIP] = useState(false);
  const [loadingRegular, setLoadingRegular] = useState(false);
  const navigate = useNavigate();

  const handleVIPClick = () => {
    setLoadingVIP(true);
    setTimeout(() => {
      setLoadingVIP(false);
      navigate("/vip-seat-booking");
    }, 2000); // Simulate a 2-second loading time
  };

  const handleRegularClick = (path) => {
    setLoadingRegular(true);
    setTimeout(() => {
      setLoadingRegular(false);
      navigate(path);
    }, 2000);
  };

  return (
    <section className="tickets reveal mt-20 relative z-20 w-full flex justify-center text-center">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8 flex flex-col items-center">
        <div className="relative max-w-xl mx-auto sm:text-center">
          <h2 className="tickets text-5xl text-gray-800 font-extrabold mx-auto sm:text-4xl">
            Tickets
          </h2>
          <div className="mt-3 max-w-xl mx-auto">
            <p className="tickets mt-6 mb-6 text-gray-800 text-1xl md:text-2xl">
              Get to pick a ticket of your choice and enjoy the show.
            </p>
          </div>
        </div>

        {/* Responsive grid layout for ticket plans */}
        <div className="tickets mt-16 space-y-8 grid gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-2 sm:space-y-0">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className="relative flex-1 flex items-stretch flex-col p-8 rounded-xl border-2 ticket-card sm:mt-0 w-full lg:w-96"
            >
              <div>
                <span className="text-green-600 font-medium">{plan.name}</span>
                <div className="mt-4 text-gray-800 text-3xl font-semibold">
                  Ksh.{plan.price}{" "}
                  <span className="text-xl text-gray-600 font-normal"></span>
                </div>
              </div>
              <ul className="py-8 space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Responsive button for ticket selection */}
              <div className="flex-1 flex items-end">
                {plan.name === "VIP Ticket" ? (
                  loadingVIP ? (
                    <div className="flex justify-center w-full">
                      <div className="loader border-t-transparent border-solid animate-spin rounded-full border-green-600 border-4 h-6 w-6"></div>
                    </div>
                  ) : (
                    <button
                      onClick={handleVIPClick}
                      className="px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-green-600 hover:bg-green-500 active:bg-green-700 sm:px-5 sm:py-4"
                    >
                      Buy {plan.name}
                    </button>
                  )
                ) : loadingRegular ? (
                  <div className="flex justify-center w-full">
                    <div className="loader border-t-transparent border-solid animate-spin rounded-full border-green-600 border-4 h-6 w-6"></div>
                  </div>
                ) : (
                  <button
                    onClick={() =>
                      handleRegularClick(
                        `/buy/${plan.name.toLowerCase().replace(" ", "-")}`
                      )
                    }
                    className="px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-green-600 hover:bg-green-500 active:bg-green-700 sm:px-5 sm:py-4"
                  >
                    Buy {plan.name}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tickets;
