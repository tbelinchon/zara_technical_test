import * as TYPES from '../actions/types';

const INITIAL_STATE = {
    isLoading: true,
    error: false,
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case TYPES.PAGE_LOADING:
            return { ...state, isLoading: action.isLoading };

        case TYPES.PAGE_ERROR:
            console.log(action.error);
            return { ...state, error: action.hasError, errorMsg: action.error };

        default:
            return state;
    }
}
