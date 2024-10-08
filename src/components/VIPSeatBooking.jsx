import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from '../context/CartContext';
import Alert from "./Alert";
import "../css/style.css";
import axios from 'axios';

const VIPSeatBooking = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seatStatuses, setSeatStatuses] = useState({});
  const [alert, setAlert] = useState({ show: false, message: '', type: '' });
  const [loading, setLoading] = useState(true); // Loading state
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const ticketPrice = 200;

  useEffect(() => {
    const savedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
    if (savedSeats) {
      setSelectedSeats(savedSeats);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedSeats", JSON.stringify(selectedSeats));
  }, [selectedSeats]);

  useEffect(() => {
    async function fetchSeatStatuses() {
      setLoading(true); // Set loading to true while fetching data
      try {
        const response = await axios.get('/api/seats-status');
        console.log('Fetched seat statuses:', response.data); // Debug log
        setSeatStatuses(response.data);
      } catch (error) {
        console.error('Error fetching seat status:', error);
        setAlert({
          show: true,
          message: 'Failed to load seat statuses. Please try again later.',
          type: 'error'
        });
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    }

    fetchSeatStatuses();
  }, []);

  const handleSeatClick = (seatNumber) => {
    const status = seatStatuses[seatNumber];
    if (status === 'sold') return; // Prevent selection of sold seats

    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const handleAddToCart = () => {
    if (selectedSeats.length === 0) {
      setAlert({
        show: true,
        message: 'Please select at least one seat before adding to the cart.',
        type: 'error'
      });
      return;
    }
    addToCart({
      type: 'vip',
      seats: selectedSeats,
      ticketPrice,
    });
    navigate('/cart', { state: { selectedSeats, total: selectedSeats.length * ticketPrice } });
  };

  const handleProceedToCheckout = () => {
    if (selectedSeats.length === 0) {
      setAlert({
        show: true,
        message: 'Please select at least one seat before proceeding to checkout.',
        type: 'error'
      });
      return;
    }
    navigate('/buy/vip', { state: { selectedSeats, total: selectedSeats.length * ticketPrice } });
  };

  const handleBackClick = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const seats = Array(100).fill(null); // Create 100 empty seats
  const seatsPerRow = 10;

  return (
    <div className="vip-seat-booking items-center md:flex">
      {alert.show && <Alert type={alert.type} message={alert.message} onClose={() => setAlert({ ...alert, show: false })} />}

      <div className="ticket-container">
        <label>VIP Ticket: Ksh.{ticketPrice}</label>
      </div>

      <ul className="showcase">
        <li>
          <div className="seat"></div>
          <small>Available</small>
        </li>
        <li>
          <div className="seat selected"></div>
          <small>Selected</small>
        </li>
        <li>
          <div className="seat sold"></div>
          <small>Sold</small>
        </li>
      </ul>

      <div className="container">
        <div className="screen"></div>
        {loading ? (
          <div>Loading seat statuses...</div>
        ) : (
          Array.from({ length: seats.length / seatsPerRow }).map(
            (_, rowIndex) => (
              <div className="row" key={rowIndex}>
                {seats
                  .slice(rowIndex * seatsPerRow, (rowIndex + 1) * seatsPerRow)
                  .map((_, seatIndex) => {
                    const seatNumber = rowIndex * seatsPerRow + seatIndex + 1;
                    const status = seatStatuses[seatNumber];
                    const isSelected = selectedSeats.includes(seatNumber);
                    const seatClass = status === 'sold' ? 'seat sold' : isSelected ? 'seat selected' : 'seat';
                    return (
                      <div
                        key={seatIndex}
                        className={seatClass}
                        onClick={() => handleSeatClick(seatNumber)}
                        data-seat-number={seatNumber}
                      ></div>
                    );
                  })}
              </div>
            )
          )
        )}
      </div>

      <p className="text">
        You have selected <span id="count">{selectedSeats.length}</span> seat
        {selectedSeats.length !== 1 ? "s" : ""} for a price of Ksh.
        <span id="total">{selectedSeats.length * ticketPrice}</span>
        {selectedSeats.length > 0 && <span>, Seat Number: {selectedSeats.join(", ")}</span>}
      </p>

      <div className="flex justify-between gap-2">
        <button className="checkout-button" onClick={handleProceedToCheckout}>
          Purchase
        </button>
        <button className="checkout-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
        <button className="checkout-button" onClick={handleBackClick}>
          Back
        </button>
      </div>
    </div>
  );
};

export default VIPSeatBooking;
