import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, Form, FormField, TextInput } from 'grommet';
import PhotoPopUp from './SearchBarPieces/PhotoPopUp';
import CameraList from './SearchBarPieces/CameraList';
import PhotoCards from './SearchBarPieces/PhotoCards';
import SearchMessages from './SearchBarPieces/SearchMessages';
import { apiBaseUrl } from '../config';
import {
  setDateRange,
  setSelectedDate,
  setPhotos,
  setCameras,
  setSelectedCamera,
} from '../store/photos';

const SearchBar = ({ rover }) => {
  const dateRange = useSelector((state) => state[rover].dateRange);
  const selectedDate = useSelector((state) => state[rover].selectedDate);
  const photos = useSelector((state) => state[rover].photos);
  const cameras = useSelector((state) => state[rover].cameras);
  const selectedCamera = useSelector((state) => state[rover].selectedCamera);

  const dispatch = useDispatch();

  const [photoPopUp, setPhotoPopUp] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [photosAvailable, setPhotosAvailable] = useState(true);

  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    if (dateRange.length === 0) {
      getDateRange();
      loadPhotos();
    }
  }, [rover]);

  const createCameraList = (incomingPhotos) => {
    const usedCameras = [];
    incomingPhotos.forEach((photo) => {
      const currentCamera = photo.camera.full_name;
      if (!usedCameras.includes(currentCamera)) {
        usedCameras.push(currentCamera);
      }
    });
    dispatch(setCameras(usedCameras, rover));
  };

  const getDateRange = async () => {
    try {
      const res = await fetch(`${apiBaseUrl}manifests/${rover}`);
      if (!res.ok) {
        throw res;
      }
      const manifestObj = await res.json();
      const manifest = manifestObj.photo_manifest;
      dispatch(setDateRange(manifest.landing_date, manifest.max_date, rover));
    } catch (e) {
      console.error(e);
    }
  };

  const loadPhotos = async () => {
    try {
      setIsLoading(true);
      dispatch(setPhotos([], rover));
      dispatch(setCameras([], rover));
      const res = await fetch(
        `${apiBaseUrl}rovers/${rover}/photos?earth_date=${selectedDate}`
      );
      if (!res.ok) {
        throw res;
      }
      const incomingPhotos = await res.json();
      if (incomingPhotos.photos.length === 0) {
        setIsLoading(false);
        setPhotosAvailable(false);
        return;
      } else {
        setPhotosAvailable(true);
        createCameraList(incomingPhotos.photos);
        dispatch(setPhotos(incomingPhotos.photos, rover));
        setIsLoading(false);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleCardClick = (photo) => {
    setSelectedPhoto(photo);
    setPhotoPopUp(true);
  };

  return (
    <Box margin={{ top: 'medium', horizontal: 'medium' }}>
      {photoPopUp && (
        <PhotoPopUp photo={selectedPhoto} setPhotoPopUp={setPhotoPopUp} />
      )}
      <Box direction="row">
        <Box margin="small" width="20rem">
          <Form onSubmit={loadPhotos}>
            <FormField name="date" htmlfor="text-input-id">
              <TextInput
                id="text-input-id"
                type="date"
                name="date"
                value={selectedDate}
                onChange={(e) =>
                  dispatch(setSelectedDate(e.currentTarget.value, rover))
                }
              />
            </FormField>
            <Box direction="row" gap="medium">
              <Button
                type="submit"
                color="color4"
                label="Find Photos"
                margin={{ horizontal: '9px' }}
              />
            </Box>
          </Form>
        </Box>
        <CameraList cameras={cameras} />
      </Box>
      <SearchMessages
        rover={rover}
        firstLoad={firstLoad}
        isLoading={isLoading}
        photosAvailable={photosAvailable}
      />
      <PhotoCards photos={photos} handleCardClick={handleCardClick} />
    </Box>
  );
};

export default SearchBar;
