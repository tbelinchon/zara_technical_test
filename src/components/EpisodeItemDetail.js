import React from 'react';

import './styles/EpisodeItemDetail.css';

const EpisodeItemDetail = ({ item }) => {
	return (
		<div className="episode-detail">
			<h2>{item.title}</h2>

			<div className="description" dangerouslySetInnerHTML={{ __html: item.description }} />

			<audio controls>
				<source src={item.mp3} type="audio/ogg" />
			</audio>
		</div>
	);
};

export default EpisodeItemDetail;
