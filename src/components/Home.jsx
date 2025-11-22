// Home.jsx
import React from "react";
import '../assets/styles/Home.css';
import { Link } from 'react-router-dom';
import HomeCards from "./HomeCards";

function Home() {
  return (
    <>
      <div className="home">
        <div className="home__content">
          <div className="home__left">
            <h1 className="home__title">
              AWS <span className="orange">P2</span>
            </h1>
            <p className="home__subtitle">
              AWS Practice Portal — Your certification success platform
            </p>
          </div>
          
          <div className="home__right">
            <p className="home__text">
              Master AWS certifications with our comprehensive practice portal. Get the knowledge and support you need to unlock AWS excellence and accelerate your cloud career.
            </p>
            <div className="home__actions">
              <Link to="/cloudpractitioner">
                <button className="home__button">Start Learning</button>
              </Link>
              <Link to="/resources">
                <button className="home__button-secondary">View Resources</button>
              </Link>
            </div>
            <div className="home__stats">
              <div className="stat">
                <h3 className="stat__number">500+</h3>
                <p className="stat__label">Questions</p>
              </div>
              <div className="stat">
                <h3 className="stat__number">2</h3>
                <p className="stat__label">Certifications</p>
              </div>
              <div className="stat">
                <h3 className="stat__number">Free</h3>
                <p className="stat__label">100% Open</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HomeCards />
    </>
  );
}

export default Home;