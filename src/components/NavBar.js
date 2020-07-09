import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  DropButton,
  Heading,
  Image,
  ResponsiveContext,
} from 'grommet';

const NavBar = (props) => {
  const size = useContext(ResponsiveContext); // media query
  const [dropOpen, setDropOpen] = useState(false);
  return (
    <>
      {size !== 'small' ? (
        <Box
          tag="header"
          direction="row"
          align="center"
          justify="between"
          background="color4"
          pad={{ left: 'medium', right: 'small', vertical: 'small' }}
          elevation="medium"
          style={{ zIndex: '1' }}
          {...props}>
          <Link to="/">
            <Button focusIndicator={false}>
              <Box direction="row" align="center" justify="evenly">
                <Box
                  height="xxsmall"
                  width="xxsmall"
                  margin={{ left: 'small' }}>
                  <Image fit="cover" src="/images/mars.svg" />
                </Box>
                <Heading level="3" margin="small" color="color1">
                  Roaming Rovers
                </Heading>
              </Box>
            </Button>
          </Link>
          <Box direction="row">
            <Link to="/Opportunity/image-search">
              <Button color="color1" label="Opportunity" margin="5px" />
            </Link>
            <Link to="/Spirit/image-search">
              <Button color="color1" label="Spirit" margin="5px" />
            </Link>
            <Link to="/Curiosity/image-search">
              <Button color="color1" label="Curiosity" margin="5px" />
            </Link>
          </Box>
        </Box>
      ) : (
        <Box
          tag="header"
          direction="row"
          align="center"
          justify="between"
          background="color4"
          pad="small"
          elevation="medium"
          style={{ zIndex: '1' }}
          {...props}>
          <Link to="/">
            <Button>
              <Box direction="row" align="center" justify="evenly">
                <Box
                  height="xxsmall"
                  width="xxsmall"
                  margin={{ left: 'small' }}>
                  <Image fit="cover" src="/images/mars.svg" />
                </Box>
                <Heading level="3" margin="small" color="color1">
                  Roaming Rovers
                </Heading>
              </Box>
            </Button>
          </Link>
          <DropButton
            label="Photos"
            open={dropOpen}
            onClick={() => setDropOpen(true)}
            dropAlign={{ top: 'bottom', right: 'right' }}
            color="color1"
            dropContent={
              <Box background="color5" align="center">
                <Link to="/Opportunity/image-search">
                  <Button
                    color="color1"
                    label="Opportunity"
                    margin="5px"
                    onClick={() => setDropOpen(false)}
                  />
                </Link>
                <Link to="/Spirit/image-search">
                  <Button
                    color="color1"
                    label="Spirit"
                    margin="5px"
                    onClick={() => setDropOpen(false)}
                  />
                </Link>
                <Link to="/Curiosity/image-search">
                  <Button
                    color="color1"
                    label="Curiosity"
                    margin="5px"
                    onClick={() => setDropOpen(false)}
                  />
                </Link>
              </Box>
            }
          />
        </Box>
      )}
    </>
  );
};

export default NavBar;
