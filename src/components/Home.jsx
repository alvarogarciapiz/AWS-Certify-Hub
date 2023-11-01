import React from "react";
import '../assets/styles/Home.css';

function Home() {
  return (
    <div className="home">
      <div className="home__left">
      <h1 className="home__title">AWS<br/>Certify<br/><span className="orange">Hub</span></h1>
      </div>
      <div className="home__right">
        <p className="home__text">Your all-in-one resource for AWS certification success, providing the knowledge and support you need to unlock AWS excellence and making AWS certifications accessible to all</p>
        <button className="home__button">Start Learning</button>
      </div>
    </div>
  );
}

export default Home;