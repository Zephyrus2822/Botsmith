import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="workspace-logo">My Workspace</div>
        </div>
        <ul className="sidebar-menu">
          <li>Agents</li>
          <li>Team & Billing</li>
          <li>Learn</li>
          <li>Templates</li>
          <li>What's New</li>
          <li>Discord Community</li>
          <li>Hire an Expert</li>
        </ul>
        <div className="sidebar-footer">
          <div className="upgrade-notice">
            <p></p>
            <button>Upgrade Now</button>
          </div>
          <button>Contact Sales</button>
          <div className="user-info">
            <span className="user-name">Akhilesh Damke</span>
          </div>
        </div>
      </aside>
      <main className="main-content">
        <header className="main-header">
          <h1>All Agents</h1>
          <div className="header-actions">
            <button className='invite'><a href="#">Invite</a></button>
            <button className="new-agent"><a href="/botbuilder">New Agent</a></button>
          </div>
        </header>
        <section className="content">
          <div className="tutorial-banner">
            <p>Learn BotSmith with video tutorials</p>
            <button><a href="/botbuilder">Start Course</a></button>
          </div>
          <div className="agent-search">
            <input type="text" placeholder="Search agents" />
          </div>
          <div className="agent-list">
          </div>
          <div className="templates-section">
            <h2>Start with a template</h2>
          </div>
          <div className="agent-search">
            <input type="text" placeholder="Search template" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
