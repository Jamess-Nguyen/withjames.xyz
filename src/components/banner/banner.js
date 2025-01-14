import React from 'react';
import './banner.css'; 

const Banner = () => {
    return (
        <div className="about-me-wrapper">
            <div className="left-rectangle">
                <h1>James Nguyen</h1>
                <p>California based Software Engineer ideating and implementing automated solutions.</p>
            </div>

            <div className="right-rectangle">
                <img src="https://via.placeholder.com/300" alt="Profile" />
            </div>
        </div>       
    );

}

export default Banner