import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
	return (
		<div className="sidebar">
			<div className="id">
				<div className="idContent">
					<img src="./media/portrait.jpg" alt="profil-pic" />
					<h3>Laurent Hutinet</h3>
				</div>
			</div>
			<div className="navigation">
				<ul>
					<li>
						<NavLink
							to="/"
							className={({ isActive }) => (isActive ? "active" : "")}
						>
							<i className="fas fa-home"></i>
							<span>Accueil</span>
						</NavLink>
					</li>
					{/* <li>
            <NavLink
              to="/Knowledges"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <i className="fas fa-mountain"></i>
              <span>Conpetences</span>
            </NavLink>
          </li> */}
					<li>
						<NavLink
							to="/Portfolio"
							className={({ isActive }) => (isActive ? "active" : "")}
						>
							<i className="fas fa-images"></i>
							<span>Portfolio</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/Contact"
							className={({ isActive }) => (isActive ? "active" : "")}
						>
							<i className="fas fa-address-book"></i>
							<span>Contact</span>
						</NavLink>
					</li>
				</ul>
			</div>
			<div className="socialNetwork">
				<ul>
					<li>
						<a
							href="https://www.linkedin.com/in/laurent-hutinet-8391ba338/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fab fa-linkedin"></i>
						</a>
					</li>
					<li>
						<a
							href="https://github.com/lhutinet"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fab fa-github"></i>
						</a>
					</li>
					<li>
						<a
							href="https://x.com/pludsou1"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fab fa-twitter"></i>
						</a>
					</li>
					{/* <li>
						<a
							href="https://www.google.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fab fa-codepen"></i>
						</a>
					</li> */}
				</ul>
				<div className="signature">
					<p>Laurent Hutinet -2025</p>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
