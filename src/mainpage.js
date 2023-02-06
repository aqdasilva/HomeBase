import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from './components/navbar';
import Tank from './components/tank';
import TechStack from './components/techStack';

const useStyles = makeStyles((theme) => ({
  App: {
    backgroundColor: 'red',

  }
}));

const Mainpage = () => {
  const classes = useStyles();
  return (
      <div className={classes.App}>
        <div>
           <Tank />
        </div>
            <header className="App-header">
              <Sidebar />
            </header>
          <div>
            <TechStack />
          </div>
      </div>
      

    );
  }

export default Mainpage;
