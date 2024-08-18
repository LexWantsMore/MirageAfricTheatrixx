import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../css/NewsArticle.css"; // Import your CSS file
import { FaArrowLeft } from "react-icons/fa"; // Import an arrow icon from react-icons
import Loader from '../components/Loader'; // Import your Loader component

import person1 from '../assets/photo_2024-07-08_15-48-16.jpg';
import author1 from '../assets/photo_2024-07-08_15-48-04.jpg';
import person2 from '../assets/photo_2024-07-08_15-48-16.jpg';
import person3 from '../assets/IMG-20240613-WA0028.jpg';

const NewsArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // Add loading state

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleBackClick = () => {
    setLoading(true); // Start loading
    setTimeout(() => {
      navigate(-1); 
    }, 2000); // Simulate a delay of 2 seconds
  };

  // Dummy data for demonstration
  const articles = {
    1: {
      // title: "Shared Coworking",
      author: "Brian Oduor",
      date: "28 February 2024",
      content: `
        As you know hiking can be a very fulfilling lorem ipsum dolor sit amet, animal sapert et ius, eu mei nominavi democritum. Tempor prompta mnesarchum eam te. Vivendum recteque ad quo, et vim quot scaevola hendrerit, sint option euripidis vel te. Impedit veritus qui eu, vel modo accusam at. Te dicit accusamus mea, alia omnium no est.
        
        Mea cu possit invidunt complectitur, sea omnis vivendum ne. Eros dictas assentior ne qui. At has aperiam reformidans. Rebum choro imperdiet ex mei. Ea vide elit percipit mel, id eam invidunt vituperatoribus. Munere temporibus consequuntur no sit.
        
        Justo utroque dissenti as est, possim dolorem assueverit eam ut. Te erat illud aperiri est. Cu duo sanctus scriptorem, nam te habeo fuisset quaestio. Eam et error simul. Ferri utamur instructior vim in, ei per mazim congue, nusquam vituperatoribus eos an. Ne mea salutatus vulputate. Tota tractatos 
      `,
      image: person1,
      authorImage: author1,
      blockquote: "“Acting is LIfe!” — Gideon"
    },
    // other articles...
    2: {
      // title: 'Really Housekeeping',
      author: 'Brian Oduor',
      date: '9 June 2024',
      content: `
        As you know hiking can be a very fulfilling lorem ipsum dolor sit amet, animal sapert et ius, eu mei nominavi democritum. Tempor prompta mnesarchum eam te. Vivendum recteque ad quo, et vim quot scaevola hendrerit, sint option euripidis vel te. Impedit veritus qui eu, vel modo accusam at. Te dicit accusamus mea, alia omnium no est.
        
        Mea cu possit invidunt complectitur, sea omnis vivendum ne. Eros dictas assentior ne qui. At has aperiam reformidans. Rebum choro imperdiet ex mei. Ea vide elit percipit mel, id eam invidunt vituperatoribus. Munere temporibus consequuntur no sit.
        
        Justo utroque dissenti as est, possim dolorem assueverit eam ut. Te erat illud aperiri est. Cu duo sanctus scriptorem, nam te habeo fuisset quaestio. Eam et error simul. Ferri utamur instructior vim in, ei per mazim congue, nusquam vituperatoribus eos an. Ne mea salutatus vulputate. Tota tractatos 
      `,
      image: person2,
      authorImage: author1,
      blockquote: "“Housekeeping is key!” — John Doe"
    },
    3: {
      // title: 'Shared Coworking in House',
      author: 'Brian Oduor',
      date: '13 August 2024',
      content: `
        As you know hiking can be a very fulfilling lorem ipsum dolor sit amet, animal sapert et ius, eu mei nominavi democritum. Tempor prompta mnesarchum eam te. Vivendum recteque ad quo, et vim quot scaevola hendrerit, sint option euripidis vel te. Impedit veritus qui eu, vel modo accusam at. Te dicit accusamus mea, alia omnium no est.
        
        Mea cu possit invidunt complectitur, sea omnis vivendum ne. Eros dictas assentior ne qui. At has aperiam reformidans. Rebum choro imperdiet ex mei. Ea vide elit percipit mel, id eam invidunt vituperatoribus. Munere temporibus consequuntur no sit.
        
        Justo utroque dissenti as est, possim dolorem assueverit eam ut. Te erat illud aperiri est. Cu duo sanctus scriptorem, nam te habeo fuisset quaestio. Eam et error simul. Ferri utamur instructior vim in, ei per mazim congue, nusquam vituperatoribus eos an. Ne mea salutatus vulputate. Tota tractatos 
      `,
      image: person3,
      authorImage: author1,
      blockquote: "“Coworking is the future!” — Jane Smith"
    },
  };

  const article = articles[id];

  if (!article) {
    return <div>Article not found</div>;
  }
  if (loading) {
    return <Loader />; // Show loader if loading
  }

  return (
    <div className="flex flex-col items-center max-w-4xl mx-auto p-4">
      <div className="author-container">
        <img src={article.authorImage} alt="Author" className="author-image" />
        <p className="author-name">{article.author}</p>
        <p className="author-date">{article.date}</p>
      </div>
      <h1 className="news-title">{article.title}</h1>
      <div className="full-width-container p-left">
        <button className="back-button" onClick={handleBackClick}>
          <FaArrowLeft className="back-icon" />
          Back
        </button>
      </div>

      <blockquote className="news-article-quote">
        {article.blockquote}
      </blockquote>
      
      <img
        src={article.image}
        alt={article.title}
        className="image-container w-full h-auto mb-4 rounded-lg"
      />
      <div className="news-article-content">
        <p>{article.content}</p>
      </div>
    </div>
  );
};

export default NewsArticle;
