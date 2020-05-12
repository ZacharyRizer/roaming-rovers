import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Heading } from 'grommet';

const SideBarDetails = ({ rover }) => {
  return (
    <Box fill direction="column" align="center" justify="start">
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
      <NavLink to={`/${rover}/image-search`} className="side-bar-navs">
        <Heading level="4" margin="medium" textAlign="center" rover={rover}>
          Explore Mars With {rover}
        </Heading>
      </NavLink>
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
