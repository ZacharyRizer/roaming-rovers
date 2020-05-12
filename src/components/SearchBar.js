import React, { useContext } from 'react';
import { Box, Layer, Paragraph } from 'grommet';
import AppContext from '../AppContext';

const SearchBar = (prop) => {
  const { setShowSearchBar } = useContext(AppContext);
  return (
    <Layer
      onEsc={() => setShowSearchBar(false)}
      onClickOutside={() => setShowSearchBar(false)}
      position="right"
      full="vertical">
      <Box
        flex
        width="medium"
        background={
          'linear-gradient(180deg, rgba(105,90,72,1) 0%, rgba(25,12,0,1) 85%)'
        }
        elevation="medium"
        align="center"
        justify="center">
        <Paragraph margin="small" color="color1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Paragraph>
      </Box>
    </Layer>
  );
};

export default SearchBar;
