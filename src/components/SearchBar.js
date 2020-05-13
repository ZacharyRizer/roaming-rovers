import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Form,
  FormField,
  Paragraph,
  RadioButton,
  TextInput,
  Heading,
} from 'grommet';
import { Spinning } from 'grommet-controls';
import PhotoPopUp from './PhotoPopUp';
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
        {isLoading ? (
          <Box fill="horizontal" direction="row" align="center" justify="start">
            <Heading level="4" color="color4" margin="large">
              Loading Images
            </Heading>
            <Spinning size="xlarge" color="color4" kind="cube-grid" />
          </Box>
        ) : (
          <Box
            fill="horizontal"
            margin="small"
            direction="row"
            align="center"
            justify="start">
            {cameras.map((camera) => {
              return (
                <Box margin="small" key={camera}>
                  <RadioButton name={camera} label={camera} />
                </Box>
              );
            })}
          </Box>
        )}
      </Box>
      {firstLoad ? (
        <Box margin="small">
          <Paragraph fill={true} color="color4" size="large">
            These are the latest photos from {rover}! Filter these images by
            camera or enter another date to see more of {rover}'s expedition!
          </Paragraph>
        </Box>
      ) : null}
      {!photosAvailable ? (
        <Box margin="small">
          <Paragraph fill={true} margin="small" color="color4" size="large">
            {rover} had other work to do this day, there are no photos
            available. Please select another date.
          </Paragraph>
        </Box>
      ) : null}
      <Box flex direction="row" overflow="auto" wrap={true}>
        {photos.map((photo) => {
          return (
            <Box
              className="photo-cards"
              key={photo.id}
              onClick={() => handleCardClick(photo)}
              height="19rem"
              width="19rem"
              elevation="small"
              round="small"
              margin="small"
              background={`url(${photo.img_src})`}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default SearchBar;
