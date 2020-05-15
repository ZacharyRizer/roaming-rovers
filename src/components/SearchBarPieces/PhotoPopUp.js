import React from 'react';
import { Image, Layer, Paragraph } from 'grommet';
import moment from 'moment';

const PhotoPopUp = ({ photo, setPhotoPopUp }) => {
  const formatedDate = moment(photo.earth_date).format('MMMM Do YYYY');
  return (
    <Layer
      animation="fadeIn"
      onEsc={() => setPhotoPopUp(false)}
      onClickOutside={() => setPhotoPopUp(false)}>
      <Image fit="contain" src={photo.img_src} />
      <Paragraph fill alignSelf="center" textAlign="center" color="grey1">
        Photo taken by {photo.rover.name} with the {photo.camera.full_name} on
        approximately {formatedDate}.
      </Paragraph>
    </Layer>
  );
};

export default PhotoPopUp;
