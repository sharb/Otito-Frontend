import React from 'react';
import {render} from 'react-dom';

export default class Join extends React.Component {


	constructor(props) {
		super(props);

	}

	
	render() {
	
		return (
			<section className="section-sub">
				<div className="full-width-container d-flex">
						<div className="mt-5">
							<div className="row mt-5">
								<div className="col-12">
									<div className="row">
										<div className="offset-3 col-6 join-me-text">
											<h3 align="center">Join us on our journey to generating & disseminating <i>only</i> trustworthy information. Get exclusive updates and upcoming features of the òtító platorm!</h3>
										</div>
										<div className="offset-3 col-6">
											<div className="input-group upscribe-col">
												<iframe src="https://upscri.be/fe37e0?as_embed" height="275" frameBorder="0" className="upscribe-form-join"></iframe>
											</div>
										</div>
									</div>
								</div>
			
							</div>
						</div>
					</div>
				</section>

		);
	}

	
}

