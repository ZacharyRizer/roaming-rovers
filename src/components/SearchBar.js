import React, { useState, useEffect } from 'react';
import { Box, Button, Form, FormField, TextInput } from 'grommet';
import PhotoPopUp from './SearchBarPieces/PhotoPopUp';
import CameraList from './SearchBarPieces/CameraList';
import LoadingMessage from './SearchBarPieces/LoadingMessage';
import PhotoCards from './SearchBarPieces/PhotoCards';
import SearchMessages from './SearchBarPieces/SearchMessages';
import { apiBaseUrl } from '../config';

const SearchBar = ({ rover }) => {
  const [photoPopUp, setPhotoPopUp] = useState(false);
  const [isLoading, setIsLoaing] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState({});
  const [date, setDate] = useState('');
  const [firstLoad, setFirstLoad] = useState(true);
  const [photosAvailable, setPhotosAvailable] = useState(true);
  const [photos, setPhotos] = useState([]);
  const [cameras, setCameras] = useState([]);

  useEffect(() => {
    loadLatestPhotos();
  }, [rover]);

  const setCameraList = (incomingPhotos) => {
    const usedCameras = [];
    incomingPhotos.forEach((photo) => {
      const currentCamera = photo.camera.full_name;
      if (!usedCameras.includes(currentCamera)) {
        usedCameras.push(currentCamera);
      }
    });
    setCameras(usedCameras);
  };

  const loadLatestPhotos = async () => {
    try {
      const res = await fetch(`${apiBaseUrl}rovers/${rover}/latest_photos`);
      if (!res.ok) {
        throw res;
      }
      const incomingPhotos = await res.json();
      setCameraList(incomingPhotos.latest_photos);
      setPhotos(incomingPhotos.latest_photos);
      setIsLoaing(false);
    } catch (e) {
      console.error(e);
    }
  };

  const loadPhotosByDate = async (date) => {
    try {
      setIsLoaing(true);
      setFirstLoad(false);
      setPhotos([]);
      setCameras([]);
      const res = await fetch(
        `${apiBaseUrl}rovers/${rover}/photos?earth_date=${date.date}`
      );
      if (!res.ok) {
        throw res;
      }
      const incomingPhotos = await res.json();
      if (incomingPhotos.photos.length === 0) {
        setIsLoaing(false);
        setPhotosAvailable(false);
        return;
      } else {
        setPhotosAvailable(true);
        setCameraList(incomingPhotos.photos);
        setPhotos(incomingPhotos.photos);
        setIsLoaing(false);
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
          <Form
            onSubmit={({ value }) => {
              loadPhotosByDate(value);
            }}>
            <FormField name="date" htmlfor="text-input-id">
              <TextInput
                id="text-input-id"
                type="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.currentTarget.value)}
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
        {isLoading ? <LoadingMessage /> : <CameraList cameras={cameras} />}
      </Box>
      <SearchMessages
        rover={rover}
        firstLoad={firstLoad}
        photosAvailable={photosAvailable}
      />
      <PhotoCards photos={photos} handleCardClick={handleCardClick} />
    </Box>
  );
};

export default SearchBar;
