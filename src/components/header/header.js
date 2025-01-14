import React from 'react';
import './header.css'; 

const Header = () => {
  return (
    <>
    <header className="header">
      <nav className="header_navigation">
          <div className="header_toggle-button">
          </div>
          <div className="header_logo"><a>James Nguyen</a></div>
      </nav>
    </header>
    <div className="header_spacer"></div>
    </>
  );
}

export default Header;