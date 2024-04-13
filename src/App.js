import React from "react";
import { Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Menu from "./Menu";
import "./App.css";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import { NavLink } from "react-router-dom";

const App = () => {
  const Error = () => {
    return (
      <React.Fragment>
        <h1>
          this is an error page
          <NavLink to="/">
            <button className="btn1">Go Back</button>
          </NavLink>
        </h1>
      </React.Fragment>
    );
  };
  return (
    <React.Fragment>
      <Menu />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/service" Component={Service} />
        <Route path="/contact" Component={Contact} />
        <Route path="*" Component={Error} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
