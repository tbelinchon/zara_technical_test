import axios from 'axios';

import { showLoading, showError } from './page';
import { formatPodcast } from './../utils/podcast';

import * as TYPES from './types';
import { ITUNES_URL } from './../utils/const';

/**Get all podcasts **/
export function getAllPodcasts() {
    return (dispatch) => {
        dispatch(showLoading(TYPES.PAGE_LOADING, true));

        axios.get(`${ITUNES_URL}us/rss/toppodcasts/limit=100/genre=1310/json`)
            .then(({ data }) => {
                let formatData = [];

                data.feed.entry.forEach(podcast => {
                    formatData.push(formatPodcast(podcast));
                });

                dispatch({
                    type: TYPES.GET_ALL_PODCASTS,
                    payload: formatData,
                });

                dispatch(showLoading(TYPES.PAGE_LOADING, false));
            })
            .catch((error) => dispatch(showError(TYPES.PAGE_ERROR, true, error)));
    };
}

/** Filter podcast list **/
export function filterPodcasts(term) {
    return (dispatch, getState) => {
        const termLowerCase = term.toLowerCase();
        const data = [ ...getState().podcastsListReducer.podcastsList ];
        const results = data.filter(item => {
            return termLowerCase === '' || item.name.toLowerCase().indexOf(termLowerCase) >= 0 || item.author.toLowerCase().indexOf(termLowerCase) >= 0;
        });

        dispatch({
            type: TYPES.FILTER_PODCASTS,
            payload: results,
        });
    }
}
