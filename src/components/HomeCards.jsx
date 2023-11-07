/* HomeCards.jsx */
import React from "react";
import '../assets/styles/HomeCards.css';
import { Link } from 'react-router-dom';
import BCPR from '../assets/images/CloudPractitioner.png';
import ISAR from '../assets/images/SolutionsArchitect.png';

const HomeCards = () => {
  const cards = [
    { title: 'AWS Cloud Practitioner', description: 'Tests and error tests now available. Exam simulation coming soon.', image: BCPR },
    { title: 'AWS Solutions Architect', description: 'Coming soon', image: ISAR },
  ];

  return (
    <div className="home-cards">
      {cards.map((card, index) => (
        <div className="cardo" key={index}>
          <img src={card.image} alt="card" className="card-image" /> {/* Cambia esto */}
          <div className="card-content">
            <h2 className="card-title">{card.title}</h2>
            <p className="card-description">{card.description}</p>
            <button className="card-button">Start learning</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeCards;