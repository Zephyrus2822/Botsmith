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
          <li>Templates</li>
          <li>Hire an Expert</li>
        </ul>
        <div className="sidebar-footer">
          <div className="upgrade-notice">
            <p>4 days left on Team trial</p>
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
            <div className="agent-card">
              <div className="agent-image">
                {/* need to put an image here  */}
              </div>
              <div className="agent-details">
                <p className="agent-title">Untitled agent</p>
                <p className="agent-meta">Last edited 10 days ago</p>
              </div>
            </div>
          </div>
          <div className="templates-section">
            <h2>Start with a template</h2>
            <div className="template-cards">
              <div className="template-card">
                <div className="template-image"></div>
                <p className="template-title">Retail Purchases (Webchat)</p>
                <p className="template-meta">By BotSmith</p>
              </div>
              <div className="template-card">
                <div className="template-image"></div>
                <p className="template-title">Support Chatbot (Webchat)</p>
                <p className="template-meta">By BotSmith</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
