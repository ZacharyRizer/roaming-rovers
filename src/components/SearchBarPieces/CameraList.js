import React, { useState, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  DropButton,
  Grid,
  Heading,
  RadioButton,
  ResponsiveContext,
  Text,
} from 'grommet';
import { Spinning } from 'grommet-controls';
import { apiBaseUrl } from '../../config';
import { setSelectedCamera, setCameras } from '../../store/actionsReducer';

const CameraList = ({ photos, selectedSol, rover }) => {
  const size = useContext(ResponsiveContext); // media query
  const [dropOpen, setDropOpen] = useState(false);

  const masterCameraList = {
    FHAZ: 'Front Hazard Avoidance Camera',
    NAVCAM: 'Navigation Camera',
    MAST: 'Mast Camera',
    CHEMCAM: 'Chemistry and Camera Complex',
    MAHLI: 'Mars Hand Lens Imager',
    MARDI: 'Mars Descent Imager',
    RHAZ: 'Rear Hazard Avoidance Camera',
    PANCAM: 'Panoramic Camera',
    MINITES: 'Miniature Thermal Emission Spectrometer (Mini-TES)',
    ENTRY: 'Entry, Descent, and Landing Camera',
  };

  const cameras = useSelector((state) => state[rover].cameras);
  const selectedCamera = useSelector((state) => state[rover].selectedCamera);
  const dispatch = useDispatch();

  useEffect(() => {
    createCameraList();
  }, [photos]);

  const createCameraList = async () => {
    try {
      const res = await fetch(`${apiBaseUrl}manifests/${rover}`);
      if (!res.ok) throw res;
      const manifest = await res.json();
      if (selectedSol === '') return; // clause to get rid of error
      const photosFromSol = manifest.photo_manifest.photos.find(
        ({ sol }) => sol === selectedSol
      );
      const cameras = photosFromSol.cameras;
      dispatch(setCameras(cameras, rover));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      {cameras.length !== 0 ? (
        <>
          {size !== 'small' ? (
            <Grid
              fill={true}
              rows={['1/2', '1/2']}
              columns={['1/4', '1/4', '1/4', '1/4']}
              align="center">
              <Box direction="row" margin={{ horizontal: 'small' }}>
                <RadioButton
                  checked={selectedCamera === ''}
                  name="select all"
                  id="all"
                  onChange={(e) => dispatch(setSelectedCamera('', rover))}
                />
                <Text margin="small" color="color4">
                  Show All Photos
                </Text>
              </Box>
              {cameras.map((camera) => {
                return (
                  <Box
                    key={camera}
                    direction="row"
                    margin={{ horizontal: 'small' }}>
                    <RadioButton
                      checked={selectedCamera === camera}
                      name={masterCameraList[camera]}
                      id={camera}
                      onChange={(e) =>
                        dispatch(setSelectedCamera(e.currentTarget.id, rover))
                      }
                    />
                    <Text margin="small" color="color4">
                      {masterCameraList[camera]}
                    </Text>
                  </Box>
                );
              })}
            </Grid>
          ) : (
            <DropButton
              label="Filter By Camera"
              margin={{ vertical: 'medium' }}
              dropAlign={{ top: 'bottom', right: 'right' }}
              color="color4"
              open={dropOpen}
              onClick={() => setDropOpen(true)}
              dropContent={
                <>
                  <Box direction="row" margin={{ horizontal: 'small' }}>
                    <RadioButton
                      checked={selectedCamera === ''}
                      name="select all"
                      id="all"
                      onClick={() => setDropOpen(false)}
                      onChange={(e) => dispatch(setSelectedCamera('', rover))}
                    />
                    <Text margin="small" color="color4">
                      Show All Photos
                    </Text>
                  </Box>
                  {cameras.map((camera) => {
                    return (
                      <Box
                        key={camera}
                        direction="row"
                        margin={{ horizontal: 'small' }}>
                        <RadioButton
                          checked={selectedCamera === camera}
                          name={masterCameraList[camera]}
                          id={camera}
                          onClick={() => setDropOpen(false)}
                          onChange={(e) =>
                            dispatch(
                              setSelectedCamera(e.currentTarget.id, rover)
                            )
                          }
                        />
                        <Text margin="small" color="color4">
                          {masterCameraList[camera]}
                        </Text>
                      </Box>
                    );
                  })}
                </>
              }
            />
          )}
        </>
      ) : (
        <Box direction="row" align="center" justify="start" margin="small">
          <Heading level="4" color="color4" margin="large">
            Loading Cameras
          </Heading>
          <Spinning size="large" color="color4" kind="circle" />
        </Box>
      )}
    </>
  );
};

export default CameraList;
