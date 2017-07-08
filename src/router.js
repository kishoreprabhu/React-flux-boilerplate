import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import MainLayout from './views/mainlayout.jsx'
import Home from './views/home.jsx';
import SearchResult from './views/searchresults.jsx';

export default ( 
		<Router  history={browserHistory}>
					<Route component={MainLayout} >
						<Route path="/" component={Home} />
						<Route path="/spoylpic/search/:id"  component={SearchResult}/>
					</Route>
		</Router>
);


