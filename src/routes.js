import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './containers/App';
import Home from './components/Home';
import PodcastDetail from './containers/PodcastDetail';
import EpisodeDetail from './containers/EpisodeDetail';

const AppRoutes = () =>
	<App>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/podcast/:id" component={PodcastDetail} />
			<Route exact path="/podcast/:idPodcast/episode/:idEpisode" component={EpisodeDetail} />
		</Switch>
	</App>

export default AppRoutes;
