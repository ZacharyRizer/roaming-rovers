import React, { useState, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Box, ResponsiveContext } from 'grommet';
import { apiBaseUrl } from '../../config';
import { addPhotos } from '../../store/actionsReducer';

const PhotoCards = ({ handleCardClick, rover }) => {
  const size = useContext(ResponsiveContext);

  const [pageNum, setPageNum] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const photos = useSelector((state) => state[rover].photos);
  const selectedCamera = useSelector((state) => state[rover].selectedCamera);
  const selectedDate = useSelector((state) => state[rover].selectedDate);
  const dispatch = useDispatch();

  useEffect(() => {
    setPageNum(1);
    setHasMore(true);
  }, [rover, selectedCamera]);

  const loadMorePhotos = async () => {
    try {
      let baseDateUrl = `${apiBaseUrl}rovers/${rover}/photos?earth_date=${selectedDate}`;
      let fullUrl;
      if (!selectedCamera) {
        fullUrl = `${baseDateUrl}&page=${pageNum + 1}`;
      } else {
        fullUrl = `${baseDateUrl}&camera=${selectedCamera}&page=${pageNum + 1}`;
      }
      const res = await fetch(fullUrl);

      if (!res.ok) {
        throw res;
      }

      const incomingPhotos = await res.json();
      setPageNum(pageNum + 1);

      if (incomingPhotos.photos.length === 0) {
        setHasMore(false);
        return;
      } else {
        dispatch(addPhotos(incomingPhotos.photos, rover));
      }
    } catch (e) {
      console.error(e);
    }
  };

  const photoCards = photos.map((photo) => {
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
  });

  return (
    <>
      {size !== 'small' ? (
        <Box flex overflow="auto" id="photo-container">
          <InfiniteScroll
            dataLength={photos.length}
            next={loadMorePhotos}
            hasMore={hasMore}
            scrollableTarget="photo-container">
            <Box direction="row" wrap={true}>
              {photoCards}
            </Box>
          </InfiniteScroll>
        </Box>
      ) : (
        <Box flex id="photo-container" justify="start">
          <InfiniteScroll
            dataLength={photos.length}
            next={loadMorePhotos}
            hasMore={hasMore}
            scrollableTarget="photo-container">
            <Box direction="row" justify="center" wrap={true}>
              {photoCards}
            </Box>
          </InfiniteScroll>
        </Box>
      )}
    </>
  );
};
export default PhotoCards;
