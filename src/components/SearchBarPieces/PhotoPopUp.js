import React, { useContext } from 'react';
import { Box, Image, Layer, Paragraph, ResponsiveContext } from 'grommet';
import moment from 'moment';

const PhotoPopUp = ({ photo, setPhotoPopUp }) => {
  const formatedDate = moment(photo.earth_date).format('MMMM Do YYYY');
  const size = useContext(ResponsiveContext);

  return (
    <Layer
      animation="fadeIn"
      onEsc={() => setPhotoPopUp(false)}
      onClick={() => setPhotoPopUp(false)}
      onClickOutside={() => setPhotoPopUp(false)}>
      {size !== 'small' ? (
        <>
          <Image fit="contain" src={photo.img_src} />
          <Paragraph fill alignSelf="center" textAlign="center" color="grey1">
            Photo taken by {photo.rover.name} with the {photo.camera.full_name}{' '}
            on approximately {formatedDate}.
          </Paragraph>
        </>
      ) : (
        <Box
          fill
          background="rgba(0,0,0,0.8)"
          direction="column"
          justify="start">
          <Image fit="contain" src={photo.img_src} />
          <Paragraph fill alignSelf="center" textAlign="center" color="grey1">
            Photo taken by {photo.rover.name} with the {photo.camera.full_name}{' '}
            on approximately {formatedDate}.
          </Paragraph>
        </Box>
      )}
    </Layer>
  );
};

export default PhotoPopUp;
