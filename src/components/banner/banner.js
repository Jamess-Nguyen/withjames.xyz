import React from 'react';
import './banner.css'; 
import pfp from '../../assets/pfp.png'

const Banner = () => {
    const openLinkedIn = () => {
        window.open('https://www.linkedin.com/in/james-nguyen-85574b187/', '_blank');
    };

    return (
        <div className="about-me-wrapper">
            <div className="left-rectangle">
                <h1 className="name-header">James Nguyen</h1>
                <p>California based Software Engineer ideating and implementing humancentric full stack solutions. Starting my programming career in elementry school (2008)- I aim to build technology that makes life a little easier.</p>
                <button className="linkedin-button" onClick={openLinkedIn}>
                    Connect On LinkedIn
                </button>
            </div>

            <div className="right-rectangle">
                <img src={pfp} alt="Profile" />
            </div>
        </div>       
    );

}

export default Banner