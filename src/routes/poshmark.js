import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Sidebar from '../components/navbar';

const Poshmark = () => {
  return (
    <div>
      <header className="App-header">
         <Sidebar />
      </header>
       <Link to={{ pathname: "https://poshmark.com/closet/qdee508" }} target="_blank">Click to Shop my Closet (new tab)</Link>
    </div>
  )
}

export default Poshmark;
