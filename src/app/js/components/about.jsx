import React from 'react';
import {render} from 'react-dom';

export default class About extends React.Component {


	constructor(props) {
		super(props);

	}

	
	render() {
	
		return (
			<section className="section-sub">
				<div className="d-flex full-width-container">
					<div className="row">
						<div className="offset-3 col-6">
							<div className="center-content-v">
								<h3>The world’s Platform for creating shared narratives of truth</h3>
								<p>
									The world is creating way more information than it knows how to handle. This is breaking society apart—especially at political, cultural and policy levels. 
									<br/><br/>
									We believe we have devised a solution to this—a platform that will be the new way trustworthy information is generated and disseminated online. No longer will people have to worry about issues of fake news on platforms like Facebook and other social media—or of bias and political affiliations/agendas with traditional news media.
									<br/><br/>
									As information becomes highly commodified and devalued, we believe people will place more value on less information of unquestionable reliability—than on more information of questionable truthfulness. 
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}

	
}











