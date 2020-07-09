import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Box, Heading, Paragraph, ResponsiveContext } from 'grommet';
import { Spinning } from 'grommet-controls';

const SearchMessages = ({ photos, rover }) => {
  const size = useContext(ResponsiveContext);

  const startDate = useSelector((state) => state[rover].startDate);
  const selectedDate = useSelector((state) => state[rover].selectedDate);
  const isLoading = useSelector((state) => state[rover].isLoading);

  return (
    <Box margin="xsmall">
      {isLoading ? (
        <Box fill direction="column" align="center" justify="start">
          <Box height="10rem" />
          <Spinning size="xlarge" color="color4" kind="cube-grid" />
          <Heading level="4" color="color4" margin="large">
            Loading Images
          </Heading>
        </Box>
      ) : null}
      {size !== 'small' ? (
        <>
          {startDate === selectedDate && !isLoading ? (
            <Paragraph fill={true} color="color4" size="medium" margin="xsmall">
              These are the first photos {rover} sent back! Filter these images
              by camera or enter another date to see more of {rover}'s
              expedition!
            </Paragraph>
          ) : null}
        </>
      ) : null}
      {photos.length === 0 && !isLoading ? (
        <Paragraph fill={true} margin="small" color="color4" size="large">
          {rover} had other work to do this day, there are no photos available.
          Please select another date.
        </Paragraph>
      ) : null}
    </Box>
  );
};

export default SearchMessages;
