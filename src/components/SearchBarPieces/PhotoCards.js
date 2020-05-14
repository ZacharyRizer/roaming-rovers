import React from 'react';
import { Box } from 'grommet';

const PhotoCards = ({ photos, handleCardClick }) => {
  const photoCards = [];
  while (photoCards.length < 52 && photoCards.length < photos.length) {
    const photo = photos[photoCards.length];
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
