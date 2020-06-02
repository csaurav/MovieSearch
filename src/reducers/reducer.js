import {actionTypes} from '../actions/types';

const initialState = {
  isLoading: false,
  movieList: {},
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
    default:
      return state;
  }
};

export default appReducer;
