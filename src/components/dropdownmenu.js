import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { FormControl, Select } from '@material-ui/core';

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


function DropdownMenu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <FormControl>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Barracks
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
          <MenuItem onClick={handleClose}>Youtube</MenuItem>
          <MenuItem onClick={handleClose}>Twitch</MenuItem>
          <MenuItem onClick={handleClose}>GitHub</MenuItem>
          <MenuItem onClick={handleClose}>Poshmark</MenuItem>
      </Menu>
      </FormControl>
      
    </div>
  );
}

export default DropdownMenu;
