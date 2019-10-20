import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import MenuDrawer from './MenuDrawer';
import './App.css';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const App = () => {
  const classes = useStyles();

  const [menuDrawerIsOpen, setMenuDrawerOpen] = useState(false);
  const toggleMenuDrawer = () => setMenuDrawerOpen(!menuDrawerIsOpen);

  return (
  <>
    <CssBaseline />
    <MenuDrawer isOpen={menuDrawerIsOpen} onClose={toggleMenuDrawer} />
    <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Button onClick={toggleMenuDrawer}>Open</Button>
        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          Tools 🛠
        </Typography>
        <nav>
          <Link variant="button" color="textPrimary" href="#" className={classes.link}>
            About
          </Link>
          <Link variant="button" color="textPrimary" href="#" className={classes.link}>
            Enterprise
          </Link>
          <Link variant="button" color="textPrimary" href="#" className={classes.link}>
            Support
          </Link>
        </nav>
        <Button href="#" color="primary" variant="outlined" className={classes.link}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
    <Container component="main" className={classes.heroContent}>
      Hey
    </Container>
  </>
)}

export default App;
