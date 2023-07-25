import api from '../../api/axios';

export const LIST_ALL_ALBUMS = 'LIST_ALL_ALBUMS';
export const SEARCH_ALBUMS = 'SEARCH_ALBUMS';
export const CREATE_ALBUM = 'CREATE_ALBUM';
export const DELETE_ALBUM = 'DELETE_ALBUM';
export const CREATE_TRACK = 'CREATE_TRACK';
export const DELETE_TRACK = 'DELETE_TRACK';

const config = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'yago.ramiresx@gmail.com',
  },
};

export const getAllAlbums = () => {
  return async (dispatch) => {
    try {
      const res = await api.get('/album', config);

      const data = {
        current_page: res.data.current_page,
        albums: res.data.data,
        first_page_url: res.data.first_page_url,
        last_page_url: res.data.last_page_url,
        next_page_url: res.data.next_page_url,
        prev_page_url: res.data.prev_page_url,
      };

      return dispatch({
        type: LIST_ALL_ALBUMS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const searchAlbums = (query) => {
  return async (dispatch) => {
    try {
      const res = await api.get(
        `/album?keyword=${query}&limit=10&page=1`,
        config,
      );

      const data = {
        current_page: res.data.current_page,
        albums: res.data.data,
        first_page_url: res.data.first_page_url,
        last_page_url: res.data.last_page_url,
        next_page_url: res.data.next_page_url,
        prev_page_url: res.data.prev_page_url,
      };

      return dispatch({
        type: SEARCH_ALBUMS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createAlbum = (albumData) => {
  return async (dispatch) => {
    try {
      const res = await api.post('/album', albumData, config);
      console.log(res);

      return dispatch({
        type: CREATE_ALBUM,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteAlbum = (id) => {
  return async (dispatch) => {
    try {
      await api.delete(`/album/${id}`, config);

      return dispatch({
        type: DELETE_ALBUM,
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createTrack = (trackData) => {
  return async (dispatch) => {
    try {
      const res = await api.post('/track', trackData, config);

      return dispatch({
        type: CREATE_TRACK,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

// export const deleteTrack = (id) => {
//   return async (dispatch) => {
//     try {
//       const res = await api.get(`/album/${id}`, config);
//       console.log(res);

//       return dispatch({
//         type: LIST_ALL_ALBUMS,
//         payload: '',
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
