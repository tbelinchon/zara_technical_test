import * as TYPES from '../actions/types';
import { EXPIRATION_DATE } from '../utils/const';

const INITIAL_STATE = {
    podcastsList: [],
    podcastsFilteredList: [],
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case TYPES.GET_ALL_PODCASTS:
            return {
                ...state,
                podcastsList: action.payload,
                podcastsFilteredList: action.payload,
                expirationDate: EXPIRATION_DATE,
            };
        case TYPES.FILTER_PODCASTS:
            return { ...state, podcastsFilteredList: action.payload };
        default:
            return state;
    }
}
