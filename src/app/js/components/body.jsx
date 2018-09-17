import React from 'react';
import {render} from 'react-dom';
import About from './about.jsx';
import Landing from './landing.jsx';
import {
  Route
} from 'react-router-dom';


export default class Body extends React.Component {


	constructor(props) {
		super(props);

	}

	
	render() {
	
		return (
			<span>
				<Route exact path='/' component={Landing}/>
				<Route exact path='/about' component={About}/>
			</span>
		);
	}

	
}

