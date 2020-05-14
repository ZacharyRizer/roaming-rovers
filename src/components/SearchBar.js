import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, Form, FormField, TextInput } from 'grommet';
import PhotoPopUp from './SearchBarPieces/PhotoPopUp';
import CameraList from './SearchBarPieces/CameraList';
import PhotoCards from './SearchBarPieces/PhotoCards';
import SearchMessages from './SearchBarPieces/SearchMessages';
import { apiBaseUrl } from '../config';
import {
  setMaxDate,
  setSelectedDate,
  setPhotos,
  setIsLoading,
  setCameras,
  setSelectedCamera,
} from '../store/actionsReducer';

const SearchBar = ({ rover }) => {
  const maxDate = useSelector((state) => state[rover].maxDate);
  const selectedDate = useSelector((state) => state[rover].selectedDate);
  const photos = useSelector((state) => state[rover].photos);
  const cameras = useSelector((state) => state[rover].cameras);

  const dispatch = useDispatch();

  const [photoPopUp, setPhotoPopUp] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState({});

  useEffect(() => {
    if (!maxDate) {
      getMaxDate();
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

  const getMaxDate = async () => {
    try {
      const res = await fetch(`${apiBaseUrl}manifests/${rover}`);
      if (!res.ok) {
        throw res;
      }
      const manifest = await res.json();
      dispatch(setMaxDate(manifest.photo_manifest.max_date, rover));
    } catch (e) {
      console.error(e);
    }
  };

  const loadPhotos = async () => {
    try {
      dispatch(setIsLoading(true, rover));
      dispatch(setPhotos([], rover));
      dispatch(setCameras([], rover));
      dispatch(setSelectedCamera('', rover));
      const res = await fetch(
        `${apiBaseUrl}rovers/${rover}/photos?earth_date=${selectedDate}`
      );

      if (!res.ok) {
        throw res;
      }

      const incomingPhotos = await res.json();

      if (incomingPhotos.photos.length === 0) {
        dispatch(setIsLoading(false, rover));
        return;
      } else {
        createCameraList(incomingPhotos.photos);
        dispatch(setPhotos(incomingPhotos.photos, rover));
        dispatch(setIsLoading(false, rover));
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
        {cameras.length === 0 ? null : (
          <CameraList rover={rover} cameras={cameras} />
        )}
      </Box>
      <SearchMessages rover={rover} photos={photos} />
      <PhotoCards
        rover={rover}
        photos={photos}
        handleCardClick={handleCardClick}
      />
    </Box>
  );
};

export default SearchBar;
