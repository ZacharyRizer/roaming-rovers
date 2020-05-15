import React from 'react';
import { Anchor, Box, Heading, Image, Paragraph } from 'grommet';

const SpiritAndOpportunityDetails = (props) => {
  return (
    <Box fill direction="row" margin="medium">
      <Box flex={false} height="45rem" width="55rem">
        <Image
          fit="contain"
          margin="medium"
          src="/images/MER_ByTheNumbers_infographic.jpg"
        />
      </Box>
      <Box
        direction="column"
        justify="start"
        margin={{ horizontal: 'medium', vertical: 'large' }}>
        <Paragraph margin="medium" color="color4">
          This infographic highlights NASA’s twin robot geologists, the Mars
          Exploration Rovers (MER) Spirit and Opportunity. The rovers landed on
          the Red Planet in 2004, in search of answers about the history of
          water on Mars. Spirit concluded its mission in 2010. Opportunity last
          communicated with Earth on June 10, 2018, as a planet-wide dust storm
          blanketed the solar-powered rover's location on Mars.
        </Paragraph>
        <Heading
          level="4"
          color="color4"
          margin={{ horizontal: 'medium', top: 'large', bottom: 'small' }}>
          Credit
        </Heading>
        <Paragraph
          color="color4"
          margin={{ horizontal: 'medium', top: 'small', bottom: 'large' }}>
          NASA/JPL-Caltech
        </Paragraph>
        <Anchor
          href="https://mars.nasa.gov/"
          label="Learn more - Mars Exploration Program"
          margin="medium"
        />
      </Box>
    </Box>
  );
};

export default SpiritAndOpportunityDetails;
