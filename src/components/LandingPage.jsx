import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import "../css/LandingPage.css";
import "../css/Styles.css";
import Navbar from "../components/Navbar"; // Adjust the path if necessary
import Hero from "../sections/Hero"; // Adjust the path if necessary
import Steps from "../sections/Steps"; // Adjust the path if necessary
import About from "../sections/About"; // Adjust the path if necessary
import Features from "../sections/Features"; // Adjust the path if necessary
import Stats from "../sections/Stats"; // Adjust the path if necessary
import Tickets from "../sections/Tickets"; // Adjust the path if necessary
import MeetTheCharacters from "../sections/MeetTheCharacters"; // Adjust the path if necessary
import News from "../sections/News"; // Adjust the path if necessary
import Contact from "../sections/Contact"; // Adjust the path if necessary
import Footer from "../sections/Footer"; // Adjust the path if necessary

const LandingPage = () => {
  useEffect(() => {
    // ScrollReveal setup
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "60px",
      duration: 3000,
      delay: 600,
    });

   
      window.scrollTo(0, 0);


    sr.reveal(".hero");
    sr.reveal(".hero__text", { delay: 700 });
    sr.reveal(".steps__step", { distance: "100px", interval: 100 });
    sr.reveal(".steps__title", { distance: "100px", interval: 100 });
    sr.reveal(".about__text", { origin: "left", delay: 700 });
    sr.reveal(".about__img", { origin: "right", delay: 800 });
    sr.reveal(".testimonial__bg", { delay: 800 });
    sr.reveal(".testimonial__title");
    sr.reveal(".testimonial__slider", { delay: 1000 });
    sr.reveal(".brands__img", { delay: 600, distance: "100px", interval: 100 });
    sr.reveal(".work__title");
    sr.reveal(".work__subtitle", { delay: 800 });
    sr.reveal(".work__grid", { delay: 1000 });
    sr.reveal(".stats");
    sr.reveal(".stats__item", { distance: "100px", interval: 100, delay: 800 });
    sr.reveal(".tickets", { distance: "100px", interval: 100, delay: 900 });
    sr.reveal(".meet-the-characters", { distance: "100px", interval: 1000 });
    sr.reveal(".news__title");
    sr.reveal(".news__subtitle", { delay: 800 });
    sr.reveal(".news__item", { distance: "100px", interval: 100, delay: 1000 });
    sr.reveal(".contact", { distance: "100px", interval: 100, delay: 1000 });
    sr.reveal(".contact__container");
    sr.reveal(".contact__text", { delay: 1000 });
    sr.reveal(".footer", { distance: "100px", interval: 100, delay: 1000 });
    sr.reveal(".footer__item", { distance: "100px", interval: 100, delay: 1020 });
    sr.reveal(".footer__copyright");

    // New ScrollReveal targets for the provided section
    sr.reveal(".features-container", { delay: 600 });
    sr.reveal(".features-text", { delay: 800 });
    sr.reveal(".features-img", { delay: 1000 });

    // Swiper setup
    Swiper.use([Navigation, Pagination, Autoplay]);
    const swiper = new Swiper(".swiper-container", {
      loop: true,
      autoplay: {
        delay: 5500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      slidesPerView: 1,
      spaceBetween: 30,
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        960: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 1,
        },
        1440: {
          slidesPerView: 1,
        },
      },
    });
  }, []);

  return (
    <div className="page-wrapper bg-scroll  sm:bg-fixed">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="steps">
        <Steps />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="stats">
        <Stats />
      </div>
      <div id="tickets">
        <Tickets />
      </div>
      <div id="meet-the-characters">
        <MeetTheCharacters />
      </div>
      <div id="news">
        <News />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
