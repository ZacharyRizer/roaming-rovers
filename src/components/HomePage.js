import React from 'react';
import { Box, Carousel, Heading, Image } from 'grommet';

const HomePage = (props) => {
  return (
    <Box fill align="center" justify="start">
      <Heading level="3" margin="20px" color="color5">
        Click above to explore Mars and meet the Rovers!
      </Heading>
      <Box
        height="large"
        width="large"
        overflow="hidden"
        elevation="large"
        round="small">
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
