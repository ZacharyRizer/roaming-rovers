import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Box } from 'grommet';

import CuriosityRoverDetails from './Curiosity/CuriosityRoverDetails.js';
import CuriosityMissionDetails from './Curiosity/CuriosityMissionDetails.js';
import OpportunityRoverDetails from './Opportunity/OpportunityRoverDetails.js';
import OpportunityMissionDetails from './Opportunity/OpportunityMissionDetails.js';
import SpiritRoverDetails from './Spirit/SpiritRoverDetails.js';
import SpiritMissionDetails from './Spirit/SpiritMissionDetails.js';
import IconicShots from './IconicShots.js';
import SearchBar from './SearchBar.js';

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
          path="/Curiosity/mission-details"
          component={CuriosityMissionDetails}
        />
        <Route
          path={`/Opportunity/rover-details`}
          component={OpportunityRoverDetails}
        />
        <Route
          path="/Opportunity/mission-details"
          component={OpportunityMissionDetails}
        />
        <Route path={`/Spirit/rover-details`} component={SpiritRoverDetails} />
        <Route
          path="/Spirit/mission-details"
          component={SpiritMissionDetails}
        />
        <Route
          path={`/${currentRover}/iconic-shots`}
          render={(props) => <IconicShots {...props} rover={currentRover} />}
        />
        <Route
          path={`/${currentRover}/image-search`}
          render={(props) => <SearchBar {...props} rover={currentRover} />}
        />
      </Switch>
    </Box>
  );
};

export default RoverMainPage;
