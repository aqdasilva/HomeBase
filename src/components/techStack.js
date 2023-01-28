import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import JavaScriptIcon from '@material-ui/icons/Language';
import JavaIcon from '@material-ui/icons/LibraryBooks';
import PHPIcon from '@material-ui/icons/Code';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    margin: theme.spacing(2),
  },
}));

function TechStack() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2 className={classes.title}>Tech Stack</h2>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <JavaScriptIcon />
          </ListItemIcon>
          <ListItemText primary="JavaScript" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <JavaIcon />
          </ListItemIcon>
          <ListItemText primary="Java" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PHPIcon />
          </ListItemIcon>
          <ListItemText primary="PHP" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            
          </ListItemIcon>
          <ListItemText primary="React" />
        </ListItem>
      </List>
    </div>
  );
}

export default TechStack;
