import React, { useState, useEffect } from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

const Spinner = ({ delay = 500 }) => {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);

    return function cleanup() {
      clearTimeout(timer);
    }
  });

  return isVisible ? <CircularProgress /> : null;
}

export default Spinner;
