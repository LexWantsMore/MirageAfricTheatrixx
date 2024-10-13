import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import axios from "axios";

// Import images
import mainImage from "../assets/IMG-20240613-WA0016.jpg";
import vipTicketImage from "../assets/IMG-20240613-WA0007.jpg";
import regularTicketImage from "../assets/IMG-20240613-WA0005.jpg";

const Checkout = () => {
  const { cartItems, total } = useContext(CartContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/");
    }
  }, [cartItems, navigate]);

  // Function to calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => {
      return (
        acc +
        item.ticketPrice *
          (item.type === "vip" ? item.seats.length : item.quantity)
      );
    }, 0);
  };

  // Purchase handler function
  const handlePurchase = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    const totalAmount = calculateTotal();

    // Send the purchase request to the backend
    try {
      const response = await axios.post("https://ticket-purchasing-backend.vercel.app/api/stkpush", {
        name,
        email,
        phone,
        amount: totalAmount,
        cartItems, // Send the entire cartItems array to handle in the backend
      });

      console.log(response.data);

      // Wait for payment confirmation
      const paymentStatus = await waitForPaymentConfirmation(
        response.data.transactionId
      );

      if (paymentStatus === "SUCCESS") {
        setMessage(
          "Payment Initiation was successful! Please check your email for ticket information."
        );
        setTimeout(() => {
          navigate("/check-email");
        }, 3000);
      } else if (paymentStatus === "CANCELED") {
        setMessage("Payment was canceled. Please try again.");
      } else {
        setMessage("Payment failed! Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Payment initiation failed! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Polling function for payment confirmation
  const waitForPaymentConfirmation = async (checkoutRequestID) => {
    let status = "pending";
    while (status === "pending") {
      try {
        const response = await axios.get(
          `https://ticket-purchasing-backend.vercel.app/api/payment-status/${checkoutRequestID}`
        );
        status = response.data.status;

        if (status === "SUCCESS") {
          return "SUCCESS";
        } else if (status === "CANCELED") {
          return "CANCELED";
        } else if (status === "FAILED") {
          return "FAILED";
        }
      } catch (error) {
        console.error("Error checking payment status:", error);
        break;
      }

      await new Promise((resolve) => setTimeout(resolve, 5000));
    }

    return "FAILED";
  };

  // Feature descriptions for ticket types
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
    <div className="relative mx-auto w-full bg-white">
      <div className="grid min-h-screen grid-cols-10">
        <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
          <div className="mx-auto w-full max-w-lg">
            <h1 className="relative text-2xl font-medium text-gray-700 sm:text-3xl">
              Secure Checkout
              <span className="mt-2 block h-1 w-10 bg-teal-600 sm:w-20"></span>
            </h1>
            <form
              onSubmit={handlePurchase}
              className="mt-10 flex flex-col space-y-4"
            >
              <div>
                <label
                  htmlFor="email"
                  className="text-xs font-semibold text-gray-500"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john.capler@fang.com"
                  className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="text-xs font-semibold text-gray-500"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="0712345678"
                  className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="text-xs font-semibold text-gray-500"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center rounded bg-teal-600 py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg"
                disabled={loading}
              >
                {loading ? "Processing..." : "Purchase"}
              </button>
              <button
                type="button"
                onClick={() => window.history.back()}
                className="w-full inline-flex items-center justify-center rounded bg-teal-600 py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg"
              >
                Back
              </button>
            </form>
            {message && (
              <p className="mt-4 text-center text-sm font-semibold text-red-500">
                {message}
              </p>
            )}
            <p className="mt-10 text-center text-sm font-semibold text-gray-500">
              By purchasing this you agree to the{" "}
              <a
                href="#"
                className="whitespace-nowrap text-teal-400 underline hover:text-teal-600"
              >
                Terms and Conditions
              </a>
            </p>
          </div>
        </div>
        <div className="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24">
          <h2 className="sr-only">Purchase summary</h2>
          <div>
            <img
              src={mainImage}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 h-full w-full bg-gradient-to-t bg-teal-900 bg-opacity-55 opacity-95 backdrop-blur-sm"></div>
          </div>
          <div className="relative">
            <ul className="space-y-5">
              {cartItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between text-white"
                >
                  <div className="inline-flex items-center space-x-2">
                    <img
                      src={
                        item.type === "vip"
                          ? vipTicketImage
                          : regularTicketImage
                      }
                      alt={`${item.type} ticket`}
                      className="h-10 w-10 rounded border-2 border-white"
                    />
                    <h3 className="text-sm font-bold">
                      {item.type === "vip" ? "VIP Ticket" : "Regular Ticket"}
                    </h3>
                  </div>
                  <p className="text-sm font-semibold">
                    {item.type === "vip"
                      ? `Ksh ${item.ticketPrice} x ${item.seats.length} seats`
                      : `Ksh ${item.ticketPrice} x ${item.quantity}`}
                  </p>
                </li>
              ))}
            </ul>
            <div className="my-4 h-0.5 w-full rounded bg-white opacity-30"></div>
            <div className="space-y-2">
              <p className="flex justify-between text-lg font-bold text-white">
                <span>Total amount:</span>
                <span>Ksh {calculateTotal()}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
