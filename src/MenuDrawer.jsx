import React from 'react';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconHome from '@material-ui/icons/Home';
import List from '@material-ui/core/List';

import { default as ListItemLinkSomething } from './ListItemLink';

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  fullList: {
    minWidth: '250px'
  },
}));

const MenuDrawer = ({ isOpen, onClose }) => {
  const classes = useStyles();

  const ListItemLink = props => <ListItemLinkSomething onClick={onClose} {...props} />

  return (
    <Drawer anchor="left" open={isOpen} onClose={onClose} className={classes.drawer}>
      <List className={classes.fullList}>
        <ListItemLink icon={<IconHome />} to="/" >Home</ListItemLink>
        <Divider />
      </List>
    </Drawer>
  );
}

export default MenuDrawer;
