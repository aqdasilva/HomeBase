import React from 'react'
import {BrowserRouter as Link} from "react-router-dom"

const Youtube = () => {
  return (
    <div>
      <Link to={{ pathname: "https://www.youtube.com/@LofiLateNights" }} target="_blank">Click to Open My GitHub (new tab)</Link>
    </div>
  )
}

export default Youtube;
