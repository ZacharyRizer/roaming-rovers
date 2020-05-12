import React, { useState, useEffect } from 'react';
import { Box, Button, CheckBox, Form, FormField, TextInput } from 'grommet';
import { NavLink } from 'react-router-dom';
import { apiBaseUrl } from '../config';

const SearchBar = (props) => {
  const [photos, setPhotos] = useState([]);
  const [cameras, setCameras] = useState([]);

  useEffect(() => {
    if (photos.length === 0) {
      loadLatestPhotos();
    }
  }, []);

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
      const res = await fetch(`${apiBaseUrl}rovers/curiosity/latest_photos`);
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

  return (
    <Box fill align="center">
      <Box direction="row">
        <Box margin="medium" width="20rem">
          <Form>
            <FormField name="Date" htmlfor="text-input-id" label="Date">
              <TextInput id="text-input-id" name="Date" />
            </FormField>
            <Box direction="row" gap="medium">
              <Button type="submit" color="color1" label="Submit" />
            </Box>
          </Form>
        </Box>
        <Box margin="medium" direction="row">
          {cameras.map((camera) => {
            return <CheckBox key={camera} checked={true} label={camera} />;
          })}
        </Box>
      </Box>
      <Box flex direction="row" wrap={true}>
        {photos.map((photo) => {
          return (
            <NavLink key={photo.id} to={`/photo/${photo.id}`}>
              <Box
                height="medium"
                width="medium"
                elevation="large"
                round="medium"
                margin="medium"
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
