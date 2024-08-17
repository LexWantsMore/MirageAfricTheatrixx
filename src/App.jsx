import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import BuyTicket from './components/BuyTicket';
import CheckEmail from './components/CheckEmail';
import NewsArticle from './components/NewsArticle';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { CartProvider } from './context/CartContext';
import CharactersPage from './components/CharacterPage';
import VIPSeatBooking from './components/VIPSeatBooking';
import News from './sections/News';
import Loader from './components/Loader';

import "../src/css/Styles.css";

function Main() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate(path);
    }, 2000); // Adjust the delay time as needed
  };

  return (
    <>
      {loading && <Loader />}
      <Routes>
        <Route path="/" element={<LandingPage onNavigate={handleNavigation} />} />
        <Route path="/buy/:type" element={<BuyTicket onNavigate={handleNavigation} />} />
        <Route path="/check-email" element={<CheckEmail onNavigate={handleNavigation} />} />
        <Route path="/cart" element={<Cart onNavigate={handleNavigation} />} />
        <Route path="/characters" element={<CharactersPage onNavigate={handleNavigation} />} />
        <Route path="/checkout" element={<Checkout onNavigate={handleNavigation} />} />
        <Route path="/vip-seat-booking" element={<VIPSeatBooking onNavigate={handleNavigation} />} />
        <Route path="/news-article/:id" element={<NewsArticle onNavigate={handleNavigation} />} />
        <Route path="/news" element={<News onNavigate={handleNavigation} />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <Main />
      </Router>
    </CartProvider>
  );
}

export default App;
