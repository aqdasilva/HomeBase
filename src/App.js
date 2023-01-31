import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Mainpage from './mainpage';
import Github from './routes/github';
import Resume from './routes/resume';
import Twitch from './routes/twitch';

  function App() {
    return <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/github" element={<Github />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/twitch" element={<Twitch />} />
    </Routes>

  }

export default App;