import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope, faCode} from '@fortawesome/free-solid-svg-icons'

export const NavBar = () => {
    return (
        <div className="navbar">
            <div id="nav2">
                <p><a href="/"><FontAwesomeIcon icon={faHome} color="#4d4d4e"/></a></p>
                <p><a href="/about"><FontAwesomeIcon icon={faUser} color="#4d4d4e"/></a></p>
                <p><a href="/projects"><FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/></a></p>
                <p><a href="/techblog"><FontAwesomeIcon icon={faCode} color="#4d4d4e"/></a></p>
            </div>
            <div id="socials">
                <p><a href="https://linkedin.com/in/finn-cummins" target="_blank" ><FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/></a></p>
                <p><a href="https://github.com/finncummins" target="_blank"><FontAwesomeIcon icon={faGithub} color="#4d4d4e"/></a></p>
            </div>
        </div>
    );
}