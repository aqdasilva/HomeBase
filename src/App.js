import React, { useState } from 'react';
import LoginForm from './components/loginPage';
import { Routes, Route } from 'react-router-dom';
import Mainpage from './mainpage';
import Github from './routes/github';
import Resume from './routes/resume';
import Twitch from './routes/twitch';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      {!isLoggedIn ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/github" element={<Github />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/twitch" element={<Twitch />} />
        </Routes>
      )}
    </>
  );
}

export default App;
