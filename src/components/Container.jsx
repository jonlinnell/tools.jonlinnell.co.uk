import React from 'react';
import { default as Container } from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  containerContent: {
    padding: theme.spacing(8, 0, 6),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(3)
    }
  },
}));

export default ({ children }) => {
  const classes = useStyles();

  return (
    <Container className={classes.containerContent}>
      {children}
    </Container>
  )
}
