import {createStore, combineReducers, applyMiddleware} from 'redux';
import {middleware} from './middleware/middleware';

import appReducer from './reducers/reducer';

console.log(`appReducer: ${JSON.stringify(appReducer)}`);
const reducer = combineReducers({appReducer});

const store = createStore(reducer, applyMiddleware(middleware));

export default store;
