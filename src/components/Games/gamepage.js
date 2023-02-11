import React, { useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import TankWars from './tankwars';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import { MenuItem, Link } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TankCard from './GameCards/TankCard';
import Sidebar from '../navbar';

const useStyles = makeStyles((theme) => ({
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
      backgroundColor: '#9c730b',
      border: '4px solid black',
      padding: theme.spacing(4),
    },
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

    return (
      <div>
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
 
      );
    }
    

export default Gamepage;
