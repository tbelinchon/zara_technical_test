import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import { persistDataLocally } from './middleware/persistDataLocally';

import { LOCAL_STORAGE_KEY } from './utils/const';

// Define initState
const persistedState = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
const initState = persistedState || {};

const store = createStore(reducers, initState, applyMiddleware(persistDataLocally, reduxThunk));

export default store;
