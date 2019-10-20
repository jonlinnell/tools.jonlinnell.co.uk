import React from 'react';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconHome from '@material-ui/icons/Home';
import List from '@material-ui/core/List';

import { default as ListItemLinkSomething } from './ListItemLink';

import {makeStyles} from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
        <ListItem>
          <ListItemText>String Encoding</ListItemText>
        </ListItem>
        <ListItemLink to="/base64" variant="subitem">Base 64</ListItemLink>
        <ListItemLink to="/zalgo" variant="subitem">Z̶̸̵͢a͘͞͞l̢͠͝͠g̢̕o̸̧͏</ListItemLink>
      </List>
    </Drawer>
  );
}

export default MenuDrawer;
