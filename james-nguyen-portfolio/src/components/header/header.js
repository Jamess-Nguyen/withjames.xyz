import React from 'react';
import './header.css'; 

const Header = () => {
  return (
    <header className="header">
      <nav className="header_navigation">
          <div className="header_toggle-button">
          </div>
          <div className="header_logo"><a>James Nguyen</a></div>
          <div className="header_navitems">
              <ul>
                <li><button>About</button></li>
                <li><button>Experience</button></li>
                <li><button>Projects</button></li>
              </ul>
          </div>
      </nav>
    </header>
  );
}

export default Header;