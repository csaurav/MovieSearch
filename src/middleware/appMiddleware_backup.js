import {actionTypes} from '../actions/types';
import NWmovie from '../network/NWmovie';
import movieActions from '../actions/movieActions';
export const appMiddleware = (store) => (next) => (action) => {
  // export const middleware = (store) => (next) => (action) => {
  if (action.type === 'LOAD_HOME_SCREEN_REQUEST') {
    // then fetch movie api list
    NWmovie.fetchInitialMovieList().then((response) => {
      console.log(`response: ${JSON.stringify(response)}`);
      // store.dispatch({
      //   type: actionTypes.LOAD_HOME_SCREEN_SUCCESS,
      //   movieList: response,
      // });
      store.dispatch(movieActions.loadInitialMovieList(response));
    });
  }
  next(action);
};
