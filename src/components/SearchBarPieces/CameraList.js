import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, RadioButton } from 'grommet';
import { apiBaseUrl } from '../../config';
import { setSelectedCamera, setCameras } from '../../store/actionsReducer';

const CameraList = ({ selectedSol, rover }) => {
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
  }, [selectedSol]);

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
    <Box
      fill="horizontal"
      margin="small"
      direction="row"
      align="center"
      justify="start"
      wrap={true}>
      {cameras.length !== 0 ? (
        <Box margin="small">
          <RadioButton
            checked={selectedCamera === ''}
            name="select all"
            id="all"
            label="Show All Photos"
            onChange={(e) => dispatch(setSelectedCamera('', rover))}
          />
        </Box>
      ) : null}
      {cameras.map((camera) => {
        return (
          <Box margin="small" key={camera}>
            <RadioButton
              checked={selectedCamera === camera}
              name={masterCameraList[camera]}
              id={camera}
              label={masterCameraList[camera]}
              onChange={(e) =>
                dispatch(setSelectedCamera(e.currentTarget.id, rover))
              }
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default CameraList;
