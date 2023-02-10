import React, { useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import TankWars from './tankwars';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import { Link as RouterLink } from 'react-router-dom';
import { MenuItem, Link } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { FormControl } from '@material-ui/core';
import { Icon } from '@iconify/react';
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
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <div>
        <header className="App-header">
         <Sidebar />
        </header>
      </div>
 
      );
    }
    

export default Gamepage;
