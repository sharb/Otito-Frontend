import React from 'react';
import {render} from 'react-dom';








export default class Home extends React.Component {


	constructor(props) {
		super(props);

	}

	
	render() {
	
		return (

			<div className="snappy">
				<div className="slide slide-one d-flex snappy-content">
					<div className="mt-5">
						<div className="row mt-5">
							<div className="col-12">
								<div className="row">
									<div className="offset-1 col-10">
										<h1 className="line1 home-header">Society's most democratic tool for</h1>
										<h1 className="line2 home-header">documenting and sharing objectively verifable</h1>
										<h1 className="line3 home-header">political truth</h1>
									</div>
									<div className="offset-3 col-6">
										<div className="input-group upscribe-col ">
											<iframe src="https://upscri.be/fe37e0?as_embed" height="400" frameBorder="0" className="upscribe-form"></iframe>
										</div>
									</div>
								</div>
							</div>
		
						</div>
					</div>
				</div>

	
			    <div className="slide slide-two snappy-content">
				    <img src="/public/images/screenshots/create_a_thesis.png" width="800"  className="img-fluid img-thumbnail float-left" alt=""/>				       
				    <div className="slide-description">
				    	<h2>Create a thesis</h2>
			        	<p>Nullam viverra, justo vel facilisis elementum, dolor mi varius metus, vitae iaculis libero neque non lorem. Aliquam erat volutpat.</p>
			    	</div>
			    </div>
			    <div className="slide slide-three snappy-content">
			    	<img src="/public/images/screenshots/submit_claim.png" width="800"  className="img-fluid img-thumbnail float-right" alt=""/>
			        <div className="slide-description">
			        	<h2>Submit a claim</h2>
			        	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, quod. Pellentesque posuere tincidunt ultrices.  </p>
			        </div>
			    </div>
			    <div className="slide slide-four snappy-content">
			    	<img src="/public/images/screenshots/thesis.png" width="800"  className="img-fluid img-thumbnail float-left" alt=""/>
			        <div className="slide-description">
			        	<h2>Submit a claim</h2>
			        	<p>Curabitur libero nisl, egestas in vestibulum s Pellentesque posuere tincidunt ultrices.  </p>
			        </div>
			    </div>
			</div>
			
		
		);
	}

	
}
