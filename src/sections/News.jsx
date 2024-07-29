import React from "react";
import { useNavigate } from 'react-router-dom';
import NewsImage1 from "../assets/photo_2024-07-08_15-48-16.jpg";
import AuthorImage from "../assets/photo_2024-07-08_15-48-04.jpg";
import NewsImage2 from "../assets/IMG-20240613-WA0011.jpg";
import NewsImage3 from "../assets/IMG-20240613-WA0028.jpg";

const News = () => {
  const navigate = useNavigate();

  const handleReadMoreClick = (id) => {
    navigate(`/news-article/${id}`);
  };

  return (
    <section className="news mt-[80px] xl:mt-[150px] relative z-20">
      <div className="container mx-auto px-0">
        <div className="max-w-[810px] mx-auto text-center mb-[52px]">
          <h2 className="news__title text-5xl text-gray-800 font-extrabold mx-auto md:text-5xl mb-12">
            Articles and News
          </h2>
          <p className="news__subtitle text-gray-800 font-extrabold mx-auto md:text-5xl mb-12">
            Stay updated with the latest news
          </p>
        </div>
        <div className="news__grid grid grid-cols-1 xl:grid-cols-3 gap-[27px]">
          <div className="news__item group">
            <div className="news__image-container">
              <img
                src={NewsImage1}
                alt="News 1"
              />
            </div>
            <div className="news__content">
              <span className="news__category">SCHOOLS</span>
              <h3 className="h3">Shared Coworking</h3>
              <p className="text-base">
                Use border utilities to quickly style the border and
                border-radius of an element. Great for images, buttons.
              </p>
              <div className="news__author-container">
                <img
                  src={AuthorImage}
                  alt="Author"
                  className="news__author-image"
                />
                <div className="news__author-details">
                  <p className="text-sm font-semibold">Brian Oduor</p>
                  <p className="text-xs">Posted on 28 February</p>
                </div>
              </div>
              <button
                className="news__button mt-4"
                onClick={() => handleReadMoreClick(1)}
              >
                Read More
              </button>
            </div>
          </div>
          <div className="news__item group">
            <div className="news__image-container">
              <img src={NewsImage2} alt="News 2" />
            </div>
            <div className="news__content">
              <span className="news__category">THEATRE</span>
              <h3 className="h3">Really Housekeeping</h3>
              <p className="text-base">
                Use border utilities to quickly style the border and
                border-radius of an element. Great for images, buttons.
              </p>
              <div className="news__author-container">
                <img
                  src={AuthorImage}
                  alt="Author"
                  className="news__author-image"
                />
                <div className="news__author-details">
                  <p className="text-sm font-semibold">Brian Oduor</p>
                  <p className="text-xs">Posted on 28 February</p>
                </div>
              </div>
              <button
                className="news__button mt-4"
                onClick={() => handleReadMoreClick(2)}
              >
                Read More
              </button>
            </div>
          </div>
          <div className="news__item group">
            <div className="news__image-container">
              <img src={NewsImage3} alt="News 3" />
            </div>
            <div className="news__content">
              <span className="news__category">HOUSE</span>
              <h3 className="h3">Shared Coworking</h3>
              <p className="text-base">
                Use border utilities to quickly style the border and
                border-radius of an element. Great for images, buttons.
              </p>
              <div className="news__author-container">
                <img
                  src={AuthorImage}
                  alt="Author"
                  className="news__author-image"
                />
                <div className="news__author-details">
                  <p className="text-sm font-semibold">Brian Oduor</p>
                  <p className="text-xs">Posted on 28 February</p>
                </div>
              </div>
              <button
                className="news__button mt-4"
                onClick={() => handleReadMoreClick(3)}
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
