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
						{/* <a href="./media/2025-02-07-LAURENT HUTINET.pdf" target="_blank">
							Télécharger CV
						</a> */}
						<p>
							Développeur web polyvalent, je crée des sites internet sur
							WordPress, Wix ou en code personnalisé (HTML, CSS, JavaScript,
							Vue.js).
							<br />
							<br />
							Je conçois des projets sur mesure, modernes et responsives, en
							privilégiant la clarté et la qualité du code.
							<br />
							<br />
							Mon objectif :
							<br />
							<br />
							rendre votre présence en ligne unique et efficace.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
