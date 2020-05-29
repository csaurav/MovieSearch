import {actionTypes} from '../actions/types';

const initialState = {
  movieList: {},
};

const appReducer = (state = initialState, action = {}) => {
  console.log(
    `initialState: ${JSON.stringify(initialState)}---action: ${JSON.stringify(
      action,
    )} --actionTypes: ${JSON.stringify(actionTypes)}`,
  );
  switch (action.type) {
    case actionTypes.DUMMY_STATE:
      return {...state, text: action.payload.data};

    default:
      return state;
  }
};

export default appReducer;
