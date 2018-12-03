import React from 'react';
import {render} from 'react-dom';
import MediaQuery from 'react-responsive';




import ScrollSnap from 'scroll-snap'
import Waypoint from 'react-waypoint';


import Header from "./shared/header.jsx";





export default class Home extends React.Component {


	constructor(props) {
    	super(props);
    	this.state = {smallDevice: false};
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
											<span className="line1 home-header">Society's most democratic tool for</span>
											<span className="line2 home-header">documenting and sharing objectively verifiable</span>
											<span className="line3 home-header">political truth</span>
									</div>
									
								</div>
							</div>
						</div>
					</div>

					<MediaQuery query="(max-device-width: 500px)">
					 TESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTE
					</MediaQuery>
					
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




$(document).ready(function(){
	var w = $(document).width();
	console.log(w);

	if(w<500) {
		
		setTimeout(function(){
		 //  $('.home-header').css('font-size','2em');
		  // document.getElementById("upscribe-form-home").style.display = "none";
		}, 200);

		
	}else{
		//document.getElementById("upscribe-form-link").style.display = "none";
	}

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

