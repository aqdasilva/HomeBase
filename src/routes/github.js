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

const Github = () => {
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
      <Link to={{ pathname: "https://github.com/aqdasilva" }} target="_blank">Click to Open My GitHub (new tab)</Link>
    </div>
          )}
          </>
  )
}

export default Github;
