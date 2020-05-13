import React from 'react';
import { Image, Layer, Paragraph } from 'grommet';

const PhotoPopUp = ({ photo, setPhotoPopUp }) => {
  return (
    <Layer
      animation="fadeIn"
      onEsc={() => setPhotoPopUp(false)}
      onClickOutside={() => setPhotoPopUp(false)}>
      <Image fit="contain" src={photo.img_src} />
      <Paragraph fill alignSelf="center" textAlign="center" color="grey1">
        Photo taken by {photo.rover.name} with the {photo.camera.full_name} on
        approximately {photo.earth_date}.
      </Paragraph>
    </Layer>
  );
};

export default PhotoPopUp;
