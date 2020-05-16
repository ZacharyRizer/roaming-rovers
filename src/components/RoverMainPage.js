import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Box, ResponsiveContext } from 'grommet';

import CuriosityRoverDetails from './CuriosityRoverDetails.js.js';
import SpiritAndOpportunityDetails from './SpiritAndOpportunityDetails';
import IconicShots from './IconicShots.js';
import SearchAndImages from './SearchAndImages.js';

const RoverMainPage = (props) => {
  const size = useContext(ResponsiveContext); // media query
  const currentRover = props.match.params.rover;
  return (
    <>
      {size !== 'small' ? (
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
              render={(props) => (
                <IconicShots {...props} rover={currentRover} />
              )}
            />
            <Route
              path={`/${currentRover}/image-search`}
              render={(props) => (
                <SearchAndImages {...props} rover={currentRover} />
              )}
            />
          </Switch>
        </Box>
      ) : (
        <Box width="100%">
          <Route
            path={`/${currentRover}/image-search`}
            render={(props) => (
              <SearchAndImages {...props} rover={currentRover} />
            )}
          />
        </Box>
      )}
    </>
  );
};

export default RoverMainPage;
