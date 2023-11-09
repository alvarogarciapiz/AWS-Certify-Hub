// Home.jsx
import React from "react";
import '../assets/styles/Home.css';
import { Link } from 'react-router-dom';
import HomeCards from "./HomeCards";

function Home() {
  return (
    <>
    <div className="home">
      <div className="home__left">
        <h1 className="home__title">AWS<br />Certify<br /><span className="orange">Hub</span></h1>
      </div>
      <div className="home__right">
        <p className="home__text">Your all-in-one resource for AWS certification success, providing the knowledge and support you need to unlock AWS excellence and making AWS certifications accessible to all</p>
        <Link to="/cloudpractitioner">
          <button className="home__button">Start your career</button>
        </Link>
      </div>
      
    </div>
    <HomeCards />
    </>
  );
}

export default Home;