import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { default as UnstyledDivider } from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  divider: {
    margin: `${theme.spacing(3, 0)}`
  }
}));

const Divider = ({ light }) => {
  const classes = useStyles();

  return <UnstyledDivider className={classes.divider} light={!!light} />
};

export default Divider;
