import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from './components/navbar';
import Tank from './components/tank';
import TechStack from './components/techStack';
import OSStack from './components/osStack';
import { GiFireSilhouette } from "react-icons/gi";

const useStyles = makeStyles((theme) => ({
  App: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh'
  },
  greeting: {
    fontSize: '64px',
    textAlign: 'center',
    marginTop: '180px',
  },
  info: {
    fontSize: '64px',
    textAlign: 'center',
    marginTop: '180px',
    transition: 'color 0.8s ease-in-out',
  },
  spinner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
}));


const Mainpage = () => {
  const classes = useStyles();
  const [color, setColor] = useState('#fc3903');
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setColor(prevColor => {
      switch (prevColor) {
        case '#fc3903':
          return 'orange';
        case 'orange':
          return 'blue';
        case 'blue':
          return 'yellow';
        case 'yellow':
          return 'brown';
        default:
          return '#fc3903';
      }
    });
  }, 1000);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
    {loading ? (
      <div className={classes.spinner}>
        <h1>Loading...</h1>
      </div>
    ) : (
    <div className={classes.App}>
      <header className="App-header">
        <Sidebar />
      </header>
      <h4 className={classes.greeting}>
        Anthony Quinn DaSilva
      </h4>
      <h3 className={classes.info} style={{ color }}>
        Software, Web Stuff, Data, & More <GiFireSilhouette />
      </h3>
      <h5 className={classes.greeting}>
        Hey there Visitor ! 
      </h5>

      <div>
        <Tank />
      </div>
      <div>
        <TechStack />
      </div>
      <div>
        <OSStack />
      </div>
    </div>
    )}
    </>
    );
  }

export default Mainpage;
