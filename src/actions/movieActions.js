import {actionTypes} from './types';
import NWmovie from '../network/NWmovie';
// import {movieActions} from '.';

const requestInitialMovieList = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.LOAD_HOME_SCREEN_REQUEST,
      payload: null,
    });

    NWmovie.fetchInitialMovieList().then((response) => {
      dispatch({
        type: actionTypes.LOAD_HOME_SCREEN_SUCCESS,
        payload: response,
      });
    });
  };
  // return {
  //   type: actionTypes.LOAD_HOME_SCREEN_REQUEST,
  //   payload: null,
  // };
};
// const loadInitialMovieList = (data) => {
//   return {
//     type: actionTypes.LOAD_HOME_SCREEN_SUCCESS,
//     payload: data,
//   };
// };

const searchMovie = (data) => {
  return (dispatch) => {
    dispatch({type: actionTypes.SEARCH_MOVIE_REQUEST, payload: data});

    NWmovie.searchMovie(data)
      .then((response) => {
        dispatch({
          type: actionTypes.SEARCH_MOVIE_REQUEST_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: actionTypes.SEARCH_MOVIE_REQUEST_ERROR,
          payload: null,
        });
      });
  };
};
export const movieActions = {
  requestInitialMovieList,
  searchMovie,
  // loadInitialMovieList,
};
