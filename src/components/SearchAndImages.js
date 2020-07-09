import React, { useState, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Button,
  Form,
  FormField,
  ResponsiveContext,
  TextInput,
} from 'grommet';
import PhotoPopUp from './SearchBarPieces/PhotoPopUp';
import CameraList from './SearchBarPieces/CameraList';
import PhotoCards from './SearchBarPieces/PhotoCards';
import SearchMessages from './SearchBarPieces/SearchMessages';
import { apiBaseUrl } from '../config';
import {
  setSelectedDate,
  setSelectedSol,
  setPhotos,
  setIsLoading,
  setCameras,
  setSelectedCamera,
  getMaxDate,
} from '../store/actionsReducer';

const SearchAndImages = ({ rover }) => {
  const size = useContext(ResponsiveContext); // media query

  const startDate = useSelector((state) => state[rover].startDate);
  const maxDate = useSelector((state) => state[rover].maxDate);
  const selectedDate = useSelector((state) => state[rover].selectedDate);
  const selectedSol = useSelector((state) => state[rover].selectedSol);
  const selectedCamera = useSelector((state) => state[rover].selectedCamera);
  const photos = useSelector((state) => state[rover].photos);

  const dispatch = useDispatch();

  const [photoPopUp, setPhotoPopUp] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState({});

  useEffect(() => {
    if (!selectedCamera) {
      const url = `${apiBaseUrl}rovers/${rover}/photos?earth_date=${selectedDate}&page=0`;
      loadPhotos(url);
      dispatch(getMaxDate(rover));
    }
  }, [rover, selectedCamera]);

  useEffect(() => {
    if (selectedCamera) {
      const url = `${apiBaseUrl}rovers/${rover}/photos?earth_date=${selectedDate}&camera=${selectedCamera}&page=0`;
      loadPhotos(url);
    }
  }, [selectedCamera]);

  const loadPhotos = async (url) => {
    try {
      dispatch(setIsLoading(true, rover));
      dispatch(setPhotos([], rover));
      const res = await fetch(url);

      if (!res.ok) {
        throw res;
      }

      const incomingPhotos = await res.json();

      if (incomingPhotos.photos.length === 0) {
        dispatch(setIsLoading(false, rover));
        dispatch(setSelectedSol('', rover));
        dispatch(setCameras([], rover));
        return;
      } else {
        dispatch(setSelectedSol(incomingPhotos.photos[0].sol, rover));
        dispatch(setPhotos(incomingPhotos.photos, rover));
        dispatch(setIsLoading(false, rover));
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleFormSubmission = () => {
    dispatch(setCameras([], rover));
    dispatch(setSelectedCamera('', rover));
    const url = `${apiBaseUrl}rovers/${rover}/photos?earth_date=${selectedDate}&page=0`;
    loadPhotos(url);
  };

  const handleCardClick = (photo) => {
    setSelectedPhoto(photo);
    setPhotoPopUp(true);
  };

  return (
    <>
      {size !== 'small' ? (
        <Box margin={{ top: 'xsmall', horizontal: 'medium' }}>
          {photoPopUp && (
            <PhotoPopUp photo={selectedPhoto} setPhotoPopUp={setPhotoPopUp} />
          )}
          <Box direction="row">
            <Box margin=" small" width="20rem">
              <Form onSubmit={handleFormSubmission}>
                <FormField name="date" htmlfor="text-input-id">
                  <TextInput
                    id="text-input-id"
                    type="date"
                    min={startDate}
                    max={maxDate}
                    name="date"
                    value={selectedDate}
                    onChange={(e) =>
                      dispatch(setSelectedDate(e.currentTarget.value, rover))
                    }
                  />
                </FormField>
                <Box direction="row" gap="small">
                  <Button
                    type="submit"
                    color="color4"
                    label="Find Photos"
                    margin={{ horizontal: '9px' }}
                  />
                </Box>
              </Form>
            </Box>
            <CameraList
              rover={rover}
              photos={photos}
              selectedSol={selectedSol}
            />
          </Box>
          <SearchMessages rover={rover} photos={photos} />
          <PhotoCards rover={rover} handleCardClick={handleCardClick} />
        </Box>
      ) : (
        <Box
          fill
          direction="column"
          align="center"
          justify="start"
          overflow="auto">
          {photoPopUp && (
            <PhotoPopUp photo={selectedPhoto} setPhotoPopUp={setPhotoPopUp} />
          )}
          <Box
            flex={false}
            fill="horizontal"
            direction="row"
            align="center"
            justify="evenly">
            <Form onSubmit={handleFormSubmission}>
              <FormField name="date" htmlfor="text-input-id">
                <TextInput
                  id="text-input-id"
                  type="date"
                  align="center"
                  min={startDate}
                  max={maxDate}
                  name="date"
                  value={selectedDate}
                  onChange={(e) =>
                    dispatch(setSelectedDate(e.currentTarget.value, rover))
                  }
                />
              </FormField>
              <Box direction="row" gap="medium">
                <Button type="submit" color="color4" label="Find Photos" />
              </Box>
            </Form>
            <Box
              flex={false}
              height="xsmall"
              width="xsmall"
              round="xsmall"
              margin="small"
              background={`url(/images/${rover}Profile.jpg)`}
            />
          </Box>
          <CameraList
            rover={rover}
            photos={photos}
            classname="camera-list"
            selectedSol={selectedSol}
          />
          <SearchMessages rover={rover} photos={photos} />
          <PhotoCards rover={rover} handleCardClick={handleCardClick} />
        </Box>
      )}
    </>
  );
};

export default SearchAndImages;
