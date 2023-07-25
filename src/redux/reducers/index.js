import {
  LIST_ALL_ALBUMS,
  SEARCH_ALBUMS,
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

    case SEARCH_ALBUMS:
      return action.payload;

    case CREATE_ALBUM:
      console.log({ ...state, albums: [...state.albums, action.payload] });
      return { ...state, albums: [...state.albums, action.payload] };

    case DELETE_ALBUM:
      return {
        ...state,
        albums: [
          ...state.albums.filter((album) => album.id !== action.payload),
        ],
      };

    case CREATE_TRACK: {
      const selectOldAlbum = state.albums.find(
        (album) => album.id === action.payload.album_id,
      );

      const updateAlbum = {
        ...selectOldAlbum,
        tracks: [...selectOldAlbum.tracks, action.payload],
      };

      const albumsList = state.albums.filter(
        (album) => album.id !== action.payload.album_id,
      );
      albumsList.push(updateAlbum);

      return { ...state, albums: albumsList };
    }

    case DELETE_TRACK:
      return action.payload;

    default:
      return state;
  }
};

export default rootReducer;
