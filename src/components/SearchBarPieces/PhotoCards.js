import React from 'react';
import { Box } from 'grommet';

const PhotoCards = ({ photos, handleCardClick }) => {
  return (
    <Box flex direction="row" overflow="auto" wrap={true}>
      {photos.map((photo) => {
        return (
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
      })}
    </Box>
  );
};
export default PhotoCards;
