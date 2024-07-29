import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

import speakerImage from "../assets/IMG-20240613-WA0006.jpg";
import speakerImage2 from "../assets/IMG-20240613-WA0007.jpg";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const handleContinueToPayment = () => {
    navigate("/checkout");
  };

  const handleBack = () => {
    window.history.back();
  };

  const handlePurchaseRegular = () => {
    navigate("/buy/regular");
  };

  const handlePurchaseVIP = () => {
    navigate("/vip-seat-booking");
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      if (item.type === "vip") {
        return total + item.ticketPrice * item.seats.length; // VIP pricing based on the number of seats
      }
      return total + item.ticketPrice * item.quantity;
    }, 0);
  };

  const calculateGrandTotal = () => {
    return calculateTotal(); // No delivery charge
  };

  const regularFeatures = [
    "Access to all areas",
    "Complimentary snacks",
    "Souvenir badge",
    "Discount on merchandise",
  ];

  const vipFeatures = [
    "Priority access",
    "Complimentary snacks and drinks",
    "VIP seating",
    "Exclusive merchandise",
  ];

  return (
    <div className="h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-md mx-auto px-6">
        <div className="relative rounded-lg shadow-lg bg-white">
          {cartItems.length === 0 ? (
            <div className="relative flex-1 flex items-stretch flex-col rounded-xl border-2 mt-6 sm:mt-0">
              <span className="w-44 absolute -top-10 left-0 right-0 mx-auto px-3 py-2 rounded-full border shadow-md bg-white text-center text-gray-700 text-xl font-semibold">
                Shopping Cart
              </span>
              <div className="p-8 space-y-4 border-b">
                <span className="text-green-600 font-medium">
                  Your cart is empty
                </span>
                <p className="text-gray-800 text-xl mb-4">
                  You have no items in your cart. Start shopping now!
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={handlePurchaseRegular}
                    className="px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-green-500 hover:bg-green-600 active:bg-green-700"
                  >
                    Purchase Regular
                  </button>
                  <button
                    onClick={handlePurchaseVIP}
                    className="px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-green-500 hover:bg-green-600 active:bg-green-700"
                  >
                    Purchase VIP
                  </button>
                </div>
              </div>
              <ul className="p-8 space-y-3">
                <li className="pb-2 text-gray-800 font-medium">
                  <p>Please choose which ticket you would love to purchase:</p>
                </li>
                <li className="flex items-center gap-5">
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
                  Varied selection of products
                </li>
                <li className="flex items-center gap-5">
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
                  Exclusive product
                </li>
                <li className="flex items-center gap-5">
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
                  The best entertainment
                </li>
                <li className="flex items-center gap-5">
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
                  24/7 customer support
                </li>
              </ul>
            </div>
          ) : (
            <div className="relative mt-16 max-h-96 overflow-y-auto rounded-lg bg-white p-6 shadow-md">
              <div className="mt-6 relative rounded-lg shadow-lg bg-white overflow-hidden">
                {cartItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row sm:justify-between p-4 border rounded-lg bg-white"
                  >
                    <img
                      src={
                        item.type === "vip"
                          ? speakerImage
                          : speakerImage2
                      } // Conditional image path
                      alt={`${item.type} Ticket`}
                      className="w-full h-auto rounded-lg sm:w-40 sm:h-40 object-cover"
                    />
                    <div className="sm:ml-4 flex flex-col justify-between sm:w-full">
                      <div className="mt-5 sm:mt-0">
                        <h2 className="text-lg font-bold text-gray-900">
                          {item.type === "vip" ? "VIP" : "Regular"} Ticket
                        </h2>
                        {item.type === "vip" ? (
                          <p className="mt-1 text-xs text-gray-700">
                            Seat Numbers: {item.seats.join(", ")}
                          </p>
                        ) : (
                          <p className="mt-1 text-xs text-gray-700">
                            Quantity: {item.quantity}
                          </p>
                        )}
                        <ul className="mt-2 text-xs text-gray-700">
                          {(item.type === "vip"
                            ? vipFeatures
                            : regularFeatures
                          ).map((feature, i) => (
                            <li key={i}>- {feature}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-4 flex justify-between items-center">
                        <div className="flex items-center border-gray-100">
                          {item.type === "regular" && (
                            <>
                              <span
                                onClick={() =>
                                  updateQuantity(
                                    index,
                                    item.quantity > 1 ? item.quantity - 1 : 1
                                  )
                                }
                                className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-green-500 hover:text-green-50"
                              >
                                -
                              </span>
                              <input
                                className="h-8 w-8 border bg-white text-center text-xs outline-none"
                                type="number"
                                value={item.quantity}
                                onChange={(e) =>
                                  updateQuantity(index, e.target.value)
                                }
                                min="1"
                              />
                              <span
                                onClick={() =>
                                  updateQuantity(index, item.quantity + 1)
                                }
                                className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-green-500 hover:text-green-50"
                              >
                                +
                              </span>
                            </>
                          )}
                        </div>
                        <div className="flex items-center space-x-4">
                          <p className="text-sm">{item.ticketPrice} Ksh</p>
                          <button 
                            onClick={() => removeFromCart(index)}
                            className="text-red-500"
                            aria-label="Remove item"
                          >
                            <svg
                              width="34"
                              height="34"
                              viewBox="0 0 34 34"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                className="fill-red-50 transition-all duration-500 group-hover:fill-red-400"
                                cx="17"
                                cy="17"
                                r="17"
                                fill=""
                              />
                              <path
                                className="stroke-red-500 transition-all duration-500 group-hover:stroke-white"
                                d="M14.1673 13.5997V12.5923C14.1673 11.8968 14.7311 11.333 15.4266 11.333H18.5747C19.2702 11.333 19.834 11.8968 19.834 12.5923V13.5997M19.834 13.5997C19.834 13.5997 14.6534 13.5997 11.334 13.5997C6.90804 13.5998 27.0933 13.5998 22.6673 13.5997C21.5608 13.5997 19.834 13.5997 19.834 13.5997ZM12.4673 13.5997H21.534V18.8886C21.534 20.6695 21.534 21.5599 20.9807 22.1131C20.4275 22.6664 19.5371 22.6664 17.7562 22.6664H16.2451C14.4642 22.6664 13.5738 22.6664 13.0206 22.1131C12.4673 21.5599 12.4673 20.6695 12.4673 18.8886V13.5997Z"
                                stroke="#EF4444"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="mt-6 rounded-lg border bg-white p-6 shadow-md w-full">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Total cost:</p>
              <p className="text-gray-700">{calculateTotal()} Ksh</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Grand Total</p>
              <div>
                <p className="mb-1 text-lg font-bold">
                  {calculateGrandTotal()} Ksh
                </p>
                {/* <p className="text-sm text-gray-700">including delivery</p> */}
              </div>
            </div>
            <button
              onClick={handleContinueToPayment}
              className="mt-6 w-full rounded-md bg-green-500 py-1.5 font-medium text-blue-50 hover:bg-green-600"
            >
              Continue to Checkout
            </button>
            <button
              onClick={handleBack}
              className="mt-4 w-full rounded-md bg-green-600 py-1.5 font-medium text-gray-50 hover:bg-green-500"
            >
              Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
