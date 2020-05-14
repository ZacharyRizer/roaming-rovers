import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedCamera, setSelectedDate } from '../../store/actionsReducer';
import { Box, RadioButton } from 'grommet';

const CameraList = ({ cameras, rover }) => {
  const selectedCamera = useSelector((state) => state[rover].selectedCamera);
  const dispatch = useDispatch();

  return (
    <Box
      fill="horizontal"
      margin="small"
      direction="row"
      align="center"
      justify="start"
      wrap={true}>
      <Box margin="small">
        <RadioButton
          checked={selectedCamera === ''}
          name="select all"
          id="all"
          label="Show All Photos"
          onChange={(e) => dispatch(setSelectedCamera('', rover))}
        />
      </Box>
      {cameras.map((camera) => {
        return (
          <Box margin="small" key={camera}>
            <RadioButton
              checked={selectedCamera === camera}
              name={camera}
              id={camera}
              label={camera}
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
