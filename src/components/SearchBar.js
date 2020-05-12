import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  CheckBox,
  Form,
  FormField,
  Paragraph,
  TextInput,
} from 'grommet';
import { NavLink } from 'react-router-dom';
import { apiBaseUrl } from '../config';

const SearchBar = ({ rover }) => {
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
    } catch (e) {
      console.error(e);
    }
  };

  const loadPhotosByDate = async (date) => {
    try {
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
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Box fill margin="medium">
      <Box direction="row">
        <Box margin="small" width="20rem">
          <Form
            onSubmit={({ value }) => {
              loadPhotosByDate(value);
            }}>
            <FormField name="date" htmlfor="text-input-id" label="Date">
              <TextInput
                id="text-input-id"
                name="date"
                placeholder="yyyy-mm-dd"
              />
            </FormField>
            <Box direction="row" gap="medium">
              <Button type="submit" color="color1" label="Submit" />
            </Box>
          </Form>
        </Box>
        <Box margin="small" direction="row">
          {cameras.map((camera) => {
            return <CheckBox key={camera} checked={true} label={camera} />;
          })}
        </Box>
      </Box>
      {firstLoad ? (
        <Box fill="horizontal" margin="small">
          <Paragraph fill={true} color="color4" size="large">
            These are the latest photos from {rover}! Filter these images by
            camera or enter another date to see more of {rover}'s expedition!
          </Paragraph>
        </Box>
      ) : null}
      {!photosAvailable ? (
        <Box fill="horizontal">
          <Paragraph fill={true} margin="small" color="color4" size="large">
            {rover} had other work to do this day, there are no photos
            available. Please select another date.
          </Paragraph>
        </Box>
      ) : null}
      <Box flex direction="row" overflow="auto" wrap={true}>
        {photos.map((photo) => {
          return (
            <NavLink key={photo.id} to={`/photo/${photo.id}`}>
              <Box
                height="19rem"
                width="19rem"
                elevation="large"
                round="medium"
                margin="small"
                background={`url(${photo.img_src})`}
              />
            </NavLink>
          );
        })}
      </Box>
    </Box>
  );
};

export default SearchBar;
