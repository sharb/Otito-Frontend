import React from 'react';
import {render} from 'react-dom';

export default class Home extends React.Component {


	constructor(props) {
		super(props);

	}

	
	render() {
	
		return (

			<div className="d-flex">
				<div className="p-2 mt-5">
					<div className="row mt-5">
						<div className="col-9">
							<div className="row">
								<div className="col-12">
									<h1 className=""><strong>Society's most democratic tool for documenting and sharing objectively verifable political truth</strong></h1>
								</div>
								<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
									<div className="input-group  searchbar-col ">
										<input type="text" className="searchbar form-control form-control-lg" placeholder="Search for the truth about anything..." aria-label="truth"/>
									   {/* <img className=" img-fluid searchbar-icon" src="/public/third-party-packages/open-iconic/svg/magnifying-glass.svg" alt="magnifying-glass"/> */}
									   <span className="fas fa-search searchbar-icon"></span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-3">
							<img src="/public/images/people.png" id="home-people-img"  alt="Responsive image"/>
						</div>
					</div>
				</div>
			</div>
		
			
		
		);
	}

	
}

