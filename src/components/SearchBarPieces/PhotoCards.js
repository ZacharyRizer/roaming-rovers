import React from 'react';
import { useSelector } from 'react-redux';
import { Box } from 'grommet';

const PhotoCards = ({ handleCardClick, photos, rover }) => {
  const selectedCamera = useSelector((state) => state[rover].selectedCamera);
  const photoCards = [];
  let photosToDisplay = [...photos];

  if (selectedCamera !== '') {
    photosToDisplay = photosToDisplay.filter(
      (photo) => photo.camera.full_name === selectedCamera
    );
  }

  while (photoCards.length < 50 && photoCards.length < photosToDisplay.length) {
    const photo = photosToDisplay[photoCards.length];
    photoCards.push(
      <Box
        className="photo-cards"
        key={photo.id}
        onClick={() => handleCardClick(photo)}
        height="18rem"
        width="18rem"
        elevation="small"
        round="small"
        margin="small"
        background={`url(${photo.img_src})`}
      />
    );
  }

  return (
    <Box flex direction="row" overflow="auto" wrap={true}>
      {photoCards}
    </Box>
  );
};
export default PhotoCards;
