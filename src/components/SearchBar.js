import React, { useContext } from 'react';
import { Box, Collapsible, Paragraph } from 'grommet';
import AppContext from '../AppContext';

const SearchBar = (prop) => {
  const { showSearchBar } = useContext(AppContext);
  return (
    <Box
      flex
      width="medium"
      background="color5"
      elevation="medium"
      align="center"
      justify="center">
      <Paragraph margin="small" color="color1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Paragraph>
    </Box>
  );
};

export default SearchBar;
