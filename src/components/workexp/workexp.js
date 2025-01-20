import React from 'react';
import './workexp.css';
import USC from '../../assets/USC.png'
import MLB from '../../assets/MLB.png'
import UCI from '../../assets/UCI.png'
import dreams4schools from '../../assets/dreams4schools.png'

const Workexp = () => {
  return (
    <div className="work-experience-container">
        <div className="intro-container">
            <p className="work-intro">Where I've Worked</p>
        </div>
      <div className="logos-row">
        <div className="logo-container">
          <img src={USC} alt="USC" className="logo" />
        </div>
        <div className="logo-container">
          <img src={MLB} alt="MLB" className="logo" />
        </div>
        <div className="logo-container">
          <img src={UCI} alt="UCI" className="logo" />
        </div>
        <div className="logo-container">
          <img src={dreams4schools} alt="AppJam+" className="logo" />
        </div>
      </div>
    </div>
  );
};

export default Workexp;
