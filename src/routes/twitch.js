import React from 'react'
import {BrowserRouter as Link} from "react-router-dom"

const twitch = () => {
  return (
    <div>
      <Link to={{ pathname: "https://www.twitch.tv/biigredant" }} target="_blank">Click to Watch me Game (new tab)</Link>
    </div>
  )
}

export default twitch;
