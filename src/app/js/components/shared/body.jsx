import React from 'react';
import {render} from 'react-dom';
import {
  Route
} from 'react-router-dom';


// pages
import About from '../about.jsx';
import Home from '../home.jsx';
import Topic from '../topic.jsx';
import Join from '../join.jsx';
import Contribute from '../contribute.jsx';


export default class Body extends React.Component {


	constructor(props) {
		super(props);

	}

	
	render() {
	
		return (
		
            <div className="container-fluid p-0" id="bootstrap-override">
				<Route exact path='/' component={Home}/>
				<Route exact path='/topics' component={Topic}/>
				<Route exact path='/contribute' component={Contribute}/>
				<Route exact path='/join' component={Join}/>
				<Route exact path='/about' component={About}/>
			</div>
		);
	}

	
}

