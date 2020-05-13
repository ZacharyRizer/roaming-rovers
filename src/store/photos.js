// initial state
const intialState = {
  Curiosity: {
    landingData: '',
    dateRange: [],
    selectedDate: '',
    photos: [],
    cameras: [],
    selectedCamera: '',
  },
  Opportunity: {
    landingData: '',
    dateRange: [],
    selectedDate: '',
    photos: [],
    cameras: [],
    selectedCamera: '',
  },
  Spirit: {
    landingData: '',
    dateRange: [],
    selectedDate: '',
    photos: [],
    cameras: [],
    selectedCamera: '',
  },
};

// Actions
const SET_LANDING_DATE = 'rover/SET_LANDING_DATE';
const SET_DATE_RANGE = 'rover/SET_DATE_RANGE';
const SET_SELECTED_DATE = 'rover/SET_SELECTED_DATE';
const SET_PHOTOS = 'rover/SET_PHOTOS';
const SET_CAMERAS = 'rover/SET_CAMERAS';
const SET_SELECTED_CAMERA = 'rover/SET_SELECTED_CAMERA';

export const setLandingDate = (landingDate, rover) => {
  return {
    type: SET_LANDING_DATE,
    landingDate,
    rover,
  };
};

export const setDateRange = (startDate, maxDate, rover) => {
  return {
    type: SET_DATE_RANGE,
    startDate,
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
    case SET_LANDING_DATE: {
      newState[action.rover].landingDate = action.landingDate;
      return newState;
    }
    case SET_DATE_RANGE: {
      newState[action.rover].dateRange = [action.startDate, action.maxDate];
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
