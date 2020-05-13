import React from 'react';
import { Box, Paragraph } from 'grommet';

const SearchMessages = ({ firstLoad, photosAvailable, rover }) => {
  return (
    <Box margin="small">
      {firstLoad ? (
        <Paragraph fill={true} color="color4" size="large">
          These are the latest photos from {rover}! Filter these images by
          camera or enter another date to see more of {rover}'s expedition!
        </Paragraph>
      ) : null}
      {!photosAvailable ? (
        <Paragraph fill={true} margin="small" color="color4" size="large">
          {rover} had other work to do this day, there are no photos available.
          Please select another date.
        </Paragraph>
      ) : null}
    </Box>
  );
};

export default SearchMessages;
