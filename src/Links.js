// src/components/Links.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Links.css'; // Add styles for the links

const Links = () => {
    return (
        <div className="links">
            <a href={`${process.env.PUBLIC_URL}/resume.pdf`}  download className="button download-resume">
                <FontAwesomeIcon icon={faFileDownload} />
                <span>Download Resume</span>
            </a>
            <a href="https://linkedin.com/in/-skg" target="_blank" rel="noopener noreferrer" className="button linkedin">
                <FontAwesomeIcon icon={faLinkedin} />
                <span>LinkedIn Profile</span>
            </a>
            <a href="https://github.com/gupta-codes" target="_blank" rel="noopener noreferrer" className="button github">
                <FontAwesomeIcon icon={faGithub} />
                <span>GitHub Profile</span>
            </a>
        </div>
    );
};

export default Links;