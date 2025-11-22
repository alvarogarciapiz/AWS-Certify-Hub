import React from 'react';
import '../assets/styles/Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-left">
                <div className="footer-brand">
                    AWS <span className="orange">P2</span>
                </div>
                <div className="footer-credit">
                    Developed by <a href="https://www.lvrpiz.com" target="_blank" rel="noopener noreferrer">@lvrpiz</a>
                </div>
            </div>
            <div className="footer-right">
                <a 
                    href="https://github.com/alvarogarciapiz/AWS-Certify-Hub" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="footer-link"
                >
                    Contribute on GitHub
                </a>
                <a 
                    href="https://github.com/alvarogarciapiz/AWS-Certify-Hub" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="github-star"
                >
                    <span className="star-icon">⭐</span>
                    Star the Repo
                </a>
            </div>
        </div>
    );
}

export default Footer;