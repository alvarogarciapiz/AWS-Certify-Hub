import React from "react";
import "../../assets/styles/Navbar.css";
import awsImage from '../../assets/images/AWSHUB_navbar.png';
import navbarItems from "./NavbarItems";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = ({ toggle }) => {
  return (
    <nav>
      <Link to="/" className="link">
      <img
        src={awsImage}
        alt="AWS Certify Hub"
        width="40"
        height="40"
      />
      {/* Título */}
      </Link>

      <div className="menu-items">
        {navbarItems.map((item, index) => (
          <Link className="link" to={item.link} key={index}>
            {item.title}
          </Link>
        ))}
      </div>

      <div className="icons">
      <a href="https://github.com/alvarogarciapiz" target="_blank" rel="noopener">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="github-icon icon-tabler icon-tabler-brand-github"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
        </svg>
        </a>
        <div className="mobile-menu-icon">
          <FaBars onClick={toggle} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
