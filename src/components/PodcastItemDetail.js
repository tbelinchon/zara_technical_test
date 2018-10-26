import React from 'react';
import { Link } from 'react-router-dom';

import './styles/PodcastItemDetail.css';

const PodcastItemDetail = ({ item }) => {
	return (
		<div className="podcast-item-detail">
			<Link to={`/podcast/${item.id}`}>
				<img src={item.image} alt={item.name}/>
			</Link>

			<h1>
				<Link to={`/podcast/${item.id}`}>
					<span>{item.name}</span>
					<span>{`by ${item.author}`}</span>
				</Link>
			</h1>

			{item.description ?
				<div className="description">
					<p className="title">Description</p>
					<div className="text" dangerouslySetInnerHTML={{ __html: item.description }} />
				</div>
			: null}
		</div>
	);
};

export default PodcastItemDetail;
