import React from 'react';
import Sidebar from './components/navbar';
import TechStack from './components/techStack';

  function App() {
    return (
      <div className="App">
        <header className="App-header">
          <Sidebar />
        </header>
        <div>
          <TechStack />
        </div>     
      </div>
    );
  }

export default App;