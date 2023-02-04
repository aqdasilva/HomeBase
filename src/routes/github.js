import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const github = () => {
  return (
    <div>
      <Link to={{ pathname: "https://github.com/aqdasilva" }} target="_blank">Click to Open My GitHub (new tab)</Link>
    </div>
  )
}

export default github;
