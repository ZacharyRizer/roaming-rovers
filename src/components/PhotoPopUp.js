import React from 'react';
import { Box, Layer } from 'grommet';
import AppContext from '../AppContext';

const PhotoPopUp = ({ photo }) => {
  return (
    <Box>
      <Layer
        onEsc={() => setPhotoPupUp(false)}
        onClickOutside={() => setPhotoPupUp(false)}>
        <Box
          key={photo.id}
          className="photo-cards"
          height="19rem"
          width="19rem"
          elevation="small"
          round="small"
          margin="small"
          background={`url(${photo.img_src})`}
        />
      </Layer>
    </Box>
  );
};

export default PhotoPopUp;
