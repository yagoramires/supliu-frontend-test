import {
  LIST_ALL_ALBUMS,
  CREATE_ALBUM,
  DELETE_ALBUM,
  CREATE_TRACK,
  DELETE_TRACK,
} from '../actions';

const initialState = {
  current_page: 1,
  albums: [],
  first_page_url: null,
  last_page_url: null,
  next_page_url: null,
  prev_page_url: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_ALL_ALBUMS:
      return action.payload;
    case CREATE_ALBUM:
      return action.payload;
    case DELETE_ALBUM:
      return action.payload;
    case CREATE_TRACK:
      return action.payload;
    case DELETE_TRACK:
      return action.payload;
    default:
      return state;
  }
};

export default rootReducer;
