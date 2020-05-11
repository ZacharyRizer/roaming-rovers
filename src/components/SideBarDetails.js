import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Heading } from 'grommet';

const SideBarDetails = (props) => {
  return (
    <Box fill direction="column" align="left" justify="top">
      <Heading level="3" margin="medium" color="color4">
        Meet {props.rover}
      </Heading>
      <Box
        height="small"
        width="small"
        elevation="large"
        round="medium"
        margin="medium"
        background={`url(/images/${props.rover}Profile.jpg)`}
      />
      <Link to="/">
        <Button>
          <Heading level="4" margin="medium" color="color4">
            Rover Details
          </Heading>
        </Button>
      </Link>
      <Link to="/">
        <Button>
          <Heading level="4" margin="medium" color="color4">
            Mission Details
          </Heading>
        </Button>
      </Link>
      <Link to="/">
        <Button>
          <Heading level="4" margin="medium" color="color4">
            {props.rover}'s Best Shots
          </Heading>
        </Button>
      </Link>
    </Box>
  );
};

export default SideBarDetails;
