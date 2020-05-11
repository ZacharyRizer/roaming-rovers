import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Box, Heading } from 'grommet';

import CuriosityRoverDetails from './Curiosity/CuriosityRoverDetails.js';

const RoverMainPage = (props) => {
  const rover = props.match.params.rover;
  return (
    <Box fill align="center" justify="start">
      <Switch>
        <Route
          path="/Curiosity/rover-details"
          component={CuriosityRoverDetails}
        />
      </Switch>
    </Box>
  );
};

export default RoverMainPage;
