import React from 'react';
import './lp.css';

const LandingPage = () => {
  return (
    <div className="hero-container">
      
      <div className="navbar">
        <div className="logo"><a href="/">BotSmith</a></div>
        <ul className="nav-links">
          <li>Platform</li>
          <li>Solutions</li>
          <li>Resources</li>
          <li>Docs</li>
          <li>Research</li>
        </ul>
        
        <div className="auth-links">
          <button className='sign-in'>Sign in</button>
          <button className="get-started">Get started</button>
        </div>
      </div>
      
      <div className="hero-content">
        <h1>Build AI customer support agents with complete control</h1>
        <p>Avoid AI blackboxes. Deploy and scale tailored AI agents to automate customer interactions.</p>
        <div className="hero-buttons">
          <button className="start-building"><a href="/home">Start building, it's free</a></button>
          <button className="contact-sales"><a href="#">Contact sales</a></button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;