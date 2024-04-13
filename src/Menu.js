import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <React.Fragment>
      <div className="container">
      
        <div className="header">
          <h1>harshank kanungo</h1>
          <div className="store">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/service">Service</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Menu;
