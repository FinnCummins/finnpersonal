import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faSatelliteDish, faCode} from '@fortawesome/free-solid-svg-icons'
import "../assets/index.scss"

export const NavBar = () => {
    return (
        <div className="navbar">
            <a href="/">
                <img 
                    className="main-logo" 
                    src={"favicon.ico"}
                />
            </a>
            <div id="nav2">
                <p><a href="/" className="home-link"><FontAwesomeIcon icon={faHome} color="#4d4d4e"/></a></p>
                <p><a href="/about" className="about-link"><FontAwesomeIcon icon={faUser} color="#4d4d4e"/></a></p>
                <p><a href="/projects" className="projects-link"><FontAwesomeIcon icon={faCode} color="#4d4d4e"/></a></p>
                <p><a href="/techblog" className="techblog-link"><FontAwesomeIcon icon={faSatelliteDish} color="#4d4d4e"/></a></p>
            </div>
            <div id="socials">
                <p><a href="https://linkedin.com/in/finn-cummins" target="_blank" className="linkedin-link"><FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/></a></p>
                <p><a href="https://github.com/finncummins" target="_blank" className="github-link"><FontAwesomeIcon icon={faGithub} color="#4d4d4e"/></a></p>
            </div>
        </div>
    );
}