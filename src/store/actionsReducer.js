// initial state
const intialState = {
  Curiosity: {
    startDate: '2012-08-06',
    maxDate: '',
    selectedDate: '2012-08-06',
    photos: [],
    isLoading: true,
    cameras: [],
    selectedCamera: '',
  },
  Opportunity: {
    startDate: '2004-01-26',
    maxDate: '',
    selectedDate: '2004-01-26',
    photos: [],
    isLoading: true,
    cameras: [],
    selectedCamera: '',
  },
  Spirit: {
    startDate: '2004-01-05',
    maxDate: '',
    selectedDate: '2004-01-05',
    photos: [],
    isLoading: true,
    cameras: [],
    selectedCamera: '',
  },
};

// Actions
const SET_MAX_DATE = 'rover/SET_MAX_DATE';
const SET_SELECTED_DATE = 'rover/SET_SELECTED_DATE';
const SET_PHOTOS = 'rover/SET_PHOTOS';
const SET_IS_LOADING = 'rover/SET_IS_LOADING';
const SET_CAMERAS = 'rover/SET_CAMERAS';
const SET_SELECTED_CAMERA = 'rover/SET_SELECTED_CAMERA';

export const setMaxDate = (maxDate, rover) => {
  return {
    type: SET_MAX_DATE,
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

export const setIsLoading = (bool, rover) => {
  return {
    type: SET_IS_LOADING,
    bool,
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
    case SET_MAX_DATE: {
      newState[action.rover].maxDate = action.maxDate;
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
    case SET_IS_LOADING: {
      newState[action.rover].isLoading = action.bool;
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
