import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  CssBaseline,
  Drawer,
  Typography
} from "@material-ui/core";
import {
  Apps,
  Menu,
  ContactMail,
  AssignmentInd,
  Home
} from "@material-ui/icons";
import 'animate.css'; 
// https://animate.style/
import DropdownMenu from "./dropdownmenu";
import { Link as RouterLink } from 'react-router-dom';
import { FaBlogger } from "react-icons/fa";


const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#9c730b",
    height: "100%",
    border: '4px solid black',
  },
  avatar: {
    margin: "0.5rem auto",
    padding: "1rem",
    width: theme.spacing(13),
    height: theme.spacing(13)
  },
  listItem: {
    color: "black"
  },
  appbar: {
    background: '#9c730b',
    border: '4px solid black',
  },
}));

const listItems = [
  {
    listIcon: <Home style={{ fontSize: 28}} />,
    listText: "Home",
    link: '/home',
  },
  {
    listIcon: <AssignmentInd style={{ fontSize: 28}} />,
    listText: "Resume",
    link: '/resume',
  },
  {
    listIcon: <Apps style={{ fontSize: 28}} />,
    listText: "Inspirations",
    link: '/inspirations',
  },
  {
    listIcon: <ContactMail style={{ fontSize: 28}} />,
    listText: "Contacts",
    link: '/contacts',
  },
  {
    listIcon: <FaBlogger style={{ fontSize: 28}} />,
    listText: "Updates",
    link: '/updates',
  },
];

function Sidebar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleSlider = () => {
    setOpen(!open);
  };

  const sideList = () => (
    <Box className={classes.menuSliderContainer} component="div">
      <Avatar
        className={classes.avatar}
        src="https://i.ibb.co/qMqz8vy/red-knight.png"
      />
      <Divider />
      <List >
        {listItems.map((listItem, index) => (
          <ListItem className={classes.listItem }  component={RouterLink} to={listItem.link} button key={index}>
            <ListItemIcon className={classes.listItem}>
              {listItem.listIcon}
            </ListItemIcon>
            <ListItemText primary={listItem.listText} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <CssBaseline />

      <Box component="nav">
        <AppBar className={classes.appbar} position="static">
          <Toolbar>
            <IconButton onClick={toggleSlider}>
              <Menu />
            </IconButton>
            <Typography variant="h5" class="animate__animated animate__rubberBand animate__repeat-3">Home Base</Typography>
            <DropdownMenu />
            <Drawer open={open} anchor="right" onClose={toggleSlider}>
              {sideList()}
            </Drawer>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Sidebar;