import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  h1: {},
  h2: {
    margin: `${theme.spacing(0, 0, 2)}`
  },
  h3: {},
  h4: {},
  h5: {},
}));

export const Title1 = props => <Typography variant="h1" className={useStyles().h1} {...props} />;
export const Title2 = props => <Typography variant="h2" className={useStyles().h2} {...props} />;
export const Title3 = props => <Typography variant="h3" className={useStyles().h3} {...props} />;
export const Title4 = props => <Typography variant="h4" className={useStyles().h4} {...props} />;
export const Title5 = props => <Typography variant="h5" className={useStyles().h5} {...props} />;
