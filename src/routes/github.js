import React from 'react'
import {BrowserRouter as Link} from "react-router-dom"

const github = () => {
  return (
    <Link to={{ pathname: "https://github.com/aqdasilva" }} target="_blank">Click to Open My GitHub (new tab)</Link>
  )
}

export default github;
