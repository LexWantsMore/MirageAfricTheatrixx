import React, { useContext, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import speakerImage from "../assets/IMG-20240613-WA0006.jpg";
import Loader from "./Loader"; // Import the Loader component

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
  const [loadingCart, setLoadingCart] = useState(false);
  const [quantity, setQuantity] = useState(initialQuantity);
  const { addToCart } = useContext(CartContext);

  const ticketPrice = type === "vip" ? 200 : 100; // Updated pricing
  const totalAmount =
    type === "vip" ? selectedSeats.length * 200 : quantity * 100; // Updated amount calculation

  const handlePurchase = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    // Add the ticket to the cart with seat information (if applicable)
    addToCart({
      type,
      ticketPrice,
      quantity,
      seats: selectedSeats, // Include seat information
    });

    try {
      const response = await axios.post("https://ticket-purchasing-backend.vercel.app/api/stkpush", {
        name,
        email,
        phone,
        amount: totalAmount, // Use the updated amount calculation
        ticketType: type, // Send the ticket type (VIP or regular)
        totalQuantity: quantity, // Send the total quantity of tickets
        seats: type === "vip" ? selectedSeats : [], // Send seat numbers only for VIP tickets
      });
    
      console.log(response.data);
    
      if (response.data.status) {
        // If the payment initiation is successful, wait for payment confirmation via the backend
        setMessage(
          "Payment initiation was successful! Please complete the payment via MPESA."
        );
    
        // Optionally, navigate to a waiting page
        setTimeout(() => {
          navigate("/check-email"); // Assuming the callback triggers an email with ticket details
        }, 10000);
      } else {
        setMessage("Payment initiation failed! Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Payment initiation failed! Please try again.");
    } finally {
      setLoading(false);
    }
  }; 
    

  const handleAddToBag = () => {
    if (!name || !email || !phone) {
      setMessage("Please fill in all the required fields.");
      return;
    }
    setLoadingCart(true);
    addToCart({
      type,
      ticketPrice,
      quantity,
      seats: selectedSeats, // Include seat information
    });
    setTimeout(() => {
      navigate("/cart");
      setLoadingCart(false);
    }, 1500); // Simulate a loading time before navigation
  };

  const Back = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white-100 p-6">
      {loading && <Loader />} {/* Show loader while loading */}
      <div className="flex flex-col md:flex-row font-sans">
        <div className="flex-none p-4 w-full md:w-56 relative mb-4 md:mb-0">
          <img
            src={speakerImage}
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
              Ksh {totalAmount} {/* Updated total amount display */}
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
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-5 text-sm font-medium">
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 flex-auto">
              <button
                className="h-10 px-6 font-semibold rounded-full bg-green-600 text-white"
                type="submit"
                disabled={loading}
              >
                {loading ? "Processing..." : "Buy now"}
              </button>
              <button
                className="h-10 px-6 font-semibold rounded-full border bg-green-600 text-white border-slate-200"
                type="button"
                onClick={handleAddToBag}
                disabled={loadingCart}
              >
                {loadingCart ? "Adding to Cart..." : "Go to Cart"}
              </button>
              <button
                className="h-10 px-6 font-semibold rounded-full border bg-green-600 text-white border-slate-200"
                type="button"
                onClick={Back}
              >
                Back
              </button>
            </div>
            
          </div>
          <p className="text-green-500 text-center">{message}</p>
        </form>
      </div>
    </div>
  );
};

export default BuyTicket;
