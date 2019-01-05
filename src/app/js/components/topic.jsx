import React from 'react';
import {render} from 'react-dom';

export default class Topic extends React.Component {


	constructor(props) {
		super(props);

	}

	
	render() {
	
		return (

			<div className="card-deck">
				<div className="container">
				    <div className="row">
				        <div className="p-0 col-md-4 col-lg-4">
				            <div className="topic-card card h-100 center-content-h">
				                <div className="card-img-caption">
    								<p className="card-text">Test</p>
				                	<img className="card-img-top" src="/public/images/forest.jpg" alt="Card image cap"/>
				          
				                </div>
				                <div className="card-body">
							     <h5 className="card-title">Is global warming influenced by human activities?</h5>
							   {/*   <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p> */}
							      <p className="card-text"><small className="text-muted">Today</small></p>
							    </div>
				            </div>
				        </div>
				        <div className="p-0 col-md-4 col-lg-4">
				            <div className="topic-card  card h-100 center-content-h ">
				                <div className="card-img-caption">
    								<p className="card-text">Test</p>
				                	<img className="card-img-top" src="/public/images/illegal-immigration.jpg" alt="Card image cap"/>
				                </div>
				                <div className="card-body">
							      <h5 className="card-title">Is Illegal Immigration having a negative impact...</h5>
							      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
							    </div>
				            </div>
				        </div>
				        <div className="p-0 col-md-4 col-lg-4">
				            <div className="topic-card   card h-100 center-content-h ">
				            	 <div className="card-img-caption">
    								<p className="card-text">Test</p>
				            		<img className="card-img-top" src="/public/images/couple.jpg" alt="Card image cap"/>
				                </div>
				                <div className="card-body">
							      <h5 className="card-title">Is there a relationship between IQ and race?</h5>
							      <p className="card-text"><small className="text-muted">Last updated yesterday</small></p>
							    </div>
				            </div>
				        </div>
				    </div>
				</div>
			</div>
		
			
		
		);
	}

	
}

