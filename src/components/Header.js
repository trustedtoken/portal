import React from 'react';
import './Header.css';

function Header(props) {
  return (
    <header className="Header">
      <div className="Container">
        <div className="Header-content">
          <nav className="Header-nav">
            <ul>
              <li><a href="">Home</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
