import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
	return (
		<div className="home">
			<Navigation />
			<div className="homeContent">
				<div className="content">
					<h1>Laurent Hutinet</h1>
					<h2>Developpeur Front-end</h2>
					<div className="pdf">
						<a href="./media/2025-02-07-LAURENT HUTINET.pdf" target="_blank">
							Télécharger CV
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
