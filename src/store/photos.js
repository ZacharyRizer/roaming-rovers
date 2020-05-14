// initial state
const intialState = {
  Curiosity: {
    dateRange: [],
    selectedDate: '2012-08-06',
    photos: [],
    cameras: [],
    selectedCamera: '',
  },
  Opportunity: {
    dateRange: [],
    selectedDate: '2004-01-26',
    photos: [],
    cameras: [],
    selectedCamera: '',
  },
  Spirit: {
    dateRange: [],
    selectedDate: '2004-01-05',
    photos: [],
    cameras: [],
    selectedCamera: '',
  },
};

// Actions
const SET_DATE_RANGE = 'rover/SET_DATE_RANGE';
const SET_SELECTED_DATE = 'rover/SET_SELECTED_DATE';
const SET_PHOTOS = 'rover/SET_PHOTOS';
const SET_CAMERAS = 'rover/SET_CAMERAS';
const SET_SELECTED_CAMERA = 'rover/SET_SELECTED_CAMERA';

export const setDateRange = (landingDate, maxDate, rover) => {
  return {
    type: SET_DATE_RANGE,
    landingDate,
    maxDate,
    rover,
  };
};

export const setSelectedDate = (date, rover) => {
  return {
    type: SET_SELECTED_DATE,
    date,
    rover,
  };
};

export const setPhotos = (photos, rover) => {
  return {
    type: SET_PHOTOS,
    photos,
    rover,
  };
};

export const setCameras = (cameras, rover) => {
  return {
    type: SET_CAMERAS,
    cameras,
    rover,
  };
};

export const setSelectedCamera = (selectedCamera, rover) => {
  return {
    type: SET_SELECTED_CAMERA,
    selectedCamera,
    rover,
  };
};

// Reducer
export default function reducer(state = intialState, action) {
  let newState = { ...state };
  switch (action.type) {
    case SET_DATE_RANGE: {
      newState[action.rover].dateRange = [action.landingDate, action.maxDate];
      return newState;
    }
    case SET_SELECTED_DATE: {
      newState[action.rover].selectedDate = action.date;
      return newState;
    }
    case SET_PHOTOS: {
      newState[action.rover].photos = action.photos;
      return newState;
    }
    case SET_CAMERAS: {
      newState[action.rover].cameras = action.cameras;
      return newState;
    }
    case SET_SELECTED_CAMERA: {
      newState[action.rover].selectedCamera = action.selectedCamera;
      return newState;
    }
    default: {
      return state;
    }
  }
}
