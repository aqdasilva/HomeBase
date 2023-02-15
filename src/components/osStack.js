import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { AiFillApple, AiFillWindows, AiFillChrome } from "react-icons/ai";
import { FcLinux } from "react-icons/fc";


const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: 0,
    left: '55%',
    transform: 'translateX(-50%)',
    textAlign: 'center',
    backgroundColor: "#9c730b",
    border: '4px solid black',
    padding: theme.spacing(2),
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    margin: theme.spacing(2),
  },
}));

function OSStack() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2 className={classes.title}>OS Stack</h2>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <AiFillApple style={{ fontSize: 38 }} />
          </ListItemIcon>
          <ListItemText primary="Mac OS" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AiFillWindows style={{ fontSize: 38 }}  />
          </ListItemIcon>
          <ListItemText primary="Windows 10, 11" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AiFillChrome style={{ fontSize: 38 }}  />
          </ListItemIcon>
          <ListItemText primary="Chrome OS" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FcLinux style={{ fontSize: 38 }}  />
          </ListItemIcon>
          <ListItemText primary="Learning: Linux" />
        </ListItem>
      </List>
    </div>
  );
}

export default OSStack;
