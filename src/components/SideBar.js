import React from 'react';
import { Box } from 'grommet';

import SideBarDetails from './SideBarDetails';

const SideBar = (props) => {
  const currentRover = props.match.params.rover;
  return (
    <Box
      width="medium"
      background="grey2"
      elevation="large"
      align="center"
      justify="top">
      <SideBarDetails rover={currentRover} />
    </Box>
  );
};

export default SideBar;
