import React, { useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Mainpage from './mainpage';
import Github from './routes/github';
import Resume from './routes/resume';
import Twitch from './routes/twitch';
import Login from './components/Pages/Login';
import Signup from './components/Pages/Signup';


function App() {
  const [auth, setAuth] = useState(false);
  const location = useLocation();

  return (
    <>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/github" element={<Github />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/twitch" element={<Twitch />} />

          <Route path="/login" element={<Login setAuth={setAuth} />} />
          <Route path="/signup" element={<Signup setAuth={setAuth} />} />
          <Route path="/" element={
            auth ? (
              <Mainpage setAuth={setAuth} />
            ) : (
              <Navigate to="/login" state={{ from: location }} replace />
          )
        }
      />
      </Routes>
      </>
  );
}

export default App;
