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
      <NavLink to={`/${rover}/rover-details`}>
        <Button focusIndicator={false}>
          <Heading level="4" margin="medium" color="color4">
            Rover Details
          </Heading>
        </Button>
      </NavLink>
      <NavLink to={`/${rover}/mission-details`}>
        <Button focusIndicator={false}>
          <Heading level="4" margin="medium" color="color4">
            Mission Details
          </Heading>
        </Button>
      </NavLink>
      <NavLink to={`/${rover}/iconic-shots`}>
        <Button focusIndicator={false}>
          <Heading level="4" margin="medium" color="color4">
            {rover}'s Iconic Shots
          </Heading>
        </Button>
      </NavLink>
    </Box>
  );
};

export default SideBarDetails;
