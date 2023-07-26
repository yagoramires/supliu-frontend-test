import {
  LIST_ALL_ALBUMS,
  CHANGE_PAGE,
  VIEW_DETAILS,
  SEARCH_ALBUMS,
  CREATE_ALBUM,
  DELETE_ALBUM,
  CREATE_TRACK,
  DELETE_TRACK,
} from '../actions';

const initialState = {
  current_page: 1,
  albums: [],
  next_page_url: null,
  prev_page_url: null,
  selectedAlbum: {},
  total: 0,
  last_page: 1,
  type: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_ALL_ALBUMS:
      return action.payload;

    case CHANGE_PAGE:
      return action.payload;

    case VIEW_DETAILS:
      return { ...state, selectedAlbum: action.payload };

    case SEARCH_ALBUMS:
      return action.payload;

    case CREATE_ALBUM:
      return {
        ...state,
        type: 'ADD_ALBUM',
        total: state.total + 1,
        albums: [...state.albums, action.payload],
      };

    case DELETE_ALBUM:
      return {
        ...state,
        type: 'REMOVE_ALBUM',
        total: state.total - 1,
        albums: [
          ...state.albums.filter((album) => album.id !== action.payload),
        ],
      };

    case CREATE_TRACK:
      return {
        ...state,
        selectedAlbum: {
          ...state.selectedAlbum,
          tracks: [...state.selectedAlbum.tracks, action.payload],
        },
      };

    case DELETE_TRACK:
      return {
        ...state,
        selectedAlbum: {
          ...state.selectedAlbum,
          tracks: state.selectedAlbum.tracks.filter(
            (track) => track.id !== action.payload,
          ),
        },
      };

    default:
      return state;
  }
};

export default rootReducer;
