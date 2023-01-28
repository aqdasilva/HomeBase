import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { SiPhp } from "react-icons/si";
import { FaReact, FaJava} from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";


const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100%',
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

function TechStack() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2 className={classes.title}>Tech Stack</h2>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <TbBrandJavascript style={{ fontSize: 38 }} />
          </ListItemIcon>
          <ListItemText primary="JavaScript" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FaJava style={{ fontSize: 38 }}  />
          </ListItemIcon>
          <ListItemText primary="Java" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SiPhp style={{ fontSize: 38 }}  />
          </ListItemIcon>
          <ListItemText primary="PHP" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FaReact style={{ fontSize: 38 }}  />
          </ListItemIcon>
          <ListItemText primary="React" />
        </ListItem>
      </List>
    </div>
  );
}

export default TechStack;
