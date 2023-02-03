import React from 'react'
import {BrowserRouter as Link} from "react-router-dom"


const Poshmark = () => {
  return (
    <div>
       <Link to={{ pathname: "https://poshmark.com/closet/qdee508" }} target="_blank">Click to Shop my Closet (new tab)</Link>
    </div>
  )
}

export default Poshmark;
