import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Box, Button, Heading } from 'grommet';

const SideBarDetails = ({ rover }) => {
  return (
    <Box fill direction="column" align="start" justify="start">
      <Heading level="3" margin="medium" color="color4">
        Meet {rover}
      </Heading>
      <Box
        height="small"
        width="small"
        elevation="large"
        round="medium"
        margin="medium"
        background={`url(/images/${rover}Profile.jpg)`}
      />
      <NavLink to={`/${rover}/rover-details`} className="side-bar-navs">
        <Heading level="4" margin="medium">
          Rover Details
        </Heading>
      </NavLink>
      <NavLink to={`/${rover}/mission-details`} className="side-bar-navs">
        <Heading level="4" margin="medium">
          Mission Details
        </Heading>
      </NavLink>
      <NavLink to={`/${rover}/iconic-shots`} className="side-bar-navs">
        <Heading level="4" margin="medium">
          {rover}'s Iconic Shots
        </Heading>
      </NavLink>
    </Box>
  );
};

export default SideBarDetails;
