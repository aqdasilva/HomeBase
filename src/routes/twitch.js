import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Sidebar from '../components/navbar';

const twitch = () => {
  return (
    <div>
      <header className="App-header">
         <Sidebar />
      </header>
      <Link to={{ pathname: "https://www.twitch.tv/biigredant" }} target="_blank">Click to Watch me Game (new tab)</Link>
    </div>
  )
}

export default twitch;
