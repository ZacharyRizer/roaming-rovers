import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Box } from 'grommet';

import CuriosityRoverDetails from './CuriosityRoverDetails.js.js';
import SpiritAndOpportunityDetails from './SpiritAndOpportunityDetails';
import IconicShots from './IconicShots.js';
import SearchAndImages from './SearchAndImages.js';

const RoverMainPage = (props) => {
  const currentRover = props.match.params.rover;
  return (
    <Box width="80%">
      <Switch>
        <Route
          path={`/Curiosity/rover-details`}
          component={CuriosityRoverDetails}
        />
        <Route
          path={`/Opportunity/rover-details`}
          component={SpiritAndOpportunityDetails}
        />
        <Route
          path={`/Spirit/rover-details`}
          component={SpiritAndOpportunityDetails}
        />
        <Route
          path={`/${currentRover}/iconic-shots`}
          render={(props) => <IconicShots {...props} rover={currentRover} />}
        />
        <Route
          path={`/${currentRover}/image-search`}
          render={(props) => (
            <SearchAndImages {...props} rover={currentRover} />
          )}
        />
      </Switch>
    </Box>
  );
};

export default RoverMainPage;
