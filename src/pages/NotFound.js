import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFound">
      <div className="notFoundContent">
        <h3>Cette page n'existe pas </h3>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <i className="fas fa-home"></i>
          <span>Accueil</span>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
