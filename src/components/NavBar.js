import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Heading, Button } from 'grommet';

const NavBar = (props) => {
  return (
    <Box
      tag="header"
      direction="row"
      align="center"
      justify="between"
      background="color4"
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      elevation="medium"
      style={{ zIndex: '1' }}
      {...props}>
      <Link to="/">
        <Button>
          <Heading level="3" margin="small" color="color1">
            Roaming Rovers
          </Heading>
        </Button>
      </Link>
      <Box direction="row">
        <Link to="/Opportunity/image-search">
          <Button color="color1" label="Opportunity" margin="5px" />
        </Link>
        <Link to="/Spirit/image-search">
          <Button color="color1" label="Spirit" margin="5px" />
        </Link>
        <Link to="/Curiosity/image-search">
          <Button color="color1" label="Curiosity" margin="5px" />
        </Link>
      </Box>
    </Box>
  );
};

export default NavBar;
