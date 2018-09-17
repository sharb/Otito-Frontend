import React from 'react';
import {render} from 'react-dom';
import {
  Link
} from 'react-router-dom';

export default class Header extends React.Component {


	constructor(props) {
		super(props);

	}

	
	render() {
	
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
			  	<a className="navbar-brand" href="#">Otito</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				    <span className="navbar-toggler-icon"></span>
				</button>
			  	<div className="collapse navbar-collapse" id="navbarNav">
			    	<ul className="navbar-nav">
			      		<li className="nav-item active">
			        		<Link to='/' className="nav-link">home</Link>
			      		</li>
			      		<li className="nav-item">
			        		<Link to='/about' className="nav-link">about</Link>
			      		</li>
			    	</ul>
			  	</div>
			</nav>

		);
	}

	
}

