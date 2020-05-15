import { merge } from 'lodash';
import { apiBaseUrl } from '../config';
// initial state
const intialState = {
  Curiosity: {
    startDate: '2012-08-06',
    maxDate: '',
    selectedDate: '2012-08-06',
    selectedSol: '',
    photos: [],
    isLoading: true,
    cameras: [],
    selectedCamera: '',
    pageNum: 1,
  },
  Opportunity: {
    startDate: '2004-01-26',
    maxDate: '',
    selectedDate: '2004-01-26',
    selectedSol: '',
    photos: [],
    isLoading: true,
    cameras: [],
    selectedCamera: '',
    pageNum: 1,
  },
  Spirit: {
    startDate: '2004-01-05',
    maxDate: '',
    selectedDate: '2004-01-05',
    selectedSol: '',
    photos: [],
    isLoading: true,
    cameras: [],
    selectedCamera: '',
    pageNum: 1,
  },
};

// Actions
const SET_MAX_DATE = 'rover/SET_MAX_DATE';
const SET_SELECTED_DATE = 'rover/SET_SELECTED_DATE';
const SET_SELECTED_SOL = 'rover/SET_SELECTED_SOL';
const SET_PHOTOS = 'rover/SET_PHOTOS';
const ADD_PHOTOS = 'rover/ADD_PHOTOS';
const SET_IS_LOADING = 'rover/SET_IS_LOADING';
const SET_CAMERAS = 'rover/SET_CAMERAS';
const SET_SELECTED_CAMERA = 'rover/SET_SELECTED_CAMERA';
const SET_PAGE_NUM = 'rover/SET_PAGE_NUM';

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

export const setSelectedSol = (sol, rover) => {
  return {
    type: SET_SELECTED_SOL,
    sol,
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

export const addPhotos = (photos, rover) => {
  return {
    type: ADD_PHOTOS,
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

export const setPageNum = (num, rover) => {
  return {
    type: SET_PAGE_NUM,
    num,
    rover,
  };
};

// Reducer
export default function reducer(state = intialState, action) {
  let newState = merge({}, state);
  switch (action.type) {
    case SET_MAX_DATE: {
      newState[action.rover].maxDate = action.maxDate;
      return newState;
    }
    case SET_SELECTED_DATE: {
      newState[action.rover].selectedDate = action.date;
      return newState;
    }
    case SET_SELECTED_SOL: {
      newState[action.rover].selectedSol = action.sol;
      return newState;
    }
    case SET_PHOTOS: {
      newState[action.rover].photos = action.photos;
      return newState;
    }
    case ADD_PHOTOS: {
      newState[action.rover].photos.push(...action.photos);
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
    case SET_PAGE_NUM: {
      newState[action.rover].pageNum = action.num;
      return newState;
    }
    default: {
      return state;
    }
  }
}

// Thunks
export const getMaxDate = (rover) => async (dispatch) => {
  try {
    const res = await fetch(`${apiBaseUrl}manifests/${rover}`);
    if (!res.ok) throw res;
    const manifest = await res.json();
    dispatch(setMaxDate(manifest.photo_manifest.max_date, rover));
  } catch (e) {
    console.error(e);
  }
};
