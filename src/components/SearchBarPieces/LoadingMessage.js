import React from 'react';
import { Box, Heading } from 'grommet';
import { Spinning } from 'grommet-controls';

const LoadingMessage = () => {
  return (
    <Box fill="horizontal" direction="row" align="center" justify="start">
      <Heading level="4" color="color4" margin="large">
        Loading Images
      </Heading>
      <Spinning size="xlarge" color="color4" kind="cube-grid" />
    </Box>
  );
};

export default LoadingMessage;
