import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import BuyTicket from './components/BuyTicket';
import CheckEmail from './components/CheckEmail';
import NewsArticle from './components/NewsArticle';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { CartProvider } from './context/CartContext';
import CharactersPage from './components/CharacterPage';
import VIPSeatBooking from './components/VIPSeatBooking';
import News from './sections/News'; // Import the News component

import "../src/css/Styles.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/buy/:type" element={<BuyTicket />} />
          <Route path="/check-email" element={<CheckEmail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/vip-seat-booking" element={<VIPSeatBooking />} />
          <Route path="/news-article/:id" element={<NewsArticle />} /> {/* Update this route */}
          <Route path="/news" element={<News />} /> {/* Add this route */}
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
