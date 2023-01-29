import React from 'react';
import Sidebar from './components/navbar';
import Tank from './components/tank';
import TechStack from './components/techStack';




  function App() {
    const classes = useStyles();
    return (
      <div className="App">
        <Tank />
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