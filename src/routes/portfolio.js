import React from 'react'
import Sidebar from '../components/navbar';
import { makeStyles } from '@material-ui/core/styles';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';


const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    marginBottom: "10px",
    left: '5%',
    
  }
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Inspirations = () => {
  const classes = useStyles();

  return (
    <div>
      <header className="App-header">
         <Sidebar />
      </header>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="flex-end"
        spacing={4}
      > <Item><a  href="https://jesse-zhou.com/">Jesse Zhou</a></Item>
        <Item><a  href="https://bruno-simon.com/">Bruno Simon</a></Item>
        <Item><a  href="https://p5aholic.me/contact/">p5aholic</a></Item>
      </Stack>
    </div>
  )
}

export default Inspirations;
