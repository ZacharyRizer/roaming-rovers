import React, { useContext } from 'react';
import {
  Box,
  Carousel,
  Heading,
  Image,
  Paragraph,
  ResponsiveContext,
} from 'grommet';

const HomePage = (props) => {
  const size = useContext(ResponsiveContext);
  return (
    <>
      {size !== 'small' ? (
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
              through a carefully selected series of robotic orbiters, landers
              and mobile laboratories interconnected by a high-bandwidth
              Mars/Earth communications network.
            </Paragraph>
            <Paragraph color="color4">
              A very important part of this mission are the three beloved
              rovers, Opportunity, Spirit, and Curiosity. The twins, Spirit and
              Opportunity, landed in 2004, and Curiosity joined them on the red
              planet in 2012. Between the three, thousands of images have been
              sent back from Mars.
            </Paragraph>
            <Paragraph color="color4">
              Utilizing NASA's Mars Rover Photos API, this site explores Earth's
              neighbor right alongside Curiosity, Spirit, and Opportunity. Click
              above to see what they saw, and to learn more about the Rover's
              themselves!
            </Paragraph>
          </Box>
          <Box
            flex={false}
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
      ) : (
        <Box fill direction="column" align="center" justify="start">
          {/* <Box flex={false} height="400px" /> */}
          <Heading level="3" color="color4" margin="small">
            The Mars Exploration Program
          </Heading>
          <Box
            flex={false}
            height="40%"
            width="75%"
            margin="small"
            overflow="hidden"
            elevation="large"
            round="xsmall">
            <Carousel fill={true} color="color1" play={4000}>
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
          <Paragraph color="color4" margin="small" textAlign="center">
            The goal of the Mars Exploration Program is to explore Mars and to
            provide a continuous flow of scientific information and discovery
            through a carefully selected series of robotic orbiters, landers and
            mobile laboratories interconnected by a high-bandwidth Mars/Earth
            communications network.
          </Paragraph>
          <Paragraph color="color4" margin="small" textAlign="center">
            A very important part of this mission are the three beloved rovers,
            Opportunity, Spirit, and Curiosity. The twins, Spirit and
            Opportunity, landed in 2004, and Curiosity joined them on the red
            planet in 2012. Between the three, thousands of images have been
            sent back from Mars.
          </Paragraph>
          <Paragraph color="color4" margin="small" textAlign="center">
            Utilizing NASA's Mars Rover Photos API, this site explores Earth's
            neighbor right alongside Curiosity, Spirit, and Opportunity. Click
            above to see the raw images sent back to Earth!
          </Paragraph>
        </Box>
      )}
    </>
  );
};

export default HomePage;
