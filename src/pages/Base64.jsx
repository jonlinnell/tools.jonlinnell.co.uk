import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import orange from '@material-ui/core/colors/orange';
import lightGreen from '@material-ui/core/colors/lightGreen';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { Title2 } from '../components/titles';
import Container from '../components/Container';
import Divider from '../components/Divider';

import { encodeBase64, decodeBase64 } from '../lib/utils/base64';
import useClipboardFill from '../lib/hooks/useClipboardFill';

const EncodeSwitch = withStyles(theme => ({
  root: {
    width: 48,
    height: 24,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: 3,
    color: theme.palette.common.white,
    '&$checked': {
      color: theme.palette.common.white,
      transform: 'translateX(24px)',
      '& + $track': {
        opacity: 1,
        backgroundColor: lightGreen[300],
      },
    },
  },
  thumb: {
    width: 18,
    height: 18,
    boxShadow: 'none',
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 32 / 2,
    opacity: 1,
    backgroundColor: orange[300],
  },
  checked: {},
}))(Switch);

const useStyles = makeStyles(theme => ({
  textFieldContainerGrid: {
    width: '100%'
  },
  textField: {
    width: '100%'
  }
}));

const Base64 = () => {
  const classes = useStyles();

  const [inputData, setInputData] = useState('');

  const [isEncodeMode, setEncodeMode] = useState(true);
  const handleToggle = (event) => {
    const { checked } = event.target;

    !checked && setInputData('');
    setEncodeMode(checked);
  };

  useClipboardFill(setInputData);

  // const handleChange = name => event => setValues({ ...values, [name]: event.target.value });
  const handleChange = event => setInputData(event.target.value);

  const result = isEncodeMode ? encodeBase64(inputData) : decodeBase64(inputData);
  const isResultInvalid = result === '$INVALID';

  return (
    <Container>
      <Title2>Base64</Title2>
      Encode or decode all that Base64 data you've got lying around.
      <Divider />
      <Grid component="label" container alignItems="center" spacing={1}>
        <Grid item>Decode</Grid>
        <Grid item>
          <EncodeSwitch
            checked={isEncodeMode}
            onChange={handleToggle}
            value="checkedC"
          />
        </Grid>
        <Grid item>Encode</Grid>
      </Grid>
      <form noValidate autoCapitalize="off" autoComplete="off" autoCorrect="off">
        <Grid container component="div" spacing={2} className={classes.textFieldContainerGrid}>
          <Grid item md={6} xs={12}>
            <TextField
              id="outlined-name"
              label="Input"
              value={inputData}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              className={classes.textField}
              multiline
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              error={isResultInvalid}
              id="outlined-name"
              label={isEncodeMode ? 'Encoded' : 'Decoded'}
              value={isResultInvalid ? 'Invalid Base 64 data' : result}
              margin="normal"
              variant="outlined"
              className={classes.textField}
              multiline
            />
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default Base64;
