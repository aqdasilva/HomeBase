import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import { MenuItem, Link } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TankCard from './GameCards/TankCard';
import KnightCard from './GameCards/knightDuel';
import PingCard from './GameCards/PingPong';
import Sidebar from '../navbar';
import BeerCard from './GameCards/BeerPongCard';
import MyLoader from '../MyLoader';

const useStyles = makeStyles((theme) => ({
  App: {
    backgroundColor: '#363232',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh'
  },
    root: {
      position: 'fixed',
      left: '50%',
      transform: 'translateX(-50%)',
      textAlign: 'center',
      backgroundColor: "#9c730b",
      border: '4px solid black',
      padding: theme.spacing(2),
    },
    gridList: {
      width: 500,
      height: 450,
    },
    card: {
      width: 950,
      height: 300,
      backgroundColor: '#c7241c',
      border: '4px solid black',
      padding: theme.spacing(4),
    },
    loader: {
      marginTop: '180px',
      textAlign: 'center',
    }
  }));
  
  function MenuItemLink({ to, label, ...props }) {
    return (
      <MenuItem component={RouterLink} to={to} {...props}>
        {label}
      </MenuItem>
    );
  }

const Gamepage = () => {
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
      <div className={classes.App}>
        <header className="App-header">
         <Sidebar />
        </header>
        <Grid container spacing={2}>
        <Grid item xs={6}>
          <div className={classes.card}>
            <div className="cannon">
              <TankCard />
              <div className="small-black-rectangle" />
            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.card}>
            <div className="cannon">
              <KnightCard />
              <div className="small-black-rectangle" />
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <div className={classes.card}>
            <div className="cannon">
              <PingCard />
              <div className="small-black-rectangle" />
            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.card}>
            <div className="cannon">
              <BeerCard />
            <div className="small-black-rectangle" />
          </div>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <div className={classes.card}>
            <div className="cannon">
              <div className="small-black-rectangle" />
            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.card}>
            <div className="cannon">
              <div className="small-black-rectangle" />
            </div>
          </div>
        </Grid>
      </Grid>
      </div>
      )}
      </>
      );
    }
    

export default Gamepage;
