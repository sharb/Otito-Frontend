import React from 'react';
import {render} from 'react-dom';
import {
  Route
} from 'react-router-dom';


// pages
import About from './about.jsx';
import Home from './home.jsx';
import Join from './join.jsx';
import Contribute from './contribute.jsx';


export default class Body extends React.Component {


	constructor(props) {
		super(props);

	}

	
	render() {
	
		return (
			<span>
				<Route exact path='/' component={Home}/>
				<Route exact path='/contribute' component={Contribute}/>
				<Route exact path='/join' component={Join}/>
				<Route exact path='/about' component={About}/>
			</span>
		);
	}

	
}

