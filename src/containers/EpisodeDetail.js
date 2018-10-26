import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PodcastItemDetail from '../components/PodcastItemDetail';
import EpisodeItemDetail from '../components/EpisodeItemDetail';

import ACTIONS from '../actions';

class EpisodeDetail extends Component {
    constructor(props) {
		super(props);
        this.getEpisode = this.getEpisode.bind(this);
	}

	componentWillMount() {
		const { podcastsDetail, getPodcast, match: { params } } = this.props;
        const { idPodcast } = params;
		const item = podcastsDetail[idPodcast];
		const expirationDate = podcastsDetail[idPodcast] ? podcastsDetail[idPodcast].expirationDate : null;

		// If it's empty or has expired
		if (!podcastsDetail || !item || new Date(expirationDate) < new Date()) {
			getPodcast(idPodcast);
		}
    }

    getEpisode(idEpisode, episodes) {
        const currentEpisode = episodes.find((episode) => {
            return episode.id === idEpisode;
        });

        return currentEpisode;
    }

    render() {
        const { podcastsDetail, match: { params } } = this.props;
        const { idEpisode, idPodcast } = params;
    	const item = podcastsDetail[idPodcast];
        const { episodes } = item;
    	const currentEpisode = this.getEpisode(idEpisode, episodes);

    	if (!item && !item.episodes) {
            return null
        }

        return (
            <div className="container detail-page">
                <PodcastItemDetail item={item} />
                <EpisodeItemDetail item={currentEpisode} />
            </div>
        );
    }
}

function mapStateToProps(state) {
	return {
		podcastsDetail: state.podcastsDetailReducer,
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(ACTIONS, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EpisodeDetail);
