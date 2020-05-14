import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Heading, Paragraph } from 'grommet';
import { Spinning } from 'grommet-controls';

const SearchMessages = ({ isLoading, photosAvailable, rover }) => {
  const startDate = useSelector((state) => state[rover].startDate);
  const selectedDate = useSelector((state) => state[rover].selectedDate);
  return (
    <Box margin="small">
      {startDate === selectedDate && !isLoading ? (
        <Paragraph fill={true} color="color4" size="large">
          These are the first photos {rover} sent back! Filter these images by
          camera or enter another date to see more of {rover}'s expedition!
        </Paragraph>
      ) : null}
      {!photosAvailable ? (
        <Paragraph fill={true} margin="small" color="color4" size="large">
          {rover} had other work to do this day, there are no photos available.
          Please select another date.
        </Paragraph>
      ) : null}
      {isLoading ? (
        <Box fill direction="column" align="center" justify="start">
          <Box height="10rem" />
          <Spinning size="xlarge" color="color4" kind="cube-grid" />
          <Heading level="4" color="color4" margin="large">
            Loading Images
          </Heading>
        </Box>
      ) : null}
    </Box>
  );
};

export default SearchMessages;
