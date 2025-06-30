import React, { Component } from "react";

class Project extends Component {
	state = {
		showInfo: false,
	};
	handleInfo = () => {
		this.setState({
			showInfo: !this.state.showInfo,
		});
	};

	render() {
		let { name, languagesIcons, source, info, picture } = this.props.item;

		return (
			<div className="project">
				<div className="icons">
					{languagesIcons.map((icon) =>
						icon.includes("fa-") ? (
							<i className={icon} key={icon}></i>
						) : (
							<img
								key={icon}
								src={icon}
								style={{ width: "20px", height: "20px" }}
								alt=""
							/>
						)
					)}
				</div>

				<h3>{name}</h3>
				<img src={picture} alt="" onClick={this.handleInfo} />
				<span className="infos">
					<i className="fas fa-plus-circle" onClick={this.handleInfo}></i>
				</span>

				{this.state.showInfo && (
					<div className="showInfos">
						<div className="infosContent">
							<div className="head">
								<h2>{name}</h2>
								<div className="sourceCode">
									<a
										href={source}
										rel="noopener noreferrer"
										className="button"
										target="_blank"
									>
										Lien
									</a>
								</div>
							</div>
							<p className="text">{info}</p>
							<div className="button return" onClick={this.handleInfo}>
								Retournez sur la page
							</div>
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default Project;
