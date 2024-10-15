import React, { useEffect } from 'react';
import './lp.css'; // Import the CSS file

const LandingPage = () => {
  useEffect(() => {
    const toggleButton = document.getElementById('toggle-dark-mode');
    const primaryButton = document.querySelector('.primary-button');

    const toggleDarkMode = () => {
      document.body.classList.toggle('light-mode');
    };

    const handlePrimaryButtonClick = () => {
      alert('You clicked "Start building, it\'s free!"');
    };

    // Add event listeners
    toggleButton.addEventListener('click', toggleDarkMode);
    primaryButton.addEventListener('click', handlePrimaryButtonClick);

    // Cleanup event listeners on component unmount
    return () => {
      toggleButton.removeEventListener('click', toggleDarkMode);
      primaryButton.removeEventListener('click', handlePrimaryButtonClick);
    };
  }, []);

  return (
    <div>
      {/* Header section */}
      <header>
        <div className="logo">BotSmith</div>
        <nav>
          <a href="#">Platform</a>
          <a href="#">Solutions</a>
          <a href="#">Resources</a>
          <a href="#">Docs</a>
          <a href="#">Research</a>
        </nav>

        <div className="auth-links">
          <a href="#">Sign in</a>
          <a href="#">Get started →</a>
          <button id="toggle-dark-mode">Toggle Dark Mode</button> {/* Dark mode button */}
        </div>
      </header>

      {/* Main content section */}
      <main className="container">
        <h1>Build and deploy better AI customer experiences</h1>
        <p>Ship tailored customer support and copilot automation, faster.</p>
        <div className="buttons">
          <a href="/home" className="primary-button">Start building, it's free</a>
          <a href="#" className="secondary-button">Contact sales</a>
        </div>
      </main>

      {/* Placeholder for background pattern */}
      <div className="background-pattern"></div>
    </div>
  );
};

export default LandingPage;
