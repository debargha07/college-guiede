import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <h1>CollegeGuide</h1>
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/colleges" className="nav-link">Colleges</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
