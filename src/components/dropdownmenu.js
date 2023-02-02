import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import { Link as RouterLink } from 'react-router-dom';
import { MenuItem, Link } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { FormControl } from '@material-ui/core';

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
          <MenuItemLink onClick={handleClose} to="/youtube" label="youtube"  />
          <MenuItemLink onClick={handleClose} to="/twitch" label="twitch"  />
          <MenuItemLink onClick={handleClose} to="/github" label="github" /> 
          <MenuItemLink onClick={handleClose} to="/poshmark" label="poshmark" />
      </Menu>
      </FormControl>
      
    </div>
  );
}

export default DropdownMenu;
