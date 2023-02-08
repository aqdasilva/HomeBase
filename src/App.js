import React, { useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Mainpage from './mainpage';
import Github from './routes/github';
import Resume from './routes/resume';
import Twitch from './routes/twitch';
import Youtube from './routes/youtube';
import Poshmark from './routes/poshmark';
import Portfolio from './routes/portfolio';
import Contacts from './routes/contacts';
import Login from './components/Pages/Login';
import Signup from './components/Pages/Signup';
import Gamepage from './components/Games/gamepage';


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
          <Route path="/youtube" element={<Youtube />} />
          <Route path="/poshmark" element={<Poshmark />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/home" element={<Mainpage />} />
          <Route path="/games" element={<Gamepage/>} />

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
