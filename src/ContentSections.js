import React, { useState } from 'react';
import AboutMeContent from './AboutMeContent';
import ProfessionalExperience from './ProfessionalExperience';
import TechnicalSkills from './TechnicalSkills';
import SoftSkills from './SoftSkills';
import Education from './Education';
import InterestsAndHobbies from './InterestsAndHobbies';
import Awards from './Awards';
import Languages from './Languages';
import Links from './Links';
import './ContentSections.css'; // Ensure this is updated

const sections = {
    aboutMe: <AboutMeContent />,
    professionalExperience: <ProfessionalExperience />,
    technicalSkills: <TechnicalSkills />,
    softSkills: <SoftSkills />,
    education: <Education />,
    interestAndHobbies: <InterestsAndHobbies />,
    awards: <Awards />,
    languages: <Languages />,
    links : <Links />
};

const ContentSections = () => {
    // Initialize state with 'aboutMe' as the default section
    const [activeSection, setActiveSection] = useState('aboutMe');

    // Handle click events to change the active section
    const handleClick = (key) => {
        setActiveSection(key);
    };

    return (
        <div className="content-sections">
            <div className="header">
                {Object.keys(sections).map((key) => (
                    <div
                        key={key}
                        className={`header-item ${activeSection === key ? 'active' : ''}`}
                        onClick={() => handleClick(key)}
                    >
                        {key.replace(/([A-Z])/g, ' $1').toUpperCase()}
                    </div>
                ))}
            </div>
            <div className="content">
                <p>{sections[activeSection]}</p>
            </div>
        </div>
    );
};

export default ContentSections;