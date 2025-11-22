/* HomeCards.jsx */
import React from "react";
import '../assets/styles/HomeCards.css';
import { Link } from 'react-router-dom';
import BCPR from '../assets/images/CloudPractitioner.png';
import ISAR from '../assets/images/SolutionsArchitect.png';

const HomeCards = () => {
  const cards = [
    { 
      title: 'AWS Cloud Practitioner', 
      description: 'Master the fundamentals of AWS cloud computing. Practice tests and error tracking available. Perfect for beginners starting their cloud journey.', 
      image: BCPR, 
      link: '/cloudpractitioner' 
    },
    { 
      title: 'AWS Solutions Architect', 
      description: 'Design and deploy scalable AWS solutions. Comprehensive practice questions and exam simulations to help you ace the certification.', 
      image: ISAR, 
      link: '/solutionsarchitect' 
    },
  ];

  return (
    <div className="home-cards">
      <div className="cards-header">
        <h2 className="cards-title">Choose Your Certification Path</h2>
        <p className="cards-subtitle">Select a certification to start your AWS learning journey</p>
      </div>
      <div className="cards-container">
        {cards.map((card, index) => (
          <div className="cardo" key={index}>
            <img src={card.image} alt={card.title} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
              <Link to={card.link} className="card-button">Start Learning</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCards;