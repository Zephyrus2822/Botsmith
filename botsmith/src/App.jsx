import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

const App = () => {
  const [workspace, setWorkspace] = React.useState([]);

  const botComponents = [
      { id: 'greeting', content: 'Greeting', icon: '👋' },
      { id: 'menu', content: 'Menu', icon: '📋' },
      { id: 'response', content: 'Response', icon: '💬' },
  ];

  const onDragStart = (e, id) => {
      console.log('Drag started:', id);
      e.dataTransfer.setData('text/plain', id);
  };

  const onDragOver = (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
  };

  const onDrop = (e) => {
      e.preventDefault();
      const id = e.dataTransfer.getData('text');
      console.log('Dropped item:', id);
      const component = botComponents.find(item => item.id === id);
      if (component) {
          setWorkspace(prevWorkspace => [...prevWorkspace, { ...component, key: `${component.id}-${Date.now()}` }]);
      }
  };

  return (
      <div className="flex h-screen bg-gray-100">
          <div className="w-64 bg-white shadow-md">
              <h2 className="text-lg font-semibold p-4">Components</h2>
              <div className="p-2">
                  {botComponents.map((item) => (
                      <div
                          key={item.id}
                          draggable="true"
                          onDragStart={(e) => onDragStart(e, item.id)}
                          className="mb-2 cursor-move bg-gray-100 p-2 rounded"
                      >
                          <div className="flex items-center">
                              <span className="mr-2">{item.icon}</span>
                              <span>{item.content}</span>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
          <div className="flex-1 p-8">
              <h1 className="text-2xl font-bold mb-4">Bot Builder Workspace</h1>
              <div
                  onDragOver={onDragOver}
                  onDrop={onDrop}
                  className="bg-white p-4 rounded-lg min-h-[400px] border-2 border-dashed border-gray-300"
              >
                  {workspace.map((item) => (
                      <div key={item.key} className="mb-2 p-2 bg-gray-100 rounded flex justify-between items-center">
                          <div className="flex items-center">
                              <span className="mr-2">{item.icon}</span>
                              <span>{item.content}</span>
                          </div>
                          <button className="bg-blue-500 text-white px-2 py-1 rounded text-sm">Edit</button>
                      </div>
                  ))}
              </div>
          </div>
      </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));