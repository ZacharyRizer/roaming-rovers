import React from 'react';
import { Box, Carousel, Heading, Image } from 'grommet';

const IconicShots = ({ rover }) => {
  return (
    <Box fill align="center" justify="start">
      <Heading level="3" margin="20px" color="color5">
        Some of {rover}'s Best Work!
      </Heading>
      <Box
        height="large"
        width="large"
        margin={{ bottom: 'medium', top: 'none' }}
        overflow="hidden"
        elevation="large"
        round="xsmall">
        <Carousel fill play={4000}>
          <Image fit="contain" src={`/images/${rover}/${rover}1.jpg`} />
          <Image fit="contain" src={`/images/${rover}/${rover}2.jpg`} />
          <Image fit="contain" src={`/images/${rover}/${rover}3.jpg`} />
          <Image fit="contain" src={`/images/${rover}/${rover}4.jpg`} />
          <Image fit="contain" src={`/images/${rover}/${rover}5.jpg`} />
          <Image fit="contain" src={`/images/${rover}/${rover}6.jpg`} />
          <Image fit="contain" src={`/images/${rover}/${rover}7.jpg`} />
          <Image fit="contain" src={`/images/${rover}/${rover}8.jpg`} />
          <Image fit="contain" src={`/images/${rover}/${rover}9.jpg`} />
          <Image fit="contain" src={`/images/${rover}/${rover}10.jpg`} />
          <Image fit="contain" src={`/images/${rover}/${rover}11.jpg`} />
          <Image fit="contain" src={`/images/${rover}/${rover}12.jpg`} />
          <Image fit="contain" src={`/images/${rover}/${rover}13.jpg`} />
          <Image fit="contain" src={`/images/${rover}/${rover}14.jpg`} />
          <Image fit="contain" src={`/images/${rover}/${rover}15.jpg`} />
        </Carousel>
      </Box>
    </Box>
  );
};

export default IconicShots;
