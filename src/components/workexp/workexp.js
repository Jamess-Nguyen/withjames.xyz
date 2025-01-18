import React from 'react';
import './workexp.css';
import logo192 from '../../assets/logo192.png'

const Workexp = () => {
  return (
    <div className="work-experience-container">
        <div className="intro-container">
            <p className="work-intro">Where I've Worked:</p>
        </div>
      <div className="logos-row">
        <div className="logo-container">
          <img src={logo192} alt="USC" className="logo" />
        </div>
        <div className="logo-container">
          <img src={logo192} alt="MLB" className="logo" />
        </div>
        <div className="logo-container">
          <img src={logo192} alt="UCI" className="logo" />
        </div>
        <div className="logo-container">
          <img src={logo192} alt="AppJam+" className="logo" />
        </div>
      </div>
    </div>
  );
};

export default Workexp;
