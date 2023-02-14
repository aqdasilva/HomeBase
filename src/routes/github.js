import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Sidebar from '../components/navbar';

const github = () => {
  return (
    <div>
      <header className="App-header">
         <Sidebar />
      </header>
      <Link to={{ pathname: "https://github.com/aqdasilva" }} target="_blank">Click to Open My GitHub (new tab)</Link>
    </div>
  )
}

export default github;
