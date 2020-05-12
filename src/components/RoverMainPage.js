import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Box } from 'grommet';

import CuriosityRoverDetails from './Curiosity/CuriosityRoverDetails.js';
import CuriosityMissionDetails from './Curiosity/CuriosityMissionDetails.js';
import CuriosityShots from './Curiosity/CuriosityShots.js';
import OpportunityRoverDetails from './Opportunity/OpportunityRoverDetails.js';
import OpportunityMissionDetails from './Opportunity/OpportunityMissionDetails.js';
import OpportunityShots from './Opportunity/OpportunityShots.js';
import SpiritRoverDetails from './Spirit/SpiritRoverDetails.js';
import SpiritMissionDetails from './Spirit/SpiritMissionDetails.js';
import SpiritShots from './Spirit/SpiritShots.js';
import SearchBar from './SearchBar.js';

const RoverMainPage = (props) => {
  return (
    <Box fill align="start" justify="start">
      <Switch>
        <Route
          path={`/Curiosity/rover-details`}
          component={CuriosityRoverDetails}
        />
        <Route
          path="/Curiosity/mission-details"
          component={CuriosityMissionDetails}
        />
        <Route path="/Curiosity/iconic-shots" component={CuriosityShots} />
        <Route
          path={`/Opportunity/rover-details`}
          component={OpportunityRoverDetails}
        />
        <Route
          path="/Opportunity/mission-details"
          component={OpportunityMissionDetails}
        />
        <Route path="/Opportunity/iconic-shots" component={OpportunityShots} />
        <Route path={`/Spirit/rover-details`} component={SpiritRoverDetails} />
        <Route
          path="/Spirit/mission-details"
          component={SpiritMissionDetails}
        />
        <Route path="/Spirit/iconic-shots" component={SpiritShots} />
        <Route path="/Curiosity/search" component={SearchBar} />
      </Switch>
    </Box>
  );
};

export default RoverMainPage;
