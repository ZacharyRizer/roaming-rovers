import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Box, Heading, Button } from 'grommet';
import { Search } from 'grommet-icons';

import AppContext from '../AppContext';

const NavBar = (props) => {
  const { showSearchBar, setShowSearchBar } = useContext(AppContext);

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
      <Box direction="row" alignSelf="start">
        <Link to="/Curiosity/rover-details">
          <Button color="color1" label="Curiosity" margin="5px" />
        </Link>
        <Link to="/Spirit/rover-details">
          <Button color="color1" label="Spirit" margin="5px" />
        </Link>
        <Link to="/Opportunity/rover-details">
          <Button color="color1" label="Opportunity" margin="5px" />
        </Link>
      </Box>
      <Box direction="row" align="center">
        <Button
          icon={<Search color="color1" />}
          onClick={() => setShowSearchBar(!showSearchBar)}
        />
        <Heading level="4" margin="small" color="color1">
          Discover Mars!
        </Heading>
      </Box>
    </Box>
  );
};

export default NavBar;
