import React from "react";
import Navigation from "../components/Navigation";

const Contact = () => {
	return (
		<div className="contact">
			<Navigation />
			<div className="contactContent">
				<div className="header"></div>
				<div className="contactBox">
					<h1>Contactez-moi</h1>
					<ul>
						<li>
							<i className="fas fa-map-marker-alt"></i>
							<span>3 grande rue 38150 Roussillon</span>
						</li>
						<li>
							<i className="fas fa-mobile-alt"></i>
							<span className="clickInput">06 62 31 68 23</span>
						</li>
						<li>
							<i className="far fa-envelope"> </i>
							<span className="clickInput">Mail:lhutinet@free.fr</span>
						</li>
					</ul>
				</div>
				<div className="socialNetwork">
					<ul>
						<a
							href="https://www.linkedin.com/in/laurent-hutinet-8391ba338/"
							rel="noopener noreferrer"
							target="_blank"
						>
							<h4>LinkedIn</h4>
							<i className="fab fa-linkedin"></i>
						</a>
						<a
							href="https://github.com/lhutinet"
							rel="noopener noreferrer"
							target="_blank"
						>
							<h4>GitHub</h4>
							<i className="fab fa-github"></i>
						</a>
						<a
							href="https://x.com/pludsou1"
							rel="noopener noreferrer"
							target="_blank"
						>
							<h4>Twitter</h4>
							<i className="fab fa-twitter"></i>
						</a>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Contact;
