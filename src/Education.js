import React from 'react';
import './Education.css'; // Add styles for education

const Education = () => {
    return (
        <div className="education">
            <ul>
                <li>
                    <h3>B.Tech in Electronics and Communication Engineering</h3>
                    <p>UPTU, Lucknow</p>
                    <p><strong>Aug 2014 - Jul 2018</strong></p>
                </li>
                <li>
                    <h3>Intermediate</h3>
                    <p>U.P Board, Prayagraj</p>
                    <p><strong>Jul 2012 - Jun 2013</strong></p>
                </li>
                <li>
                    <h3>High School</h3>
                    <p>U.P Board, Prayagraj</p>
                    <p><strong>Jul 2010 - Jun 2011</strong></p>
                </li>
            </ul>
        </div>
    );
};

export default Education;