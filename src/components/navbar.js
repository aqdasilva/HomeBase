import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';

function Sidebar({ open, onClose }) {
    return (
      <Drawer open={open} onClose={onClose}>
        <List>
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
    );
  }

export default Sidebar;
  