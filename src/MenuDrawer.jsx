import React from 'react';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconAbout from '@material-ui/icons/InfoRounded';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  fullList: {
    width: 'auto'
  },
}));

const MenuDrawer = ({ isOpen, onClose }) => {
  const classes = useStyles();

  return (
    <Drawer anchor="left" open={isOpen} onClose={onClose} className={classes.drawer}>
      <List className={classes.fullList}>
        <ListItem button>
          <ListItemIcon><IconAbout /></ListItemIcon>
          <ListItemText>About</ListItemText>
        </ListItem>
        <Divider />
      </List>
    </Drawer>
  );
}

export default MenuDrawer;
