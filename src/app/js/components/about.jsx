import React from 'react';
import {render} from 'react-dom';
import Footer from './shared/footer.jsx';
export default class About extends React.Component {


	constructor(props) {
		super(props);

	}

	
	render() {
	
		return (
			<section className="" id="about">
				<div className="full-width-container">
					<div className="row about-div">
						<div className="col-12">
							<h3>Fostering socio-cultural and political progress, using the power of truth</h3>
							<p>
								The truth is not “one superseding fact”, as often presumed—it is, simultaneously, a collection of many interrelated facts. It is multifaceted and not all facets of a given truth point in the same direction. The problem is people have become exceptionally adept at acknowledging only the facets of truth which support their preconceptions.
							</p>
							<p>
								Our platform combats this ingredient of polarisation, deception and misinformation by gathering in one place, all facets of objectively verifiable truth. 
							</p>
							<p>
								We’re relying on a few guiding principles as we tackle this formidable problem. 
							</p>

							<h5>Truth axiom</h5>
							<p>
								There is one foundational tenet of truth that can have utility in the public sphere, with which it is impossible to disagree without disagreeing with the value and existence of objective truth itself. Truth must be “objectively verifiable” by anyone, for it to have universal utility. There are other, personal kinds of truth, but these cannot be used as the gel of social cohesion, since they cannot be known by all the people they seek to bind. Truth only has value if it is known to be true–—and if truth is to be valued by all, then it must be knowable by all. 
							</p>
							<h5>Democratised tool</h5>
							<p>
								We will rely on a community of users to contribute and moderate facts (and their sources) on the platform. Trust in traditional (e.g. news publishers) and non-traditional (e.g. social media platforms) sources of information is at an all-time low and getting lower still. The transparent and consensus-based nature of the standards of our platform will help rejuvenate that trust in online information. 
							</p>
							<h5>Distilled truth</h5>
							<p>
								A graphical interface which presents information in a way that makes it easy for users to consume only the most objectively verified facts relating to a particular topic or group of topics. No opinions. No conjecture. No orthodoxy. No usernames. Just the facts.
							</p>

							<h4>Our values</h4>
							<ol >
							<li>
								Truth above all else. Our commitment is to the pursuit of the most pluralistic, accurate and representative picture of truth on any issue. We will never suppress information simply because it is uncomfortable. We are mere agents of truth, not arbiters of it. 
							</li>
							<li>
								Unity over partisanship. We don’t care about political camps or ideological movements, and we will not use our tool to progress or hinder the agendas of any orthodoxy—left or right wing, or anything in between. We wish to highlight how different parts of society can fit together—even at the extremes—not where new opportunities for division lie. 
							</li>
							<li>
								Knowledge transcends fear. We believe fear festers where the light of knowledge does not shine. But, in the face of an information deluge, fear is becoming the preferred tool for coping with complex and uncomfortable realities. Though the acquisition of a well-rounded body of knowledge represents the road less travelled, we believe it is the key to the enlightenment of our collective consciousness. 
							</li>
							</ol>
						</div>
					</div>
				</div>
				<Footer/>
			</section>
		);
	}

	
}











