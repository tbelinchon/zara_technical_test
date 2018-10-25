import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './containers/App';
import Home from './components/Home';

const AppRoutes = () =>
	<App>
		<Switch>
			<Route exact path="/" component={Home} />
		</Switch>
	</App>

export default AppRoutes;
