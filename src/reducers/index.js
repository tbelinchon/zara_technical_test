import { combineReducers } from 'redux';

import pageReducer from './pageReducer';
import podcastsListReducer from './podcastsListReducer';

const rootReducer = combineReducers({
	pageReducer,
    podcastsListReducer,
});

export default rootReducer;
