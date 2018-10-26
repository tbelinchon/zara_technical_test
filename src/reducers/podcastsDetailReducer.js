import * as TYPES from '../actions/types';
import { EXPIRATION_DATE } from '../utils/const';

const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case TYPES.GET_PODCAST:
            // If podcast isn't in state
            if (!state[action.id]) {
                return {
                    ...state,
                    [action.id]: { ...action.payload, expirationDate: EXPIRATION_DATE },
                };
            }
            return state;
        default:
            return state;
    }
}
