import React from 'react';
import {render} from 'react-dom';




import ScrollSnap from 'scroll-snap'
import Waypoint from 'react-waypoint';








export default class Home extends React.Component {


	constructor(props) {
    	super(props);
  	}

	componentDidMount() {
		
		
	}


	render() {
	
		return (

			<div id="snap-container" ref={this.snapcontainer}>
				<div className="page first-page slide slide-one d-flex">
					<div className="mt-5">
						<div className="row mt-5">
							<div className="col-12">
								<div className="row">
									<div className="offset-1 col-10 home-description">
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
				</div>

				<Waypoint
				  onEnter={this._handleWaypointEnter}
				  onLeave={this._handleWaypointLeave}
				/>
	
			    <div className="page second-page slide slide-two">
				    <img src="/public/images/screenshots/simple_view.png" width="800"  className="img-fluid img-thumbnail float-left" alt=""/>				       
				    <div className="slide-description">
				    	<h2>Explore nuances in the truth consensus on any topic</h2>
			        	<p>òtító lets you solicit or contribute objectively verifiable truths to discussions about difficult topics in society.</p>
			    	</div>
			    </div>
			    <div className="page third-page slide slide-three">
			    	<img src="/public/images/screenshots/contributer_view.png" width="800"  className="img-fluid img-thumbnail float-right" alt=""/>
			        <div className="slide-description">
			        	<h2>Take back control of how key issues are framed</h2>
			        	<p> òtító empowers all users to regulate the quality of sources, veracity of claims and the behaviour of each other, so we can maintain a platform we all trust </p>
			        </div>
			    </div>
			</div>
			
		
		);
	}

	
}


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

// ES6
function debounced(delay, fn) {
  let timerId;
  return function (...args) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn(...args);
      timerId = null;
    }, delay);
  }
}



const myHandler = (event) => function(){console.log("stopped")}// do something with the event
const dHandler = debounced(200, myHandler);
window.addEventListener("scroll", dHandler);
