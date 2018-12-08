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

			
			<nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white">
				<div className="p-0 container">
			        <div className="d-flex align-items-center">
			        	<div className="p-2">
			        		<a className="m-0 navbar-brand " href="/">
					            <img src="/public/images/otito-logo_burned.png" width="50" height="35" className="p-0 d-inline-block" alt="profile-pic"/>
					        </a>
			        	</div>
			        	<div className="p-2">
			        		<h3>òtító</h3>
			        	</div>
			        </div>
					        
				    <div className="d-flex">   
				        <div className=" p-2 ">
					        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar">
					            <span className="navbar-toggler-icon"></span>
					        </button>
				        </div>
				        <div className="p-2">
					         <div className="collapse navbar-collapse" id="myNavbar">
						        <ul className="navbar-nav ml-auto flex-nowrap">
						            <li className="nav-item">
						                <Link to='/' className="nav-link m-2 menu-item">HOME</Link>
						            </li>
						            <li className="nav-item">
						                <Link to="/join" className="nav-link m-2 menu-item">JOIN</Link>
						            </li>
						            <li className="nav-item">
						                <Link to="/about" className="nav-link m-2 menu-item">ABOUT</Link>
						            </li>
						            <li className="nav-item">
						                <Link to="/mission" className="nav-link m-2 menu-item">MISSION</Link>
						            </li>
						        </ul>
						    </div>
						</div>
						<div className="p-2">
							{/*<img src="/public/images/pro-pic.jpg" width="50" height="50" className="d-inline-block" alt="profile pic" id="profile-pic"/>*/}
						</div>
				    </div>
				   
				</div>
			</nav>


		);
	}

	
}

