import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div className="about-me">
            <img 
                src={`${process.env.PUBLIC_URL}/profile-photo.jpg`} 
                alt="Profile" 
                className="profile-photo" 
            />
            <h1>Shubham K Gupta</h1>
            <p>Data Engineer / Software Developer</p>
            <p>
                shubham.k.gupta@icloud.com | +91-8899654510
            </p>
        </div>
    );
};

export default AboutMe;