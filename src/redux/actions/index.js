import api from '../../api/axios';
import { toast } from 'react-toastify';

export const LIST_ALL_ALBUMS = 'LIST_ALL_ALBUMS';
export const CHANGE_PAGE = 'CHANGE_PAGE';
export const VIEW_DETAILS = 'VIEW_DETAILS';
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
        albums: res.data.data,
        current_page: res.data.current_page,
        next_page_url: res.data.next_page_url,
        prev_page_url: res.data.prev_page_url,
        total: res.data.total,
        last_page: res.data.last_page,
      };

      return dispatch({
        type: LIST_ALL_ALBUMS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      if (error.response.data.error) {
        toast.error(error.response.data.error);
      }
    }
  };
};

export const changePage = (URL) => {
  return async (dispatch) => {
    try {
      const res = await api.get(URL, config);

      const data = {
        albums: res.data.data,
        current_page: res.data.current_page,
        next_page_url: res.data.next_page_url,
        prev_page_url: res.data.prev_page_url,
        total: res.data.total,
        last_page: res.data.last_page,
      };

      return dispatch({
        type: CHANGE_PAGE,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      if (error.response.data.error) {
        toast.error(error.response.data.error);
      }
    }
  };
};

export const getAlbumDetails = (albumData) => {
  return {
    type: VIEW_DETAILS,
    payload: albumData,
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
        albums: res.data.data,
        current_page: res.data.current_page,
        next_page_url: res.data.next_page_url,
        prev_page_url: res.data.prev_page_url,
        total: res.data.total,
        last_page: res.data.last_page,
      };

      return dispatch({
        type: SEARCH_ALBUMS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      if (error.response.data.error) {
        toast.error(error.response.data.error);
      }
    }
  };
};

export const createAlbum = (albumData) => {
  return async (dispatch) => {
    try {
      const res = await api.post('/album', albumData, config);

      return dispatch({
        type: CREATE_ALBUM,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
      if (error.response.data.error) {
        toast.error(error.response.data.error);
      }
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
      if (error.response.data.error) {
        toast.error(error.response.data.error);
      }
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
      if (error.response.data.error) {
        toast.error(error.response.data.error);
      }
    }
  };
};

export const deleteTrack = (id) => {
  return async (dispatch) => {
    try {
      await api.delete(`/track/${id}`, config);

      return dispatch({
        type: DELETE_TRACK,
        payload: id,
      });
    } catch (error) {
      console.log(error);
      if (error.response.data.error) {
        toast.error(error.response.data.error);
      }
    }
  };
};
