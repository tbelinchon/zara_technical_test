import React, { Component } from 'react';
import { connect } from 'react-redux';

import PodcastItemList from './../components/PodcastItemList';

import './styles/PodcastList.css';

class PodcastList extends Component {
	createPodcastsList() {
		const { podcastsFilteredList } = this.props;

		if (podcastsFilteredList && podcastsFilteredList.length) {
			return podcastsFilteredList.map(item => (<PodcastItemList key={item.id} item={item} />));
		}
	}

	render() {
	    return (
			<div className="podcast-list">
			   	{this.createPodcastsList()}
			</div>
        );
	}
}

function mapStateToProps(state) {
	return {
		podcastsFilteredList: state.podcastsListReducer.podcastsFilteredList,
	};
}

export default connect(mapStateToProps)(PodcastList);
