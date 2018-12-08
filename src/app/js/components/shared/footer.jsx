import React from 'react';
import {render} from 'react-dom';

export default class Footer extends React.Component {


	constructor(props) {
		super(props);

	}

	
	render() {
	
		return (
			<footer id="footer">
				<div className="container-fluid">
					<div className="d-flex justify-content-between">	
						<div className="p-2"></div>
						<div className="p-2">
							<p className="center-content-v">© 2018 òtító. All rights reserved.</p>
						{/*
							<div className=" social-media">
								<img className="m-0 img-fluid social-media-icon" src="/public/images/facebook.png" alt="facebook"/> 
							</div>
							<div className=" social-media">
								<img className="m-0 img-fluid social-media-icon" src="/public/images/linkedin.png" alt="linkedin"/>
							</div>
							<div className="social-media">
								<img className="m-0 img-fluid social-media-icon" src="/public/images/twitter.png" alt="twitter"/>
							</div>
						*/}
						</div>
						<div className="p-2">
							<span className="footer-text">òtító</span>
						</div>
					</div>
				</div>
			</footer>

		);
	}

	
}

