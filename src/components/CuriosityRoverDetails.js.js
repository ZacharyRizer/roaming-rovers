import React from 'react';
import {
  Anchor,
  Box,
  Heading,
  Paragraph,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from 'grommet';

const CuriosityRoverDetails = (props) => {
  return (
    <Box fill direction="row" margin="medium">
      <Box flex={false} fill="vertical" height="large" width="large">
        <iframe
          title="3d-Curiosity"
          src="https://mars.nasa.gov/gltf_embed/24584"
          width="100%"
          height="450px"
          frameborder="0"
        />
        <Paragraph margin="medium" color="color4" fill>
          Click and drag to interact with this 3D model of the Curiosity Rover.
        </Paragraph>
        <Box margin={{ horizontal: 'large', vertical: 'none' }}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell scope="col" border="bottom" />
                <TableCell scope="col" border="bottom" />
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell scope="row" border="bottom">
                  <i>
                    <strong>Size</strong>
                  </i>
                </TableCell>
                <TableCell border="bottom">
                  About the size of a small SUV — 10 feet long (not including
                  the arm), 9 feet wide and 7 feet tall — (about 3 meters long
                  (not including the arm), 2.7 meters wide, and 2.2 meters
                  tall), or about the height of a basketball player.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row" border="bottom">
                  <i>
                    <strong>Arm Reach</strong>
                  </i>
                </TableCell>
                <TableCell border="bottom">About 7 feet (2.2 meters)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row" border="bottom">
                  <i>
                    <strong>Mass/Weight </strong>
                  </i>
                </TableCell>
                <TableCell border="bottom">
                  899 kg (1,982 lbs in Earth gravity; 743 lbs in Mars gravity)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row" border="bottom">
                  <i>
                    <strong>Features</strong>
                  </i>
                </TableCell>
                <TableCell border="bottom">
                  Geology lab, rocker-bogie suspension, rock-vaporizing laser
                  and lots of cameras
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </Box>
      <Box direction="column" justify="start" margin={{ horizontal: 'medium' }}>
        <Paragraph margin={{ horizontal: 'medium' }} color="color4">
          Part of NASA's Mars Science Laboratory mission, Curiosity is the
          largest and most capable rover ever sent to Mars. It launched November
          26, 2011 and landed on Mars at 10:32 p.m. PDT on Aug. 5, 2012 (1:32
          a.m. EDT on Aug. 6, 2012). Curiosity set out to answer the question:
          Did Mars ever have the right environmental conditions to support small
          life forms called microbes? Early in its mission, Curiosity's
          scientific tools found chemical and mineral evidence of past habitable
          environments on Mars. It continues to explore the rock record from a
          time when Mars could have been home to microbial life.
        </Paragraph>
        <Heading
          level="4"
          color="color4"
          margin={{ horizontal: 'medium', vertical: 'small' }}>
          Credit
        </Heading>
        <Paragraph
          color="color4"
          margin={{ horizontal: 'medium', vertical: 'small' }}>
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

export default CuriosityRoverDetails;
