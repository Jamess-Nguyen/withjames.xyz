import React from 'react';
import './banner.css'; 

const Banner = () => {
    const openLinkedIn = () => {
        window.open('https://www.linkedin.com/in/james-nguyen-85574b187/', '_blank');
    };

    return (
        <div className="about-me-wrapper">
            <div className="left-rectangle">
                <h1>James Nguyen</h1>
                <p>California based Software Engineer ideating and implementing human-centric full stack solutions </p>
                <button className="linkedin-button" onClick={openLinkedIn}>
                    Connect On LinkedIn
                </button>
            </div>

            <div className="right-rectangle">
                <img src="https://via.placeholder.com/300" alt="Profile" />
            </div>
        </div>       
    );

}

export default Banner