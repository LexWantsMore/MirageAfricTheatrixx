import React from "react";
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
  const navigate = useNavigate();

  const handleVIPClick = () => {
    navigate("/vip-seat-booking");
  };

  return (
    <section className="tickets reveal mt-20  relative z-20 w-full flex justify-center text-center">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8 flex flex-col items-center">
        <div className="relative max-w-xl mx-auto sm:text-center">
          <h2 className="tickets text-5xl text-gray-800 font-extrabold mx-auto md:text-5xl">
            Tickets
          </h2>
          <div className="mt-3 max-w-xl mx-auto">
            <p className="tickets mt-6 mb-6 text-gray-800 text-1xl md:text-2xl">
              Get to pick a ticket of your choice and enjoy the show.
            </p>
          </div>
        </div>
        <div className="tickets mt-16 space-y-6 grid gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-2 justify-center">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className="relative flex-1 flex items-stretch flex-col p-8 rounded-xl border-2 ticket-card w-96"
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
              <div className="flex-1 flex items-end">
                {plan.name === "VIP Ticket" ? (
                  <button
                    onClick={handleVIPClick}
                    className="px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-green-600 hover:bg-green-500 active:bg-green-700"
                  >
                    Buy {plan.name}
                  </button>
                ) : (
                  <Link
                    to={`/buy/${plan.name.toLowerCase().replace(" ", "-")}`}
                    className="px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-green-600 hover:bg-green-500 active:bg-green-700"
                  >
                    Buy {plan.name}
                  </Link>
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
