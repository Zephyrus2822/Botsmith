import { useState } from 'react';
// import './home.css'

function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark', !darkMode);
  };

  return (
    <div className='rudranil'>
      <div className="sidebar">
        <img src="your-logo.png" alt="Logo" />
        <ul>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Workflows</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </div>
      <div className="main-content">
        <div className="search-and-new">
          <input type="text" className="search-box" placeholder="Search workflows..." />
          <button className="new-workflow-btn">New Workflow</button>
        </div>
        <table className="workflow-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Triggers</th>
              <th>Status</th>
              <th>Assignee</th>
              <th>Updated</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Main Menu</td>
              <td>Start here</td>
              <td>Start</td>
              <td>None</td>
              <td>-</td>
              <td>7 days ago</td>
            </tr>
            <tr>
              <td>Get Support</td>
              <td>Uses the knowledge base...</td>
              <td>Get Support</td>
              <td>None</td>
              <td>-</td>
              <td>7 days ago</td>
            </tr>
            <tr>
              <td>Talk to Sales</td>
              <td>Captures user information</td>
              <td>Talk to Sales</td>
              <td>None</td>
              <td>-</td>
              <td>7 days ago</td>
            </tr>
          </tbody>
        </table>
        <button className="toggle-btn" onClick={toggleDarkMode}>
          Toggle Dark Mode
        </button>
      </div>
    </div>
  );
}

export default Home;
