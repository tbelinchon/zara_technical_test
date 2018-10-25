import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Store from './store';
import AppRoutes from './routes';

render(
	<Provider store={Store}>
		<Router>
			<AppRoutes />
		</Router>
	</Provider>,
	document.querySelector('.app')
);
