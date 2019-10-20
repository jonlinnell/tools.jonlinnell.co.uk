import React, { useState, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import IconMenu from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Spinner from './components/Spinner';
import MenuDrawer from './components/MenuDrawer';
import './App.css';

const HomePage = React.lazy(() => import('./pages/Home'));
const Base64Page = React.lazy(() => import('./pages/Base64'));

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
  appBarIcon: {
    color: `${theme.palette.common.white}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
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
    <Router>
      <div>
        <CssBaseline />
        <MenuDrawer isOpen={menuDrawerIsOpen} onClose={toggleMenuDrawer} />
        <AppBar position="static" elevation={0} className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <IconButton onClick={toggleMenuDrawer} className={classes.appBarIcon}>
              <IconMenu />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
              Tools
            </Typography>
          </Toolbar>
        </AppBar>
          <Suspense fallback={<Spinner timeout={500} />} >
            <Switch>
              <Route path="/base64"><Base64Page /></Route>
              <Route path="/"><HomePage /></Route>
            </Switch>
          </Suspense>
      </div>
    </Router>
  );
}

export default App;
