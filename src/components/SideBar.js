import React, { useContext } from 'react';
import { Box, ResponsiveContext } from 'grommet';

import SideBarDetails from './SideBarDetails';

const SideBar = (props) => {
  const size = useContext(ResponsiveContext); // media query
  const currentRover = props.match.params.rover;
  return (
    <>
      {size !== 'small' ? (
        <Box
          width="20%"
          background="grey2"
          elevation="large"
          align="center"
          justify="start">
          <SideBarDetails rover={currentRover} />
        </Box>
      ) : null}
    </>
  );
};

export default SideBar;
