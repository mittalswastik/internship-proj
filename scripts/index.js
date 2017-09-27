import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Filter from './Filter'


render(
  <div>
  	<Router history={browserHistory}>
  		<Route path = "/" component={App} />
  		<Route path = "/filter" component={Filter} />
  	</Router>
  </div>,
  document.getElementById('root')
);
