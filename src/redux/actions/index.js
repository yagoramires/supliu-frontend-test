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
      console.log(res.data);

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
      console.log(res.data);

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

// export const createAlbum = () => {
//   return async (dispatch) => {
//     try {
//       const res = await api.post('/album', config);
//       console.log(res);

//       return dispatch({
//         action: CREATE_ALBUM,
//         payload: '',
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// export const deleteAlbum = (id) => {
//   return async (dispatch) => {
//     try {
//       const res = await api.get(`/album/${id}`, config);
//       console.log(res);

//       return dispatch({
//         action: LIST_ALL_ALBUMS,
//         payload: '',
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// export const createTrack = () => {
//   return async (dispatch) => {
//     try {
//       const res = await api.post('/track', config);
//       console.log(res);

//       return dispatch({
//         action: CREATE_TRACK,
//         payload: '',
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// export const deleteTrack = (id) => {
//   return async (dispatch) => {
//     try {
//       const res = await api.get(`/album/${id}`, config);
//       console.log(res);

//       return dispatch({
//         action: LIST_ALL_ALBUMS,
//         payload: '',
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
