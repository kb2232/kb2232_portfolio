import React from 'react';

function Header() {
  return (
    <nav className="nav">
      <ul className="nav_order1">
        <li className="nav_order">
          <label className="logo"><a href="/" className="link">OlaKunle, Babatunde</a></label>
        </li>
        <div className="nav_order2">
          <li className="nav_order nav_order3"><a href="/" className="link">About</a></li>
          <li className="nav_order nav_order3"><a href="/" className="link">Resume</a></li>
          <li className="nav_order nav_order3"><a href="/" className="link">Projects</a></li>
        </div>
      </ul>
    </nav>
  );
}

export { Header };
