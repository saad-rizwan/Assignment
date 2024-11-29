import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <header className="navbar">
        <div className="logo">Untitled UI</div>
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Resources</a>
          <a href="#">Pricing</a>
        </nav>
      </header>

     <div className="hero-section">
     <div className="border">
        <p className="feature-text"> <button>New Feature</button> Check out the team dashboard →</p>
        </div>
        <h1 className="hero-title">Beautiful analytics to grow smarter</h1>
        <p className="hero-subtitle">
          Powerful, self-serve product and growth analytics to help you convert, engage, 
        </p>
        <p className="hero-subtitle"> and retain more users. Trusted by over 4,000 startups.</p>
        <div className="cta-buttons">
          <button className="btn demo-btn">Demo</button>
          <button className="btn signup-btn">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default App;
