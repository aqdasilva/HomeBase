import React, { useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Mainpage from './mainpage';
import Github from './routes/github';
import Resume from './routes/resume';
import Twitch from './routes/twitch';
import Youtube from './routes/youtube';
import Poshmark from './routes/poshmark';
import Inspirations from './routes/portfolio';
import Contacts from './routes/contacts';
import Login from './components/Pages/Login';
import Signup from './components/Pages/Signup';
import Gamepage from './components/Games/gamepage';
import TankWars from './components/Games/tankwars';
import Playlist from './components/Pages/playlist';
import Blog from './components/Pages/blog';
import PingPong from './components/Games/pingpong';



function App() {
  const [auth, setAuth] = useState(false);
  const location = useLocation();

  //all the routes for all of the pages
  return (
    <> 
      <div className='container'>
        <Routes>
              <Route path="/" element={<Mainpage />} />
              <Route path="/github" element={<Github />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/twitch" element={<Twitch />} />
              <Route path="/youtube" element={<Youtube />} />
              <Route path="/poshmark" element={<Poshmark />} />
              <Route path="/inspirations" element={<Inspirations />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/home" element={<Mainpage />} />
              <Route path="/games" element={<Gamepage/>} />
              <Route path="/tankwars" element={<TankWars />} />
              <Route path="/playlist" element={<Playlist />} />
              <Route path="/updates" element={<Blog />} />
              <Route path="/pingpong" element={<PingPong />} />

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
      </div>
    </>
  );
}

export default App;
