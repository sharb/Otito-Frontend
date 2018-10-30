import React from 'react';
import {render} from 'react-dom';

export default class Footer extends React.Component {


	constructor(props) {
		super(props);

	}

	
	render() {
	
		return (
			<footer className="footer">
				<div className="container">
					<div className="d-flex justify-content-center">	
						<div className="p-2 social-media">
							<img className="m-0 img-fluid social-media-icon" src="/public/images/facebook.png" alt="facebook"/> 
						</div>
						<div className="p-2 social-media">
							<img className="m-0 img-fluid social-media-icon" src="/public/images/linkedin.png" alt="linkedin"/>
						</div>
						<div className="p-2 social-media">
							<img className="m-0 img-fluid social-media-icon" src="/public/images/twitter.png" alt="twitter"/>
						</div>	
					</div>
				</div>
			</footer>

		);
	}

	
}

