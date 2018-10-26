import axios from 'axios';
import xml2js from 'xml2js';

import { showLoading, showError } from './page';
import { formatPodcast } from '../utils/podcast';

import * as TYPES from './types';
import { ITUNES_URL, CORS_PROXY } from '../utils/const';

/*
 * Get podcast Episodes from feed url
 */
export function getFeedData(feedUrl) {
    return axios.get(`${CORS_PROXY}?${feedUrl}`).then(({ data }) => {
        const parser = new xml2js.Parser();

        return new Promise((resolve) => {
            parser.parseString(data, (err, jsonData) => {
                resolve(jsonData.rss.channel[0]);
            });
        });
    });
}

/*
 * Get podcast
 */
export function getPodcast(id) {
    return (dispatch) => {
        dispatch(showLoading(TYPES.PAGE_LOADING, true));

        axios.get(`${CORS_PROXY}?${ITUNES_URL}lookup?id=${id}`)
            .then(({ data }) => {
                const result = data.results[0];
                const podcastFeedUrl = result.feedUrl;

                return getFeedData(podcastFeedUrl).then((podcastFeedData) => {
                    dispatch({
                        type: TYPES.GET_PODCAST,
                        payload: formatPodcast.serializeDetail({ ...result, ...podcastFeedData }),
                        id,
                    });
                    dispatch(showLoading(TYPES.PAGE_LOADING, false));
                });
            })
            .catch(error => dispatch(showError(TYPES.PAGE_ERROR, true, error)));
    };
}
