import React from 'react';
import {render} from 'react-dom';

export default class Home extends React.Component {


	constructor(props) {
		super(props);

	}

	
	render() {
	
		return (
			<div className="h-100">
			  <div className="row h-100 align-items-center">
			    <div className="col-12 col-md-8">
			    	<h1><strong>Society's most democratic tool for documenting and sharing objectively verifable political truth</strong></h1>
			    	<br/>
			    	<div className="input-group mb-3">
						<input type="text" className="searchbar form-control form-control-lg" placeholder="Search for the truth about anything..." aria-label="truth"/>
					   {/* <img className=" img-fluid searchbar-icon" src="/public/third-party-packages/open-iconic/svg/magnifying-glass.svg" alt="magnifying-glass"/> */}
					   <span className="fas fa-search searchbar-icon"></span>
						
					</div>


				

			    </div>
			  </div>
			</div>
		);
	}

	
}

