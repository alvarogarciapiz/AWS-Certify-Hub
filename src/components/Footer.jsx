import React from 'react';
import '../assets/styles/Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-column">
                <a href="https://twitter.com/alvarogarciapiz">@alvarogarciapiz</a>
                {/* <iframe src="https://ghbtns.com/github-btn.html?user=alvarogarciapiz&repo=AWS-Certify-Hub&type=star&count=true&size=large" frameBorder="0" scrolling="0" width="170" height="30" title="GitHub"></iframe> */}
            </div>
            <div className="footer-column">
                {/* <a href="#">Link 4</a> */}
                <iframe src="https://ghbtns.com/github-btn.html?user=alvarogarciapiz&type=follow&count=true&size=large" frameBorder="0" scrolling="0" width="230" height="30" title="GitHub"></iframe>
            </div>
            <div className="footer-column">
                <a href="https://github.com/alvarogarciapiz/AWS-Certify-Hub">GitHub Project</a>
            </div>
        </div>
    );
}

export default Footer;