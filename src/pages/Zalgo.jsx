import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import IconButton from '@material-ui/core/IconButton';

import IconCopy from '@material-ui/icons/AssignmentReturned';
import IconClear from '@material-ui/icons/Clear';

import Container from '../components/Container';
import { Title2 } from '../components/titles';
import Divider from '../components/Divider';

import zalgo, { ZALGO_AMOUNTS, ZALGO_DIRECTIONS } from '../lib/utils/zalgo';

const useStyles = makeStyles(theme => ({
  textFieldContainerGrid: {
    width: '100%'
  },
  textField: {
    width: '100%'
  },
  result: {
    width: '100%',
    fontSize: '2rem',
    textAlign: 'center',
    padding: `${theme.spacing(8, 0)}`,
    [theme.breakpoints.down('md')]: {
      padding: 0,
    }
  },
  gridButtonsContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    }
  }
}));

const Zalgo = () => {

  const classes = useStyles();

  const [inputData, setInputData] = useState('');
  const handleChange = event => setInputData(event.target.value);

  const [direction, setDirection] = useState(ZALGO_DIRECTIONS.MID);
  const handleChangeDirection = event => setDirection(event.target.value);

  const [amount, setAmount] = useState(ZALGO_AMOUNTS.STD);
  const handleChangeAmount = event => setAmount(event.target.value);

  const result = zalgo(inputData, { direction, amount });

  const handleClear = () => {
    setInputData('');
    setDirection(ZALGO_DIRECTIONS.MID);
    setAmount(ZALGO_AMOUNTS.STD);
  }
  const handleCopyToClipboard = () => navigator.clipboard.writeText(result);

  return (
    <Container>
      <Title2>Z̀̕͜͠҉a͏̶̴ļ̷̛́g̨̡͏̀ơ̴̷̧͜</Title2>
      I'm scared of adding any Zalgo text here in case I break git.
      <Divider />
        <Grid container spacing={2}>
          <Grid item xs={12} lg={4} md={12}>
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
          <Grid item xs={12} lg={3} md={5}>
            <FormControl component="fieldset">
              <FormLabel>Direction</FormLabel>
              <RadioGroup value={direction} onChange={handleChangeDirection} row>
                <FormControlLabel
                  value={ZALGO_DIRECTIONS.DOWN}
                  control={<Radio color="primary" />}
                  label="Down"
                  labelPlacement="start"
                />
                <FormControlLabel
                  value={ZALGO_DIRECTIONS.MID}
                  control={<Radio color="primary" />}
                  label="Centre"
                  labelPlacement="start"
                />
                <FormControlLabel
                  value={ZALGO_DIRECTIONS.UP}
                  control={<Radio color="primary" />}
                  label="Up"
                  labelPlacement="start"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} lg={3} md={5}>
            <FormControl component="fieldset">
              <FormLabel>Magnitude</FormLabel>
              <RadioGroup value={amount} onChange={handleChangeAmount} row>
                <FormControlLabel
                  value={ZALGO_AMOUNTS.MINI}
                  control={<Radio color="primary" />}
                  label="Mini"
                  labelPlacement="start"
                />
                <FormControlLabel
                  value={ZALGO_AMOUNTS.STD}
                  control={<Radio color="primary" />}
                  label="Standard"
                  labelPlacement="start"
                />
                <FormControlLabel
                  value={ZALGO_AMOUNTS.MAXI}
                  control={<Radio color="primary" />}
                  label="Maxi"
                  labelPlacement="start"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} lg={2} md={2}>
            <div className={classes.buttons}>
              <IconButton onClick={handleCopyToClipboard}>
                <IconCopy />
              </IconButton>
              <IconButton onClick={handleClear}>
                <IconClear />
              </IconButton>
            </div>
          </Grid>
        </Grid>
        <div className={classes.result}>
          <pre>
            {result}
          </pre>
        </div>
    </Container>
  )
};

export default Zalgo;
