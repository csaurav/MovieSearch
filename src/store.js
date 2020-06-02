import {createStore, combineReducers, applyMiddleware} from 'redux';
// import {appMiddleware} from './middleware/appMiddleware_backup';
import thunkMiddleware from 'redux-thunk';

import appReducer from './reducers/reducer';

// console.log(`appReducer: ${JSON.stringify(appReducer)}`);
const reducer = combineReducers({appReducer});

// const store = createStore(
//   reducer,
//   applyMiddleware(thunkMiddleware, appMiddleware),
// );

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
export default store;
