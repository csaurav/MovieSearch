import {actionTypes} from '../actions/types';
import {act} from 'react-test-renderer';

const initialState = {
  isLoading: false,
  movieList: {},
  error: false,
};

const appReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.LOAD_HOME_SCREEN_REQUEST:
      return {...state, isLoading: true};
    case actionTypes.LOAD_HOME_SCREEN_SUCCESS:
      console.log(`im in actionTypes.LOAD_HOME_SCREEN_SUCCESS`);
      return {
        ...state,
        movieList: action.payload,
        isLoading: false,
      };
    case actionTypes.SEARCH_MOVIE_REQUEST:
      return {...state, isLoading: true};
    case actionTypes.SEARCH_MOVIE_REQUEST_SUCCESS:
      return {...state, isLoading: false, movieList: action.payload};
    case actionTypes.SEARCH_MOVIE_REQUEST_ERROR:
      return {...state, isLoading: false, error: true};
    default:
      return state;
  }
};

export default appReducer;
