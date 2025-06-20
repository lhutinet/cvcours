import React from "react";
import Navigation from "../components/Navigation";
import Languages from "../components/Knowledges/Languages";
import Experience from "../components/Knowledges/Experience";
import OtherSkills from "../components/Knowledges/OtherSkills";
import Hobbies from "../components/Knowledges/Hobbies";

const Knowledges = () => {
  return (
    <div className="knowledges">
      <Navigation />
      <div className="knowledgesContent">
        <Languages />
        <Experience />
        <OtherSkills />
        <Hobbies />
      </div>
    </div>
  );
};

export default Knowledges;
