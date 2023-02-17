import React from 'react'
import Sidebar from '../components/navbar';
import { makeStyles } from '@material-ui/core/styles';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import adlogo from '../images/adlogo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    marginBottom: "10px",
    left: '5%',   
  },
  App: {
    backgroundImage: `url(${adlogo})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh'
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: 'blueviolet', //text color
  width:'200px', //set the width
}));

const Title = styled('h1')(({ theme }) => ({
  textAlign: 'center',
  fontSize: '2em',
  margin: '30px 0',
}));

const Inspirations = () => {
  const classes = useStyles();

  return (
    <div className={classes.App}>
      <header className="App-header">
         <Sidebar />
      </header>
      <Title>My Inspirations</Title>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="flex-end"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={4}
        sx={{ marginTop: '30px' }} // Add some margin to the top
      > <Item><a  href="https://jesse-zhou.com/">Jesse Zhou</a></Item>
        <Item><a  href="https://bruno-simon.com/">Bruno Simon</a></Item>
        <Item><a  href="https://p5aholic.me/contact/">p5aholic</a></Item>
      </Stack>
    </div>
  )
}

export default Inspirations;
