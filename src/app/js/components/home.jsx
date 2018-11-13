import React from 'react';
import {render} from 'react-dom';




import ScrollSnap from 'scroll-snap'
import Waypoint from 'react-waypoint';


import Header from "./shared/header.jsx";





export default class Home extends React.Component {


	constructor(props) {
    	super(props);
  	}

	componentDidMount() {
		
		
	}


	render() {
	

		return (

		
			<span>
				<section id="section01">
				  	<div className="p-0 slide slide-one">
						<div className="row">
							<div className="col-12">
								<div className="row">
									<div className="col-12 home-description" align="center">
										<br/><br/><br/><br/>
											<h1 className="line1 home-header"><strong>Society's most democratic tool for</strong></h1>
											<h1 className="line2 home-header"><strong>documenting and sharing objectively verifable</strong></h1>
											<h1 className="line3 home-header"><strong>political truth</strong></h1>
									</div>
									<div className="offset-3 col-6">
										<div className="input-group upscribe-col ">
											<iframe src="https://upscri.be/fe37e0?as_embed" height="400" frameBorder="0" className="upscribe-form-home"></iframe>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="d-flex align-items-center">
						<a href="#section02" className="section-link"><span>
				  		</span>See More</a>
					</div>
				</section>


				
				<section id="section02" className="p-0 section-body">
					<div className="p-0 d-flex align-items-center slide slide-two">
						<img src="/public/images/screenshots/simple_view.png" width="800" height="550" className="img-fluid img-thumbnail float-left" alt=""/>				       
					    <div className="slide-description">
					    	<h2>Explore nuances in the truth consensus on any topic</h2>
				        	<p>òtító lets you solicit or contribute objectively verifiable truths to discussions about difficult topics in society.</p>
				    	</div>
						<div className="bd-highlight">

							<a href="#section03" className="section-link"><span>
				  				</span></a>
				  		
						</div>
					</div>
				</section>
				<section id="section03" className="p-0 m-0 section-sub2">
					<div className="p-0 d-flex align-items-center slide slide-three">				       
					    <div className="slide-description">
					    	<h2>Take back control of how key issues are framed</h2>
				        	<p> òtító empowers all users to regulate the quality of sources, veracity of claims and the behaviour of each other, so we can maintain a platform we all trust </p>
						</div>
						<img src="/public/images/screenshots/contributer_view.png" width="800" height="550" className="img-fluid img-thumbnail float-right" alt=""/>
						<div className="bd-highlight">

							<a href="#top-section" className="section-link"><span>
				  				</span></a>
				  		
						</div>
					</div>
				</section>

				
			</span>
			
		
		);
	}

	
}


{/* https://codepen.io/nxworld/pen/OyRrGy */}
$(function() {
$('.section-link').on('click', function(e) {
   e.preventDefault();
   $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
 });
});


{/*
this.state = {
	     	scrollStatus:''
	    };
	    this._timeout = null;
	    this.handleScroll = this.handleScroll.bind(this);



 if(this._timeout){ //if there is already a timeout in process cancel it
  clearTimeout(this._timeout);
 }
 this._timeout = setTimeout(() => {
   this._timeout = null;
   this.setState({
     scrollStatus:'scroll stopped'
   });
 },1000);
 if(this.state.scrollStatus !== 'scrolling') {
   this.setState({
     scrollStatus:'scrolling'
   });
 }
(*/}

