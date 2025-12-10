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
              AWS Practice Portal — Prepare for your certification
            </p>
          </div>
          
          <div className="home__right">
            <p className="home__text">
              Prepare for your AWS certifications with our practice exams. Simple, direct, and effective.
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
                <h3 className="stat__number">1K+</h3>
                <p className="stat__label">Questions</p>
              </div>
              <div className="stat">
                <h3 className="stat__number">3</h3>
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