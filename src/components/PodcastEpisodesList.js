import React from 'react';
import { Link } from 'react-router-dom';

import './styles/PodcastEpisodesList.css';

const PodcastEpisodesList = ({ episodes }) => {
    return (
        <div className="podcast-episodes">
            <h2>{`Episodies: ${episodes.length}`}</h2>

            <div className="table-container">
				<table>
					<thead>
						<tr>
							<th>Title</th>
							<th>Date</th>
							<th>Duration</th>
						</tr>
					</thead>
					<tbody>
                    {episodes.map((episode) => {
                    	return (
                    		<tr key={episode.id}>
                    			<td>
                                    <Link to={`/podcast/${episode.podcastId}/episode/${episode.id}`}>
                    					{episode.title}
                    				</Link>
                    			</td>
                    			<td>{episode.pubDate}</td>
                    			<td>{episode.duration}</td>
                    		</tr>
                    	);
                    })}
					</tbody>
				</table>
			</div>
       </div>
    );
};

export default PodcastEpisodesList;
