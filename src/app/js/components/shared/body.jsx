import React from 'react';
import {render} from 'react-dom';
import {
  Route
} from 'react-router-dom';


// pages
import About from '../about.jsx';
import Home from '../home.jsx';
import Join from '../join.jsx';
import Mission from '../mission.jsx';


export default class Body extends React.Component {


	constructor(props) {
		super(props);

	}

	
	render() {
	
		return (
		
            <div className="container-fluid p-0" id="bootstrap-override">
				<Route exact path='/' component={Home}/>
				<Route exact path='/join' component={Join}/>
				<Route exact path='/about' component={About}/>
				<Route exact path='/missions' component={Mission}/>
				<Route component={Home} />
			</div>
		);
	}

	
}

