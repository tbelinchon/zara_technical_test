import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ACTIONS from './../actions';

import './styles/Searchbar.css';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		const { filterPodcasts } = props;

		this.state = {
			term: '',
		};
		filterPodcasts('');
	}

	componentDidMount() {
		const { getAllPodcasts, podcastsList, expirationDate } = this.props;

		// If it's empty or has expired
		if (!podcastsList || !podcastsList.length || new Date(expirationDate) < new Date()) {
			getAllPodcasts();
		}
	}

	onInputChange(term) {
		const { filterPodcasts } = this.props;

		this.setState({ term: term }, () => {
			filterPodcasts(term);
		});
	}

	render() {
		const { term } = this.state;
		const { podcastsFilteredList } = this.props;

		return (
			<div className="filter">
				<span className="total-items">{podcastsFilteredList.length}</span>
	         	<input
					value={term}
					onChange={event => this.onInputChange(event.target.value)}
					placeholder="Filter podcasts..." />
	        </div>
		);
	}

}

function mapStateToProps(state) {
	return {
		podcastsList: state.podcastsListReducer.podcastsList,
		podcastsFilteredList: state.podcastsListReducer.podcastsFilteredList,
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(ACTIONS, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
