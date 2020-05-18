import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Heading } from 'grommet';

const SideBarDetails = ({ rover }) => {
  return (
    <Box fill direction="column" align="center" justify="start">
      <Heading level="3" margin="medium" color="color4">
        {rover}
      </Heading>
      <Box
        flex={false}
        height="small"
        width="small"
        elevation="large"
        round="xsmall"
        margin={{ horizontal: 'medium', top: 'small', bottom: 'medium' }}
        background={`url(/images/${rover}Profile.jpg)`}
      />
      <NavLink to={`/${rover}/image-search`} className="side-bar-navs">
        <Heading
          level="4"
          margin="medium"
          textAlign="center"
          className="side-bar-details">
          Explore Mars With {rover}
        </Heading>
      </NavLink>
      <NavLink to={`/${rover}/rover-details`} className="side-bar-navs">
        <Heading
          level="4"
          margin="medium"
          textAlign="center"
          className="side-bar-details">
          Rover and Mission Details
        </Heading>
      </NavLink>
      <NavLink to={`/${rover}/iconic-shots`} className="side-bar-navs">
        <Heading
          level="4"
          margin="medium"
          textAlign="center"
          className="side-bar-details">
          {rover}'s Iconic Shots
        </Heading>
      </NavLink>
    </Box>
  );
};

export default SideBarDetails;
