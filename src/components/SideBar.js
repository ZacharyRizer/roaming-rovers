import React from 'react';
import { Box } from 'grommet';

import SideBarDetails from './SideBarDetails';

const SideBar = (props) => {
  const currentRover = props.match.params.rover;
  return (
    <Box
      width="20%"
      background="grey2"
      elevation="large"
      align="center"
      justify="start">
      <SideBarDetails rover={currentRover} />
    </Box>
  );
};

export default SideBar;
