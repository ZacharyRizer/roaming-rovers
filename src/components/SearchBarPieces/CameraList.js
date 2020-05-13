import React from 'react';
import { Box, RadioButton } from 'grommet';

const CameraList = ({ cameras }) => {
  return (
    <Box
      fill="horizontal"
      margin="small"
      direction="row"
      align="center"
      justify="start"
      wrap={true}>
      {cameras.map((camera) => {
        return (
          <Box margin="small" key={camera}>
            <RadioButton name={camera} label={camera} />
          </Box>
        );
      })}
    </Box>
  );
};

export default CameraList;
