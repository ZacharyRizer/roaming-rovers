import React from 'react';
import { Box, Carousel, Heading, Image, Paragraph } from 'grommet';

const HomePage = (props) => {
  return (
    <Box fill direction="row" align="center" justify="evenly">
      <Box direction="column" alignSelf="start" margin="medium">
        <Heading level="3" color="color4">
          The Mars Exploration Program
        </Heading>
        <Heading level="4" color="color4">
          Mission Statement
        </Heading>
        <Paragraph color="color4">
          The goal of the Mars Exploration Program is to explore Mars and to
          provide a continuous flow of scientific information and discovery
          through a carefully selected series of robotic orbiters, landers and
          mobile laboratories interconnected by a high-bandwidth Mars/Earth
          communications network.
        </Paragraph>
        <Paragraph color="color4">
          A very important part of this mission are the three beloved rovers,
          Opportunity, Spirit, and Curiosity. The twins, Spirit and Opportunity,
          landed in 2004, and Curiosity joined them on the red planet in 2012.
          Between the three, thousands of images have been sent back from Mars.
        </Paragraph>
        <Paragraph color="color4">
          Utilizing NASA's Mars Rover Photos API, this site explores Earth's
          neighbor right alongside Curiosity, Spirit, and Opportunity. Click
          above to see what they saw, and to learn more about the Rover's
          themselves!
        </Paragraph>
      </Box>
      <Box
        height="large"
        width="large"
        margin="medium"
        overflow="hidden"
        elevation="large"
        round="xsmall">
        <Carousel fill color="color1" play={4000}>
          <Image fit="cover" src="/images/Curiosity/Curiosity3.jpg" />
          <Image fit="cover" src="/images/Opportunity/Opportunity3.jpg" />
          <Image fit="cover" src="/images/Spirit/Spirit3.jpg" />
          <Image fit="cover" src="/images/Curiosity/Curiosity5.jpg" />
          <Image fit="cover" src="/images/Opportunity/Opportunity5.jpg" />
          <Image fit="cover" src="/images/Spirit/Spirit5.jpg" />
          <Image fit="cover" src="/images/Curiosity/Curiosity7.jpg" />
          <Image fit="cover" src="/images/Opportunity/Opportunity7.jpg" />
          <Image fit="cover" src="/images/Spirit/Spirit7.jpg" />
          <Image fit="cover" src="/images/Curiosity/Curiosity9.jpg" />
          <Image fit="cover" src="/images/Opportunity/Opportunity9.jpg" />
          <Image fit="cover" src="/images/Spirit/Spirit9.jpg" />
          <Image fit="cover" src="/images/Curiosity/Curiosity11.jpg" />
          <Image fit="cover" src="/images/Opportunity/Opportunity11.jpg" />
          <Image fit="cover" src="/images/Spirit/Spirit11.jpg" />
        </Carousel>
      </Box>
    </Box>
  );
};

export default HomePage;
