import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from './components/navbar';
import Tank from './components/tank';
import TechStack from './components/techStack';

const useStyles = makeStyles((theme) => ({
  App: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh'
  },
  greeting: {
    fontSize: '64px',
    alignContent: 'center',
    
  }
}));

const Mainpage = () => {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <header className="App-header">
        <Sidebar />
      </header>
      <h5 className={classes.greeting}>
        Hey there Visitor ! 
      </h5>
      <div>
        <Tank />
      </div>

      <div>
        <TechStack />
      </div>
    </div>
    );
  }

export default Mainpage;
