import React from 'react';
import './banner.css'; 

const Banner = () => {
    return (
        <div className="about-me-wrapper">
            <div className="left-rectangle">
                <h2>About Me</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel urna quis mi gravida interdum non sit amet nulla. Integer placerat justo eget ante vehicula, eget tincidunt ligula fermentum.</p>
                <p>Nullam auctor, eros eu porttitor consequat, arcu nisi malesuada metus, et malesuada mi libero at neque. Vivamus vel felis a lorem fermentum elementum. Proin vestibulum nulla a lorem bibendum, id pharetra sapien tempus.</p>
            </div>

            <div className="right-rectangle">
                <img src="https://via.placeholder.com/300" alt="Profile" />
                <footer>Footer Text Here</footer>
            </div>
        </div>       
    );

}

export default Banner