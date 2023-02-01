import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const LoginForm = () => {
  const classes = useStyles();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/github');
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="username" label="Username" />
      <TextField id="password" label="Password" type="password" />
      <Button variant="contained" onClick={handleClick}>Contained</Button>
    </form>
  );
};

export default LoginForm;


