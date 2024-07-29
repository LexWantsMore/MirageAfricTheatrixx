// BuyTicket Component
import React, { useContext, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../context/CartContext";

const BuyTicket = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const {
    selectedSeats = [],
    total = 0,
    quantity: initialQuantity = 1,
  } = location.state || {};
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("MPESA");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(initialQuantity);
  const { addToCart } = useContext(CartContext);
  const ticketPrice = type === "vip" ? 200 : 100;

  const handlePurchase = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    addToCart({
      type,
      ticketPrice,
      quantity,
      seats: selectedSeats,
    });

    try {
      const response = await axios.post("http://localhost:5000/api/stkpush", {
        name,
        email,
        phone,
        amount: total,
      });

      console.log(response.data);

      const paymentStatus = await waitForPaymentConfirmation(response.data.transactionId);

      if (paymentStatus === "SUCCESS") {
        setMessage("Payment successful! Your ticket has been purchased. Please check your email for ticket information.");
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

  const waitForPaymentConfirmation = async (checkoutRequestID) => {
    let status = "pending";
    while (status === "pending") {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/payment-status/${checkoutRequestID}`
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

  const handleAddToBag = () => {
    if (!name || !email || !phone) {
      setMessage("Please fill in all the required fields.");
      return;
    }
    addToCart({ type, ticketPrice, quantity, seats: selectedSeats });
    navigate('/cart');
  };

  const Back = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white-100 p-6">
      <h1 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl leading-10 mb-2 text-center">
        Buy {type === "vip" ? "VIP" : "Regular"} Ticket
      </h1>
      <div className="flex flex-col md:flex-row font-sans">
        <div className="flex-none p-4 w-full md:w-56 relative mb-4 md:mb-0">
          <img
            src="\src\assets\IMG-20240613-WA0006.jpg"
            alt="speaker image"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg"
            loading="lazy"
          />
        </div>
        <form
          onSubmit={handlePurchase}
          className="flex-auto p-6 bg-white rounded-lg shadow-lg w-full max-w-md"
        >
          <div className="flex flex-wrap">
            <h1 className="flex-auto text-4xl text-gray-800">
              {type === "vip" ? "VIP" : "Regular"} Ticket
            </h1>
            <div className="w-full flex-none mt-2 order-1 text-3xl font-bold text-green-600">
              Ksh {ticketPrice * quantity}
            </div>
            <div className="text-sm font-medium text-slate-400">In stock</div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              className="w-full mt-2 p-2 border rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full mt-2 p-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="text"
              className="w-full mt-2 p-2 border rounded"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Payment Method</label>
            <select
              className="w-full mt-2 p-2 border rounded"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="MPESA">MPESA</option>
              {/* Add other payment methods if needed */}
            </select>
          </div>
          {type !== "vip" && (
            <div className="mb-4">
              <label className="block text-gray-700">Quantity</label>
              <div className="flex items-center mt-2">
                <button
                  type="button"
                  className="h-10 px-4 font-semibold rounded-full bg-green-600 text-white"
                  onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                >
                  -
                </button>
                <span className="mx-2 text-xl">{quantity}</span>
                <button
                  type="button"
                  className="h-10 px-4 font-semibold rounded-full bg-green-600 text-white"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
          )}
          <div className="flex space-x-4 mb-5 text-sm font-medium">
            <div className="flex-auto flex space-x-4">
              <button
                className="h-10 px-6 font-semibold rounded-full bg-green-600 text-white"
                type="submit"
                disabled={loading}
              >
                {loading ? "Processing..." : "Buy now"}
              </button>
              <button
                className="h-10 px-6 font-semibold rounded-full border  bg-green-600 text-white border-slate-200 "
                type="button"
                onClick={handleAddToBag}
              >
                Go to Cart
              </button>
              <button
                className="h-10 px-6 font-semibold rounded-full border bg-green-600 text-white border-slate-200 "
                type="button"
                onClick={Back}
              >
                Back
              </button>
            </div>
            <button
              className="flex-none flex items-center justify-center w-9 h-9 rounded-full text-green-600 bg-violet-50"
              type="button"
              aria-label="Like"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                />
              </svg>
            </button>
          </div>
          <p className="text-sm text-slate-500">
            Please arrive early to enjoy the show.
          </p>
          {message && <p className="mt-4 text-red-600">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default BuyTicket;
