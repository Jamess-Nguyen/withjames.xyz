import React from 'react';
import './workexp.css';

const Workexp = () => {
  return (
    <div className="work-experience-container">
        <div className="intro-container">
            <p className="work-intro">Where I've Been</p>
        </div>
      <div className="logos-row">
        <div className="logo-container">
          <img src="path-to-usc-logo.png" alt="USC" className="logo" />
        </div>
        <div className="logo-container">
          <img src="path-to-mlb-logo.png" alt="MLB" className="logo" />
        </div>
        <div className="logo-container">
          <img src="path-to-uci-logo.png" alt="UCI" className="logo" />
        </div>
        <div className="logo-container">
          <img src="path-to-appjam-logo.png" alt="AppJam+" className="logo" />
        </div>
      </div>
    </div>
  );
};

export default Workexp;
