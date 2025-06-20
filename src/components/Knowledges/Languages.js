import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "Javascript", p: 1.8 },
      { id: 2, value: "Css", p: 2 },
      { id: 3, value: "Php", p: 0.7 },
      { id: 4, value: "Python", p: 0.4 },
    ],
    frameworks: [
      { id: 1, value: "React", p: 1.4 },
      { id: 2, value: "Bootstrap", p: 1.5 },
      { id: 3, value: "sass", p: 2 },
      { id: 4, value: "Material UI", p: 0.5 },
    ],
  };

  render() {
    let { languages, frameworks } = this.state;
    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="
        languagesDisplay"
          title="languages"
        />
        <ProgressBar
          languages={frameworks}
          className="
              framworksDisplay"
          title="framworks et bibliothèque"
        />
      </div>
    );
  }
}

export default Languages;
