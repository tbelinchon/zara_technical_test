import { combineReducers } from 'redux';

import pageReducer from './pageReducer';
import podcastsListReducer from './podcastsListReducer';
import podcastsDetailReducer from './podcastsDetailReducer';

const rootReducer = combineReducers({
	pageReducer,
    podcastsListReducer,
	podcastsDetailReducer,
});

export default rootReducer;
