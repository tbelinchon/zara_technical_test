import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PodcastItemDetail from '../components/PodcastItemDetail';
import PodcastEpisodesList from '../components/PodcastEpisodesList';

import ACTIONS from '../actions';

class PodcastDetail extends Component {
    constructor(props) {
		super(props);
	}

	componentWillMount() {
		const { podcastsDetail, getPodcast, match: { params } } = this.props;
        const { id } = params;
		const item = podcastsDetail[id];
		const expirationDate = podcastsDetail[id] ? podcastsDetail[id].expirationDate : null;

		// If it's empty or has expired
		if (!podcastsDetail || !item || new Date(expirationDate) < new Date()) {
			getPodcast(id);
		}
    }

    render() {
        const { podcastsDetail, match: { params } } = this.props;
		const item = podcastsDetail[params.id];
        const episodes = item ? item.episodes : null;

        if (!item) {
            return null;
        }
		return (
			<div className="container detail-page">
				<PodcastItemDetail item={item} />
				<PodcastEpisodesList episodes={episodes} />
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

export default connect(mapStateToProps, mapDispatchToProps)(PodcastDetail);
