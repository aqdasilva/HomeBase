import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Sidebar from '../components/navbar';
import MyLoader from '../components/MyLoader';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  loader: {
    marginTop: '180px',
    textAlign: 'center',
  }
}));

const Twitch = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
    {loading ? (
      <div className={classes.loader}>
        <MyLoader />
      </div>
    ) : (
    <div>
      <header className="App-header">
         <Sidebar />
      </header>
      <Link to={{ pathname: "https://www.twitch.tv/biigredant" }} target="_blank">Click to Watch me Game (new tab)</Link>
    </div>
      )}
      </>
  )
}

export default Twitch;
